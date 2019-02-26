"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = __importDefault(require("sequelize"));
const v4_1 = __importDefault(require("uuid/v4"));
const validation_error_1 = require("../../shared/errors/validation-error");
const error_dictionary_vm_1 = require("../../shared/models/error-dictionary.vm");
const database_util_1 = require("../../shared/utils/database.util");
const date_util_1 = require("../../shared/utils/date.util");
const math_util_1 = require("../../shared/utils/math.util");
const order_entry_vm_1 = require("./order-entry.vm");
class OrderService {
    //#region ORDER
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._areaRepo = mainDbContext.areaRepo();
        this._categoryRepo = mainDbContext.categoryRepo();
        this._customerRepo = mainDbContext.customerRepo();
        this._logRepo = mainDbContext.logsRepo();
        this._modifierItemRepo = mainDbContext.modifierItemRepo();
        this._modifierRepo = mainDbContext.modifierRepo();
        this._orderLineModifierRepo = mainDbContext.orderLineModifierRepo();
        this._orderLineRepo = mainDbContext.orderLineRepo();
        this._orderPaymentRepo = mainDbContext.orderPaymentRepo();
        this._orderRepo = mainDbContext.orderRepo();
        this._orderTaxRepo = mainDbContext.orderTaxRepo();
        this._outletSettingRepo = mainDbContext.outletSettingRepo();
        this._pricelist = mainDbContext.pricelistRepo();
        this._productRepo = mainDbContext.productRepo();
        this._productVariantRepo = mainDbContext.productVariantRepo();
        this._productVariantRepo = mainDbContext.productVariantRepo();
        this._salestype = mainDbContext.salesTypeRepo();
        this._tableRepo = mainDbContext.tableRepo();
        this._taxRepo = mainDbContext.taxRepo();
        this._productToModifierRepo = mainDbContext.productToModifierRepo();
        this._paymentMethodRepo = mainDbContext.paymentMethodRepo();
    }
    //#region ORDER_ENTRY
    getNewOrderEntryObject() {
        return __awaiter(this, void 0, void 0, function* () {
            const outletSetting = yield this._outletSettingRepo.getDefaultOutletSetting();
            const defaultSalesType = yield this._salestype.find({
                where: { isMaster: true },
                raw: true
            });
            const newOrder = new order_entry_vm_1.OrderEntryVM();
            newOrder.id = v4_1.default();
            newOrder.salesTypeId = defaultSalesType.id;
            newOrder.salesType = defaultSalesType;
            newOrder.serviceCharged = outletSetting.serviceCharged;
            newOrder.serviceChargeRate = outletSetting.serviceChargeRate;
            newOrder.serviceChargeTaxId = outletSetting.serviceChargeTaxId;
            newOrder.taxed = outletSetting.taxed;
            newOrder.taxInclusive = outletSetting.taxInclusive;
            newOrder.isNew = true;
            newOrder.isChanged = true;
            return newOrder;
        });
    }
    calculateOrderTotals(order, persistTaxesToOrderTaxes = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderSalesTypeId = lodash_1.default.get(order, 'salesTypeId');
            const activeOrderLines = lodash_1.default.filter(order.lines, orderLine => orderLine.cancelled !== true);
            let allOrderLineTotalQty = new math_util_1.LDecimal(0);
            let totalServiceCharge = new math_util_1.LDecimal(0);
            let totalServiceChargeBaseAmount = new math_util_1.LDecimal(0);
            this.calculateEachOrderLineTotal(activeOrderLines, orderSalesTypeId);
            let subtotal = new math_util_1.LDecimal(lodash_1.default.sumBy(activeOrderLines, 'total'));
            activeOrderLines.forEach(orderLine => {
                allOrderLineTotalQty = allOrderLineTotalQty.plus(orderLine.qty);
                // add to service charge base amount
                if (order.serviceCharged && orderLine.serviceCharged) {
                    totalServiceChargeBaseAmount = totalServiceChargeBaseAmount.plus(orderLine.total);
                }
            });
            const serviceChargeRate = new math_util_1.LDecimal(order.serviceChargeRate || 0);
            if (order.serviceCharged && serviceChargeRate.greaterThan(0)) {
                totalServiceCharge = totalServiceChargeBaseAmount
                    .times(serviceChargeRate)
                    .dividedBy(100)
                    .toDP(2);
            }
            // normalize number
            allOrderLineTotalQty = allOrderLineTotalQty.toDP(2).toNumber();
            subtotal = subtotal.toDP(2).toNumber();
            totalServiceCharge = totalServiceCharge.toDP(2).toNumber();
            // mutates order object
            order.lineCount = activeOrderLines.length;
            order.lineTotalQty = allOrderLineTotalQty;
            order.subTotal = subtotal;
            order.serviceChargeAmount = totalServiceCharge;
            yield this.calculateOrderTaxesTotal(order, persistTaxesToOrderTaxes);
            let totalAfterTax = new math_util_1.LDecimal(order.subTotal)
                .plus(order.serviceChargeAmount)
                .toDP(2);
            if (!order.taxInclusive) {
                totalAfterTax = totalAfterTax.plus(order.taxAmount).toDP(2);
            }
            // round to nearest 100
            // eg: 1555 -> 1600
            const total = new math_util_1.LDecimal(math_util_1.MathUtils.roundToNearestHundred(totalAfterTax.toNumber())).toDP(0);
            order.total = total.toNumber();
            const adjustmentAmount = total.minus(totalAfterTax).toNumber();
            order.adjustmentAmount = adjustmentAmount;
        });
    }
    //#endregion
    // Get All Order
    getAllOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .findAll({
                    order: [['createdAt', 'DESC']],
                    include: [
                        {
                            model: this._orderLineRepo.dbTable(),
                            as: 'lines',
                            include: {
                                model: this._productVariantRepo.dbTable()
                            }
                        },
                        { model: this._customerRepo.dbTable(), required: false },
                        { model: this._tableRepo.dbTable(), required: false },
                        {
                            model: this._salestype.dbTable(),
                            required: false
                        }
                    ]
                })
                    .then(resolve)
                    .catch(reject);
            });
        });
    }
    searchActiveOrder(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .findAll({
                    order: [['createdAt', 'DESC']],
                    where: {
                        [sequelize_1.default.Op.or]: {
                            orderNumber: { [sequelize_1.default.Op.like]: `%${query}%` },
                            customerName: { [sequelize_1.default.Op.like]: `%${query}%` }
                        },
                        status: 'open'
                    },
                    include: [
                        {
                            model: this._orderLineRepo.dbTable(),
                            as: 'lines',
                            include: {
                                model: this._productVariantRepo.dbTable()
                            }
                        },
                        {
                            model: this._customerRepo.dbTable(),
                            required: false
                        },
                        { model: this._tableRepo.dbTable(), required: false },
                        { model: this._salestype.dbTable(), required: false }
                    ]
                })
                    .then(orders => {
                    resolve(orders);
                })
                    .catch(reject);
            });
        });
    }
    searchHistoryOrder(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .findAll({
                    order: [['createdAt', 'DESC']],
                    where: {
                        [sequelize_1.default.Op.or]: {
                            orderNumber: { [sequelize_1.default.Op.like]: `%${query}%` },
                            customerName: { [sequelize_1.default.Op.like]: `%${query}%` }
                        },
                        status: { [sequelize_1.default.Op.or]: ['settled', 'cancelled'] }
                    },
                    include: [
                        {
                            model: this._orderLineRepo.dbTable(),
                            as: 'lines',
                            include: {
                                model: this._productVariantRepo.dbTable()
                            }
                        },
                        {
                            model: this._customerRepo.dbTable(),
                            required: false
                        },
                        { model: this._tableRepo.dbTable(), required: false },
                        { model: this._salestype.dbTable(), required: false }
                    ]
                })
                    .then(orders => {
                    resolve(orders);
                })
                    .catch(reject);
            });
        });
    }
    // Get Order History
    getOrderHistories() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .findAll({
                    order: [['createdAt', 'DESC']],
                    where: { status: { [sequelize_1.default.Op.or]: ['settled', 'cancelled'] } },
                    include: [
                        {
                            model: this._orderLineRepo.dbTable(),
                            as: 'lines',
                            include: [
                                {
                                    model: this._orderLineModifierRepo.dbTable(),
                                    as: 'modifiers'
                                },
                                {
                                    model: this._productVariantRepo.dbTable(),
                                    order: [['sortOrder', 'ASC']],
                                    include: {
                                        model: this._pricelist.dbTable(),
                                        as: 'prices',
                                        required: false
                                    }
                                }
                            ]
                        },
                        { model: this._customerRepo.dbTable(), required: false },
                        {
                            model: this._tableRepo.dbTable(),
                            required: false,
                            include: [{ model: this._areaRepo.dbTable(), required: false }]
                        },
                        {
                            model: this._orderPaymentRepo.dbTable(),
                            as: 'payments',
                            include: [{ model: this._paymentMethodRepo.dbTable() }]
                        },
                        { model: this._salestype.dbTable(), required: false }
                    ]
                })
                    .then(resolve)
                    .catch(reject);
            });
        });
    }
    // Get Active Order
    getActiveOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .findAll({
                    order: [['createdAt', 'DESC']],
                    where: { status: 'open' },
                    include: [
                        {
                            model: this._orderLineRepo.dbTable(),
                            as: 'lines',
                            include: [
                                {
                                    model: this._orderLineModifierRepo.dbTable(),
                                    as: 'modifiers',
                                    required: false
                                },
                                {
                                    model: this._productRepo.dbTable(),
                                    include: [
                                        {
                                            model: this._modifierRepo.dbTable(),
                                            through: { attributes: [] },
                                            required: false,
                                            as: 'modifiers',
                                            include: {
                                                model: this._modifierItemRepo.dbTable(),
                                                required: false,
                                                as: 'items'
                                            }
                                        },
                                        {
                                            model: this._categoryRepo.dbTable(),
                                            as: 'categories',
                                            required: false
                                        },
                                        {
                                            model: this._taxRepo.dbTable(),
                                            required: false
                                        }
                                    ]
                                },
                                {
                                    model: this._productVariantRepo.dbTable(),
                                    include: {
                                        model: this._pricelist.dbTable(),
                                        as: 'prices',
                                        required: false
                                    }
                                }
                            ]
                        },
                        { model: this._customerRepo.dbTable(), required: false },
                        {
                            model: this._tableRepo.dbTable(),
                            required: false,
                            include: [{ model: this._areaRepo.dbTable(), required: false }]
                        },
                        { model: this._salestype.dbTable(), required: false }
                    ]
                })
                    .then(resolve)
                    .catch(reject);
            });
        });
    }
    // Get Order By Id
    getOrderById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .findById(id, {
                    include: [
                        {
                            model: this._orderLineRepo.dbTable(),
                            as: 'lines',
                            include: [
                                {
                                    model: this._productVariantRepo.dbTable(),
                                    as: 'productVariants'
                                },
                                {
                                    model: this._orderLineModifierRepo.dbTable(),
                                    as: 'modifiers',
                                    required: false
                                }
                            ]
                        },
                        { model: this._customerRepo.dbTable(), required: false },
                        { model: this._tableRepo.dbTable(), required: false },
                        { model: this._salestype.dbTable(), required: false }
                    ]
                })
                    .then(resolve)
                    .catch(reject);
            });
        });
    }
    // Order Related Data
    getOrderRelatedData() {
        return __awaiter(this, void 0, void 0, function* () {
            const outletSetting = yield this._outletSettingRepo.getDefaultOutletSetting();
            return { outletSetting: outletSetting.dataValues };
        });
    }
    // Calculate Totals
    calculate(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderData = order;
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield this.calculateOrderTotals(orderData);
                resolve(orderData);
            }));
        });
    }
    // Add New Order
    addOrder(val, isSplit = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = moment_1.default().format('YYYY-MM-DD');
            const orderData = val;
            const createDate = new Date();
            if (!isSplit) {
                orderData.orderNumber = yield this.generateOrderNumber();
            }
            orderData.status = 'open';
            orderData.orderDateTime = createDate;
            orderData.orderDate = date_util_1.DateUtils.removeTime(createDate);
            orderData.createdDate = createDate;
            orderData.isSync = false;
            yield this.calculateOrderTotals(orderData);
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .add(orderData)
                    .then((order) => __awaiter(this, void 0, void 0, function* () {
                    yield this.calculateOrderTaxesTotal(orderData, true);
                    const promises = [];
                    orderData.lines.map(line => {
                        line.orderId = order.id;
                        line.createdDate = date;
                        line.createdByUserId = order.createdByUserId;
                        promises.push(this._orderLineRepo
                            .add(line)
                            .then(orderLine => {
                            if (line.modifiers) {
                                // assign orderId and orderLineId
                                const modifiers = line.modifiers.map(orderLineModifier => {
                                    Object.assign(orderLineModifier, {
                                        orderId: order.id,
                                        orderLineId: orderLine.id
                                    });
                                    return orderLineModifier;
                                });
                                this._orderLineModifierRepo.bulkUpsert(modifiers);
                            }
                        })
                            .catch(reject));
                    });
                    Promise.all(promises)
                        .then(() => {
                        this.setTableInUsed(orderData, true);
                        this.getOrderById(order.id)
                            .then(resolve)
                            .catch(reject);
                    })
                        .catch(reject);
                }))
                    .catch(reject);
            });
        });
    }
    // Update Order
    updateOrder(orderObj, orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateDate = new Date();
            const orderData = orderObj;
            const updatedByUserId = lodash_1.default.get(orderData, 'updatedByUser.id');
            const orderLines = orderObj.lines;
            yield this.calculateOrderTotals(orderData, true);
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .findById(orderId)
                    .then(order => {
                    if (order.tableId !== orderData.tableId) {
                        this.setTableInUsed(order, false);
                        this.setTableInUsed(orderData, true);
                        this.addLog(updatedByUserId, orderId, `Mengubah meja dari ${order.tableId} ke ${orderData.tableId}`, updateDate);
                    }
                    order.updateAttributes(orderData);
                    this.updateOrderLines(updatedByUserId, orderLines, orderId, orderData)
                        .then(() => this.getOrderById(orderId)
                        .then(resolve)
                        .catch(reject))
                        .catch(reject);
                })
                    .catch(reject);
            });
        });
    }
    //#region PAYMENTS
    validatePayOrder(order, _payments, tenderAmount, defaultCashAmount, errorDictionary) {
        return __awaiter(this, void 0, void 0, function* () {
            if (order.status === 'settled') {
                errorDictionary.addError('Order sudah dibayar');
                return false;
            }
            else if (order.status === 'cancelled') {
                errorDictionary.addError('Order sudah dibatalkan');
                return false;
            }
            else if (order.status !== 'open') {
                errorDictionary.addError('Order sudah tidak aktif');
                return false;
            }
            if (tenderAmount < order.total) {
                errorDictionary.addError('Jumlah yang dibayar kurang dari total order');
                return false;
            }
            const changeAmount = tenderAmount - order.total;
            if (!defaultCashAmount || changeAmount > defaultCashAmount) {
                errorDictionary.addError('Jumlah kembalian tidak boleh lebih besar dari jumlah pembayaran cash');
                return false;
            }
            return true;
        });
    }
    payOrder(orderId, payments, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDictionary = new error_dictionary_vm_1.ErrorDictionaryVM();
            const order = yield this.getOrderById(orderId);
            if (!order) {
                errorDictionary.addError('Order tidak ditemukan');
                throw new validation_error_1.ValidationError(errorDictionary);
            }
            const paymentDate = new Date();
            const defaultCashPayment = lodash_1.default.find(payments, { isDefaultCash: true });
            const defaultCashPaymentAccountId = lodash_1.default.get(defaultCashPayment, 'paymentAccountId') || null;
            const defaultCashPaymentMethodId = lodash_1.default.get(defaultCashPayment, 'paymentMethodId') || null;
            const defaultCashPaymentAmount = lodash_1.default.get(defaultCashPayment, 'paymentAmount') || null;
            let tenderAmount = 0;
            payments.map(p => (tenderAmount += p.paymentAmount));
            const changeAmount = tenderAmount - order.total;
            if (!(yield this.validatePayOrder(order, payments, tenderAmount, defaultCashPaymentAmount, errorDictionary))) {
                throw new validation_error_1.ValidationError(errorDictionary);
            }
            yield database_util_1.wrapAsyncFunctionWithTransactionDBMain(() => __awaiter(this, void 0, void 0, function* () {
                const promises = [
                    this._orderRepo.update({
                        status: 'settled',
                        cashPaymentAccountId: defaultCashPaymentAccountId,
                        cashPaymentMethodId: defaultCashPaymentMethodId,
                        cashPaymentAmount: defaultCashPaymentAmount,
                        tenderAmount,
                        changeAmount,
                        paymentDate,
                        paidByUserId: userId
                    }, { where: { id: orderId } })
                ];
                const paymentLines = payments.map(payment => {
                    return lodash_1.default.pickBy(payment, lodash_1.default.identity);
                });
                paymentLines.map(pl => promises.push(this._orderPaymentRepo.add(Object.assign(pl, { orderId }), {})));
                yield Promise.all(promises);
            }));
            const updatedOrder = this.getOrderById(orderId);
            return updatedOrder;
        });
    }
    //#endregion
    //#region CANCEL ORDER
    validateCancelOrder(order, errorDictionary) {
        return __awaiter(this, void 0, void 0, function* () {
            if (order.status === 'settled') {
                errorDictionary.addError('Order yang sudah dibayar tidak dapat dibatalkan');
                return false;
            }
            else if (order.status === 'cancelled') {
                errorDictionary.addError('Order sudah dibatalkan');
                return false;
            }
            else if (order.status !== 'open') {
                errorDictionary.addError('Order yang sudah tidak aktif tidak dapat dibatalkan');
                return false;
            }
            return true;
        });
    }
    cancelOrder(orderId, userId, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDictionary = new error_dictionary_vm_1.ErrorDictionaryVM();
            const order = yield this.getOrderById(orderId);
            if (!order) {
                errorDictionary.addError('Order tidak ditemukan');
                throw new validation_error_1.ValidationError(errorDictionary);
            }
            const cancellationDate = new Date();
            const cancelledByUserId = userId;
            const cancellationReason = reason;
            if (!(yield this.validateCancelOrder(order, errorDictionary))) {
                throw new validation_error_1.ValidationError(errorDictionary);
            }
            yield database_util_1.wrapAsyncFunctionWithTransactionDBMain(() => __awaiter(this, void 0, void 0, function* () {
                yield this._orderRepo.update({
                    cancellationDate,
                    cancelledByUserId,
                    cancellationReason,
                    status: 'cancelled'
                }, { where: { id: order.id } });
            }));
            const updatedOrder = this.getOrderById(orderId);
            return updatedOrder;
        });
    }
    //#endregion
    // merge orders
    mergeOrder(orderIdArray) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._orderLineRepo
                    .update({ orderId: orderIdArray[0] }, { where: { orderId: orderIdArray } })
                    .then(() => {
                    this._orderRepo
                        .findById(orderIdArray[0], {
                        include: [
                            {
                                model: this._orderLineRepo.dbTable(),
                                as: 'lines',
                                include: [
                                    {
                                        model: this._productVariantRepo.dbTable(),
                                        as: 'productVariants'
                                    },
                                    {
                                        model: this._orderLineModifierRepo.dbTable(),
                                        as: 'modifiers',
                                        required: false
                                    }
                                ]
                            },
                            { model: this._customerRepo.dbTable(), required: false },
                            { model: this._tableRepo.dbTable(), required: false },
                            { model: this._salestype.dbTable(), required: false }
                        ]
                    })
                        .then((order) => __awaiter(this, void 0, void 0, function* () {
                        this._orderRepo.delete({ where: { id: orderIdArray.splice(1) } });
                        const newOrderObj = lodash_1.default.cloneDeep(order);
                        yield this.calculateOrderTotals(newOrderObj, true);
                        order
                            .updateAttributes(lodash_1.default.pick(newOrderObj, [
                            'lineCount',
                            'lineTotalQty',
                            'subTotal',
                            'serviceChargeAmount',
                            'taxAmount',
                            'adjustmentAmount',
                            'total'
                        ]))
                            .then(resolve)
                            .catch(reject);
                    }))
                        .catch(reject);
                })
                    .catch(reject);
            });
        });
    }
    //#endregion ORDER
    //#region HELPERS
    updateOrderLines(updatedByUserId, orderLines, orderId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const date = new Date();
                const oldOrderLines = yield this._orderLineRepo.findAll({
                    where: { orderId },
                    include: [
                        {
                            model: this._orderLineModifierRepo.dbTable(),
                            as: 'modifiers',
                            required: false
                        }
                    ]
                });
                const oldOrderLineIds = oldOrderLines.map(oldOrderLine => oldOrderLine.id);
                // New Lines
                const newOrderLines = lodash_1.default.filter(orderLines, orderLine => {
                    return (!oldOrderLineIds.includes(orderLine.id) &&
                        orderLine.lineType !== 'cancellation');
                });
                newOrderLines.map(newOrderLine => this.addLog(updatedByUserId, orderId, `Menambah item ${lodash_1.default.get(newOrderLine, 'description')}`, date));
                newOrderLines.map(newOrderLine => {
                    newOrderLine.orderId = orderId;
                    newOrderLine.createdDate = date;
                    newOrderLine.createdByUserId = order.createdByUserId;
                });
                const promises = [
                    this._orderLineRepo
                        .bulkUpsert(newOrderLines)
                        .then((resultOrderLines) => __awaiter(this, void 0, void 0, function* () {
                        if (newOrderLines.modifiers && newOrderLines.length > 0) {
                            const modifiers = newOrderLines.modifiers.map(a => {
                                return Object.assign(a, {
                                    orderId,
                                    orderLineId: resultOrderLines.id
                                });
                            });
                            yield this._orderLineModifierRepo.bulkUpsert(Object.assign(modifiers));
                        }
                    }))
                ];
                // Updated Lines
                const updatedOrderLines = lodash_1.default.filter(orderLines, orderLine => orderLine.id &&
                    oldOrderLineIds.includes(orderLine.id) &&
                    orderLine.lineType !== 'cancellation');
                updatedOrderLines.map(updatedOrderLine => {
                    const oldOrderLine = lodash_1.default.find(oldOrderLines, {
                        id: updatedOrderLine.id
                    });
                    if (oldOrderLine.qty !== updatedOrderLine.qty) {
                        this.addLog(updatedByUserId, orderId, `Mengubah qty item ${lodash_1.default.get(oldOrderLine, 'description')} dari ${oldOrderLine.qty} menjadi ${updatedOrderLine.qty}`, date);
                    }
                    if (lodash_1.default.map(oldOrderLine.modifiers, 'modifierItemName').join(', ') !==
                        lodash_1.default.map(updatedOrderLine.modifiers, 'modifierItemName').join(', ')) {
                        this.addLog(updatedByUserId, orderId, `Mengubah modifiers item ${lodash_1.default.get(oldOrderLine, 'description')} dari (${lodash_1.default.map(oldOrderLine.modifiers, 'modifierItemName').join(', ')}) ke (${lodash_1.default.map(updatedOrderLine.modifiers, 'modifierItemName').join(', ')})`, date);
                    }
                });
                updatedOrderLines.map(updatedOrderLine => promises.push(this._orderLineRepo
                    .findById(updatedOrderLine.id)
                    .then((orderLineFromDB) => __awaiter(this, void 0, void 0, function* () {
                    orderLineFromDB.updateAttributes(updatedOrderLine);
                    this._orderLineModifierRepo.delete({
                        where: { orderLineId: updatedOrderLine.id }
                    });
                    const modifiers = updatedOrderLine.modifiers.map(updatedOrderLineModifier => {
                        Object.assign(updatedOrderLineModifier, {
                            orderId,
                            orderLineId: updatedOrderLine.id
                        });
                        return updatedOrderLineModifier;
                    });
                    yield this._orderLineModifierRepo.bulkUpsert(Object.assign(modifiers));
                }))));
                return yield Promise.all(promises);
            }
            catch (error) {
                throw error;
            }
        });
    }
    changeOrderStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getOrderById(id)
                    .then(order => {
                    order
                        .updateAttributes({ status })
                        .then(newOrder => resolve(newOrder))
                        .catch(reject);
                })
                    .catch(() => reject('Order not found'));
            });
        });
    }
    generateOrderNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            const outletSetting = yield this._outletSettingRepo.getDefaultOutletSetting();
            const curOrderDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
            if (moment_1.default(curOrderDate).format('DDMMYY') !==
                moment_1.default(outletSetting.lastOrderNumberDate).format('DDMMYY')) {
                outletSetting.updateAttributes({
                    lastOrderNumberCount: 1,
                    lastOrderNumberDate: curOrderDate
                });
            }
            else {
                outletSetting.updateAttributes({
                    lastOrderNumberCount: outletSetting.lastOrderNumberCount + 1
                });
            }
            const orderNumbers = `${moment_1.default(outletSetting.lastOrderNumberDate).format('DDMMYY')}-${outletSetting.lastOrderNumberCount}`;
            return orderNumbers;
        });
    }
    getOrderLineUnitPrice(orderLine, salesTypeId) {
        const normalPrice = lodash_1.default.get(orderLine.productVariant, 'unitPrice');
        if (!salesTypeId) {
            return normalPrice;
        }
        else {
            const salesType = lodash_1.default.find(orderLine.productVariant.prices, {
                salesTypeId
            });
            if (salesType) {
                return lodash_1.default.get(salesType, 'price');
            }
            else {
                return normalPrice;
            }
        }
    }
    // public async calculateOrderTotals(
    //   order: OrderDBModel,
    //   persistTaxesToOrderTaxes: boolean = false
    // ) {
    //   const orderSalesTypeId = _.get(order, 'salesTypeId');
    //   const activeOrderLines = _.filter(
    //     order.lines,
    //     orderLine => orderLine.cancelled !== true
    //   );
    //   let allOrderLineTotalQty = new LDecimal(0);
    //   let totalServiceCharge = new LDecimal(0);
    //   let totalServiceChargeBaseAmount = new LDecimal(0);
    //   this.calculateEachOrderLineTotal(activeOrderLines, orderSalesTypeId);
    //   let subtotal = new LDecimal(_.sumBy(activeOrderLines, 'total'));
    //   activeOrderLines.forEach(orderLine => {
    //     allOrderLineTotalQty = allOrderLineTotalQty.plus(orderLine.qty);
    //     // add to service charge base amount
    //     if (order.serviceCharged && orderLine.serviceCharged) {
    //       totalServiceChargeBaseAmount = totalServiceChargeBaseAmount.plus(
    //         orderLine.total
    //       );
    //     }
    //   });
    //   const serviceChargeRate = new LDecimal(order.serviceChargeRate || 0);
    //   if (order.serviceCharged && serviceChargeRate.greaterThan(0)) {
    //     totalServiceCharge = totalServiceChargeBaseAmount
    //       .times(serviceChargeRate)
    //       .dividedBy(100)
    //       .toDP(2);
    //   }
    //   // normalize number
    //   allOrderLineTotalQty = allOrderLineTotalQty.toDP(2).toNumber();
    //   subtotal = subtotal.toDP(2).toNumber();
    //   totalServiceCharge = totalServiceCharge.toDP(2).toNumber();
    //   // mutates order object
    //   order.lineCount = activeOrderLines.length;
    //   order.lineTotalQty = allOrderLineTotalQty;
    //   order.subTotal = subtotal;
    //   order.serviceChargeAmount = totalServiceCharge;
    //   await this.calculateOrderTaxesTotal(order, persistTaxesToOrderTaxes);
    //   let totalAfterTax = new LDecimal(order.subTotal)
    //     .plus(order.serviceChargeAmount)
    //     .toDP(2);
    //   if (!order.taxInclusive) {
    //     totalAfterTax = totalAfterTax.plus(order.taxAmount).toDP(2);
    //   }
    //   // round to nearest 100
    //   // eg: 1555 -> 1600
    //   const total = new LDecimal(
    //     MathUtils.roundToNearestHundred(totalAfterTax.toNumber())
    //   ).toDP(0);
    //   order.total = total.toNumber();
    //   const adjustmentAmount = total.minus(totalAfterTax).toNumber();
    //   order.adjustmentAmount = adjustmentAmount;
    // }
    calculateEachOrderLineTotal(orderLines, orderSalesTypeId) {
        orderLines.forEach(orderLine => {
            // calculate order line modifiers
            let orderLineModifierPrice = new math_util_1.LDecimal(0);
            if (orderLine.modifiers && orderLine.modifiers.length > 0) {
                orderLine.modifiers.forEach(orderLineModifier => {
                    orderLineModifierPrice = orderLineModifierPrice.plus(new math_util_1.LDecimal(orderLineModifier.price || 0));
                });
            }
            orderLine.modifierPrice = orderLineModifierPrice.toNumber(); // mutate the orderLine object
            // calculate order line unit price
            const orderLineUnitPrice = this.getOrderLineUnitPrice(orderLine, orderSalesTypeId);
            orderLine.unitPrice = orderLineUnitPrice; // mutate the orderLine object
            // calculate order line total
            const orderLineTotal = new math_util_1.LDecimal(orderLineUnitPrice || 0)
                .plus(orderLineModifierPrice)
                .times(orderLine.qty)
                .toDP(2);
            orderLine.total = orderLineTotal.toNumber(); // mutate the orderLine object
        });
    }
    calculateOrderTaxesTotal(order, persistTaxesToOrderTaxes = false) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Not implemented');
            // let totalTax = new LDecimal(0);
            // if (order.taxed) {
            //   const taxes = await this._taxRepo.findAll();
            //   const taxBaseAmounts = new TaxBaseAmounts();
            //   taxBaseAmounts.taxes = taxes;
            //   taxBaseAmounts.orderTaxRepo = this._orderTaxRepo;
            //   const activeOrderLines = _.filter(
            //     order.lines,
            //     orderLine => orderLine.cancelled !== true
            //   );
            //   const orderLinesTaxed = activeOrderLines.filter(
            //     orderLine => orderLine.taxed && orderLine.taxId
            //   );
            //   _.forEach(orderLinesTaxed, orderLine => {
            //     taxBaseAmounts.addTaxBaseAmount({
            //       taxId: orderLine.taxId,
            //       taxBaseAmount: +orderLine.total
            //     });
            //   });
            //   if (order.serviceChargeTaxId) {
            //     {
            //       taxBaseAmounts.addTaxBaseAmount({
            //         taxId: order.serviceChargeTaxId,
            //         taxBaseAmount: +order.serviceChargeAmount
            //       });
            //     }
            //     taxBaseAmounts.calculateAllTaxBaseAmounts();
            //     const allTaxBaseAmounts = taxBaseAmounts.getAllTaxBaseAmounts();
            //     allTaxBaseAmounts.forEach(taxBaseAmount => {
            //       totalTax = totalTax.plus(taxBaseAmount.taxAmount);
            //     });
            //     if (persistTaxesToOrderTaxes && order.id && allTaxBaseAmounts.length) {
            //       await taxBaseAmounts.persistToOrderTax(order.id);
            //     }
            //   }
            //   order.taxAmount = totalTax.toDP(2).toNumber();
            // }
        });
    }
    // public calculateOrderTotals(order) {
    //   const salesTypeId = _.get(order, 'salesTypeId');
    //   const getPrice = line => {
    //     const normalPrice = _.get(line.productVariant, 'unitPrice');
    //     if (!salesTypeId) {
    //       return normalPrice;
    //     } else {
    //       const salesType = _.find(line.productVariant.prices, {
    //         salesTypeId
    //       });
    //       if (salesType) {
    //         return _.get(salesType, 'price');
    //       } else {
    //         return normalPrice;
    //       }
    //     }
    //   };
    //   const addTaxBaseAmount = function(arr, taxId, taxRate, amount) {
    //     const found = _.filter(arr, { taxId });
    //     let taxObj;
    //     if (found.length > 0) {
    //       taxObj = found[0];
    //       taxObj.amount = taxObj.amount.plus(amount);
    //     } else if (taxRate.greaterThan(0)) {
    //       taxObj = { taxId, taxRate, amount };
    //       arr.push(taxObj);
    //     }
    //   };
    //   const activeOrderLines = _.filter(orderLines, o => {
    //     return o.cancelled !== true;
    //   });
    //   const totalLineCount = activeOrderLines.length;
    //   let totalLineQty = new LDecimal(0);
    //   let totalServiceChargeBaseAmount = new LDecimal(0);
    //   const totalTaxBaseAmountList = [];
    //   let subtotal = new LDecimal(0);
    //   let totalServiceCharge = new LDecimal(0);
    //   let totalTax = new LDecimal(0);
    //   activeOrderLines.forEach(orderLine => {
    //     // count modifiers
    //     let modifierPrice = new LDecimal(0);
    //     if (orderLine.modifiers && orderLine.modifiers.length > 0) {
    //       orderLine.modifiers.forEach(a => {
    //         modifierPrice = modifierPrice.plus(new LDecimal(a.price || 0));
    //       });
    //     }
    //     orderLine.modifierPrice = modifierPrice.toNumber();
    //     const currentPrice = getPrice(orderLine);
    //     orderLine.unitPrice = currentPrice;
    //     const lineTotal = new LDecimal(currentPrice || 0)
    //       .plus(modifierPrice)
    //       .times(orderLine.qty)
    //       .toDP(2);
    //     orderLine.total = lineTotal.toNumber();
    //     totalLineQty = totalLineQty.plus(orderLine.qty);
    //     subtotal = subtotal.plus(lineTotal);
    //     // add service charge base amount
    //     if (order.serviceCharged && orderLine.serviceCharged) {
    //       totalServiceChargeBaseAmount = totalServiceChargeBaseAmount.plus(
    //         lineTotal
    //       );
    //     }
    //     // add tax base amount. seperate by taxRate
    //     if (order.taxed && orderLine.taxed && orderLine.taxId) {
    //       const lineTaxRate = new LDecimal(orderLine.taxRate || 0);
    //       addTaxBaseAmount(
    //         totalTaxBaseAmountList,
    //         orderLine.taxId,
    //         lineTaxRate,
    //         lineTotal
    //       );
    //     }
    //   });
    //   // now calculate service charge
    //   const serviceChargeRate = new LDecimal(order.serviceChargeRate || 0);
    //   if (order.serviceCharged && serviceChargeRate.greaterThan(0)) {
    //     totalServiceCharge = totalServiceChargeBaseAmount
    //       .times(serviceChargeRate)
    //       .dividedBy(100)
    //       .toDP(2);
    //     if (order.taxed && order.serviceChargeTaxId) {
    //       const serviceChargeTaxRate = new LDecimal(
    //         order.serviceChargeTaxRate || 0
    //       );
    //       addTaxBaseAmount(
    //         totalTaxBaseAmountList,
    //         order.serviceChargeTaxId,
    //         serviceChargeTaxRate,
    //         totalServiceCharge
    //       );
    //     }
    //   }
    //   // now calculate tax amount
    //   if (order.taxed) {
    //     totalTaxBaseAmountList.forEach(taxBase => {
    //       let tx;
    //       if (order.taxInclusive) {
    //         // calculate tax amount if its already included in price
    //         // ref: https://www.accountingcoach.com/blog/calculate-sales-tax
    //         const divider = taxBase.taxRate.dividedBy(100).plus(1);
    //         tx = taxBase.amount.dividedBy(divider).toDP(2);
    //       } else {
    //         tx = taxBase.amount
    //           .times(taxBase.taxRate)
    //           .dividedBy(100)
    //           .toDP(2);
    //       }
    //       totalTax = totalTax.plus(tx);
    //     });
    //   }
    //   totalLineQty = totalLineQty.toDP(2);
    //   subtotal = subtotal.toDP(2);
    //   totalServiceCharge = totalServiceCharge.toDP(2);
    //   totalTax = totalTax.toDP(2);
    //   let totalAfterTax = subtotal.plus(totalServiceCharge).toDP(2);
    //   // only add tax if its not included already
    //   if (!order.taxInclusive) {
    //     totalAfterTax = totalAfterTax.plus(totalTax).toDP(2);
    //   }
    //   // round to nearest 100
    //   // eg: 1555 -> 1600
    //   const total = new LDecimal(
    //     MathUtils.roundToNearestHundred(totalAfterTax.toNumber())
    //   ).toDP(0);
    //   const adjustmentAmount = total.minus(totalAfterTax);
    //   order.lineCount = totalLineCount;
    //   order.lineTotalQty = totalLineQty.toNumber();
    //   order.subTotal = subtotal.toNumber();
    //   order.serviceChargeAmount = totalServiceCharge.toNumber();
    //   order.taxAmount = totalTax.toNumber();
    //   order.adjustmentAmount = adjustmentAmount.toNumber();
    //   order.total = total.toNumber();
    // }
    setTableInUsed(order, inUsed) {
        if (order.tableId) {
            return this._tableRepo
                .findById(order.tableId)
                .then(table => table.updateAttributes({ inUsed }));
        }
    }
    addLog(userId, orderId, description, date) {
        return this._logRepo.add({ userId, orderId, description, date });
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL29yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUF1QjtBQUN2QixvREFBNEI7QUFDNUIsMERBQWtDO0FBQ2xDLGlEQUEyQjtBQUczQiwyRUFBdUU7QUFDdkUsaUZBQTRFO0FBQzVFLG9FQUEwRjtBQUMxRiw0REFBeUQ7QUFDekQsNERBQW1FO0FBa0JuRSxxREFBZ0Q7QUFLaEQsTUFBYSxZQUFZO0lBeUJ2QixlQUFlO0lBRWYsWUFBWSxhQUE0QjtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUVwQyxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFB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