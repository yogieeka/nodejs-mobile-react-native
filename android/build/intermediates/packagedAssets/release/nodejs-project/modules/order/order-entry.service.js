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
const moment = require("moment");
const v4_1 = __importDefault(require("uuid/v4"));
const validation_error_1 = require("../../shared/errors/validation-error");
const error_dictionary_vm_1 = require("../../shared/models/error-dictionary.vm");
const database_util_1 = require("../../shared/utils/database.util");
const date_util_1 = require("../../shared/utils/date.util");
const math_util_1 = require("../../shared/utils/math.util");
const customer_vm_1 = require("../customer/customer.vm");
const product_query_helper_1 = require("../product/product-query.helper");
const table_vm_1 = require("../table/table.vm");
const order_entry_related_data_vm_1 = require("./order-entry-related-data.vm");
const order_entry_response_vm_1 = require("./order-entry-response.vm");
const order_entry_vm_1 = require("./order-entry.vm");
class OrderEntryService {
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
        this._productRepo = mainDbContext.productRepo();
        this._productVariantRepo = mainDbContext.productVariantRepo();
        this._pricelistRepo = mainDbContext.pricelistRepo();
        this._printerAreaRepo = mainDbContext.printerAreaRepo();
        this._salesTypeRepo = mainDbContext.salesTypeRepo();
        this._tableRepo = mainDbContext.tableRepo();
        this._taxRepo = mainDbContext.taxRepo();
        this._paymentMethodRepo = mainDbContext.paymentMethodRepo();
    }
    //#region HELPERS
    getOrderByIdFromDbAsync(orderId, isOpenOnly = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = {
                include: [
                    {
                        model: this._orderLineRepo.dbTable(),
                        as: 'lines',
                        required: false,
                        order: [['sortOrder', 'ASC']],
                        include: [
                            {
                                model: this._productRepo.dbTable(),
                                required: false,
                                include: [
                                    {
                                        model: this._printerAreaRepo.dbTable(),
                                        required: false
                                    }
                                ]
                            },
                            {
                                model: this._productVariantRepo.dbTable(),
                                required: false
                            },
                            {
                                model: this._orderLineModifierRepo.dbTable(),
                                as: 'modifiers',
                                required: false,
                                order: [['sortOrder', 'ASC']]
                            }
                        ]
                    },
                    {
                        model: this._orderTaxRepo.dbTable(),
                        as: 'taxes',
                        required: false
                    },
                    {
                        model: this._orderPaymentRepo.dbTable(),
                        as: 'payments',
                        required: false,
                        order: [['sortOrder', 'ASC']],
                        include: [
                            {
                                model: this._paymentMethodRepo.dbTable(),
                                required: false
                            }
                        ]
                    },
                    { model: this._customerRepo.dbTable(), required: false },
                    { model: this._salesTypeRepo.dbTable(), required: false },
                    { model: this._tableRepo.dbTable(), required: false }
                ]
            };
            if (isOpenOnly) {
                options = lodash_1.default.merge({ where: { status: 'open' } }, options);
            }
            const order = yield this._orderRepo.findById(orderId, options, true);
            return order;
        });
    }
    mapOrderDbModelToVM(orderDb) {
        const vm = lodash_1.default.merge(new order_entry_vm_1.OrderEntryVM(), orderDb);
        vm.isNew = false;
        vm.isChanged = false;
        lodash_1.default.forEach(vm.lines, orderLine => {
            orderLine.originalQty = orderLine.qty;
            orderLine.changedQty = 0;
            orderLine.isNew = false;
            orderLine.isChanged = false;
        });
        return vm;
    }
    getOrderLineRelatedDataAsync(productId, productVariantId, salesTypeId, errorDictionary) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this._productRepo.find({
                where: { id: productId },
                include: [
                    {
                        model: this._productVariantRepo.dbTable(),
                        where: productVariantId
                            ? {
                                $or: [{ id: productVariantId }, { deleted: false }]
                            }
                            : { deleted: false },
                        required: false,
                        as: 'productVariants',
                        order: [['sortOrder', 'ASC']],
                        include: [
                            {
                                model: this._pricelistRepo.dbTable(),
                                where: { salesTypeId },
                                required: false,
                                as: 'prices'
                            }
                        ]
                    },
                    {
                        model: this._modifierRepo.dbTable(),
                        where: { deleted: false },
                        required: false,
                        as: 'modifiers',
                        include: [
                            {
                                model: this._modifierItemRepo.dbTable(),
                                where: { deleted: false },
                                required: false,
                                as: 'items',
                                order: [['sortOrder', 'ASC']],
                                include: [
                                    {
                                        model: this._pricelistRepo.dbTable(),
                                        where: { salesTypeId },
                                        required: false,
                                        as: 'prices'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        model: this._printerAreaRepo.dbTable(),
                        required: false
                    }
                ]
            }, true);
            if (!product) {
                throw new validation_error_1.ValidationError(errorDictionary.addError('Produk tidak ditemukan'));
            }
            // get the correct price based on salesType
            const { productVariants, modifiers } = product;
            lodash_1.default.forEach(productVariants, variant => {
                if (variant.prices && variant.prices.length > 0) {
                    variant.unitPrice = variant.prices[0].price;
                }
            });
            // get the correct price based on salesType
            lodash_1.default.forEach(modifiers, modifier => {
                lodash_1.default.forEach(modifier.items, modifierItem => {
                    if (!modifierItem.useCustomPrice &&
                        modifierItem.productVariantId &&
                        modifierItem.prices &&
                        modifierItem.prices.length > 0) {
                        modifierItem.price = modifierItem.prices[0].price;
                    }
                    else {
                        modifierItem.price = modifierItem.price ? modifierItem.price : 0;
                    }
                });
            });
            const result = new order_entry_response_vm_1.OrderLineEntryRelatedDataResponseVM();
            result.product = lodash_1.default.merge(new order_entry_related_data_vm_1.ProductOrderEntryVM(), product);
            result.productVariants = product.productVariants;
            result.modifiers = [];
            lodash_1.default.forEach(product.modifiers, modifierDb => {
                const modifier = lodash_1.default.merge(new order_entry_related_data_vm_1.ModifierOrderEntryVM(), modifierDb);
                result.modifiers.push(modifier);
            });
            return result;
        });
    }
    isTableUsedAsync(orderId, tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!tableId)
                return false;
            const exists = yield this._orderRepo.findOne({
                attributes: ['id'],
                where: orderId
                    ? { id: { $ne: orderId }, tableId, status: 'open' }
                    : { tableId, status: 'open' }
            });
            if (exists) {
                return true;
            }
            return false;
        });
    }
    validateDiscount(unitPrice, discountPerc, discountAmount, errorDict) {
        let isValid = true;
        if (discountAmount && discountAmount < 0) {
            errorDict.addError('Nilai diskon salah');
            isValid = false;
        }
        if (discountPerc && (discountPerc > 100 || discountPerc < 0)) {
            errorDict.addError('Percent diskon salah');
            isValid = false;
        }
        if (discountAmount) {
            if (discountAmount < 0) {
                errorDict.addError('Nilai diskon salah');
                isValid = false;
            }
            if (discountAmount > unitPrice) {
                errorDict.addError('Nilai diskon tidak boleh melebihi ' + unitPrice);
                isValid = false;
            }
        }
        return isValid;
    }
    calculateOrderLineModifierPrice(orderLine) {
        if (orderLine.modifiers && orderLine.modifiers.length > 0) {
            orderLine.modifierPrice = lodash_1.default.sumBy(orderLine.modifiers, 'price');
        }
        else {
            orderLine.modifierPrice = 0;
        }
    }
    calculateOrderLineDiscount(orderLine) {
        if (orderLine.discountPercent) {
            if (orderLine.discountPercent > 0) {
                orderLine.discountAmount = new math_util_1.LDecimal(orderLine.unitPrice)
                    .plus(orderLine.modifierPrice)
                    .times(orderLine.discountPercent)
                    .dividedBy(100)
                    .toDP(2)
                    .toNumber();
            }
            else {
                orderLine.discountAmount = 0;
            }
        }
    }
    calculateOrderLineTotal(orderLine) {
        orderLine.changedQty = new math_util_1.LDecimal(orderLine.qty)
            .minus(orderLine.originalQty)
            .toDP(2)
            .toNumber();
        this.calculateOrderLineModifierPrice(orderLine);
        this.calculateOrderLineDiscount(orderLine);
        orderLine.total = new math_util_1.LDecimal(orderLine.unitPrice)
            .plus(orderLine.modifierPrice)
            .minus(orderLine.discountAmount)
            .times(orderLine.qty)
            .toDP(2)
            .toNumber();
    }
    clearOrderTax(order) {
        order.taxes = [];
        order.taxAmount = 0;
    }
    calculateOrderTaxTotalAsync(order, errorDictionary) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!order.taxed) {
                this.clearOrderTax(order);
                return;
            }
            // get list of order lines that is taxed
            const taxLineList = lodash_1.default.filter(order.lines, (orderLine) => orderLine.cancelled !== true &&
                orderLine.taxed &&
                orderLine.taxId !== undefined).map((ol) => ({
                taxId: ol.taxId,
                baseAmount: ol.total
            }));
            // add service charge tax
            if (order.serviceChargeTaxId) {
                taxLineList.push({
                    taxId: order.serviceChargeTaxId,
                    baseAmount: order.serviceChargeAmount
                });
            }
            // group and sum baseAmounts for tax calculation
            const taxLines = lodash_1.default.map(lodash_1.default.groupBy(taxLineList, g => g.taxId), (value, key) => {
                return {
                    taxId: key,
                    baseAmount: lodash_1.default.sumBy(value, 'baseAmount')
                };
            }).filter((tl) => !new math_util_1.LDecimal(tl.baseAmount).isZero());
            if (taxLines.length <= 0) {
                this.clearOrderTax(order);
                return 0;
            }
            const originalOrderTaxes = lodash_1.default.cloneDeep(order.taxes);
            order.taxes = [];
            let totalTax = new math_util_1.LDecimal(0);
            for (const tl of taxLines) {
                {
                    const { taxId, baseAmount } = tl;
                    const newOrderTax = new order_entry_vm_1.OrderTaxEntryVM();
                    newOrderTax.taxId = taxId;
                    // is already exists previously, use tax rate from the saved data. if not get rate from tax table
                    const originalOrderTax = lodash_1.default.find(originalOrderTaxes, ot => ot.taxId === taxId);
                    if (originalOrderTax) {
                        newOrderTax.taxRate = originalOrderTax.taxRate;
                    }
                    else {
                        const tax = yield this._taxRepo.findOne({ where: { id: taxId } }, true);
                        if (!tax) {
                            throw new validation_error_1.ValidationError(errorDictionary.addError('Pajak tidak ditemukan'));
                        }
                        else {
                            newOrderTax.taxRate = tax.rate;
                        }
                    }
                    if (order.taxInclusive) {
                        // calculate tax amount if its already included in price
                        // ref: https://www.accountingcoach.com/blog/calculate-sales-tax
                        const divider = new math_util_1.LDecimal(newOrderTax.taxRate)
                            .dividedBy(100)
                            .plus(1);
                        const originalBaseAmount = new math_util_1.LDecimal(baseAmount);
                        const newBaseAmount = originalBaseAmount.dividedBy(divider).toDP(2);
                        newOrderTax.baseAmount = newBaseAmount.toNumber();
                        newOrderTax.taxAmount = originalBaseAmount
                            .minus(newBaseAmount)
                            .toDP(2)
                            .toNumber();
                    }
                    else {
                        newOrderTax.baseAmount = baseAmount;
                        newOrderTax.taxAmount = new math_util_1.LDecimal(baseAmount)
                            .times(newOrderTax.taxRate)
                            .dividedBy(100)
                            .toDP(2)
                            .toNumber();
                    }
                    totalTax = totalTax.plus(newOrderTax.taxAmount);
                }
            }
            return totalTax.toNumber();
        });
    }
    calculateOrderTotalAsync(order, errorDictionary, calculateLines = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderLines = lodash_1.default.filter(order.lines, (orderLine) => orderLine.cancelled !== true);
            // calculate lines
            const totalLineCount = orderLines.length;
            let totalLineQty = new math_util_1.LDecimal(0);
            let subtotal = new math_util_1.LDecimal(0);
            let discountPerc = new math_util_1.LDecimal(0);
            let discountAmount = new math_util_1.LDecimal(0);
            let totalAfterDiscount = new math_util_1.LDecimal(0);
            let serviceChargeBaseAmount = new math_util_1.LDecimal(0);
            let serviceChargeAmount = new math_util_1.LDecimal(0);
            let totalAfterTax = new math_util_1.LDecimal(0);
            let taxAmount = new math_util_1.LDecimal(0);
            let adjustmentAmount = new math_util_1.LDecimal(0);
            let total = new math_util_1.LDecimal(0);
            lodash_1.default.forEach(orderLines, orderLine => {
                if (calculateLines) {
                    this.calculateOrderLineTotal(orderLine);
                }
                if (orderLine.itemType === 'item') {
                    totalLineQty = totalLineQty.plus(orderLine.qty);
                }
                subtotal = subtotal.plus(orderLine.total);
                if (order.serviceCharged && orderLine.serviceCharged) {
                    serviceChargeBaseAmount = serviceChargeBaseAmount.plus(orderLine.total);
                }
            });
            totalLineQty = totalLineQty.toDP(2);
            subtotal = subtotal.toDP(2);
            if (order.discountPercent) {
                discountPerc = new math_util_1.LDecimal(order.discountPercent);
                discountAmount = subtotal
                    .times(discountPerc)
                    .dividedBy(100)
                    .toDP(2);
            }
            else {
                discountAmount = new math_util_1.LDecimal(order.discountAmount);
                discountPerc = discountAmount
                    .times(100)
                    .dividedBy(subtotal)
                    .toDP(2);
            }
            totalAfterDiscount = subtotal.minus(discountAmount);
            if (!serviceChargeBaseAmount.isZero()) {
                if (!discountPerc.isZero()) {
                    const serviceChargeBaseAmountDiscount = serviceChargeBaseAmount
                        .times(discountPerc)
                        .dividedBy(100)
                        .toDP(2);
                    serviceChargeBaseAmount = serviceChargeBaseAmount.minus(serviceChargeBaseAmountDiscount);
                }
                serviceChargeAmount = serviceChargeBaseAmount
                    .times(order.serviceChargeRate)
                    .dividedBy(100)
                    .toDP(2);
            }
            // assign values to order first. because it is needed on calculateTax function
            order.lineCount = totalLineCount;
            order.lineTotalQty = totalLineQty.toNumber();
            order.subTotal = subtotal.toNumber();
            order.discountAmount = discountAmount.toNumber();
            order.serviceChargeAmount = serviceChargeAmount.toNumber();
            order.taxAmount = yield this.calculateOrderTaxTotalAsync(order, errorDictionary);
            taxAmount = new math_util_1.LDecimal(order.taxAmount);
            totalAfterTax = !order.taxInclusive
                ? totalAfterDiscount.plus(serviceChargeAmount).plus(taxAmount)
                : totalAfterDiscount.plus(serviceChargeAmount);
            // round to nearest 100
            // eg: 1555 -> 1600
            total = new math_util_1.LDecimal(math_util_1.MathUtils.roundToNearestHundred(totalAfterTax.toNumber())).toDP(0);
            // put the rounding difference to adjustment amount
            adjustmentAmount = total.minus(totalAfterTax);
            order.taxAmount = taxAmount.toNumber();
            order.adjustmentAmount = adjustmentAmount.toNumber();
            order.total = total.toNumber();
        });
    }
    //#endregion
    getNewOrderAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            const outletSetting = yield this._outletSettingRepo.getDefaultOutletSetting();
            const salesTypes = yield this._salesTypeRepo.findAll({
                where: { deleted: false }
            }, true);
            const defaultSalesType = lodash_1.default.find(salesTypes, salesType => salesType.isMaster);
            const paymentMethods = yield this._paymentMethodRepo.findAll({
                where: { deleted: false }
            }, true);
            const currentDateTime = new Date();
            const currentDate = date_util_1.DateUtils.removeTime(currentDateTime);
            const newOrder = new order_entry_vm_1.OrderEntryVM();
            newOrder.id = v4_1.default();
            newOrder.orderDate = currentDate;
            newOrder.orderDateTime = currentDateTime;
            newOrder.salesTypeId = defaultSalesType.id;
            newOrder.salesType = defaultSalesType;
            newOrder.serviceCharged = outletSetting.serviceCharged;
            newOrder.serviceChargeRate = outletSetting.serviceChargeRate;
            newOrder.serviceChargeTaxId = outletSetting.serviceChargeTaxId;
            newOrder.taxed = outletSetting.taxed;
            newOrder.taxInclusive = outletSetting.taxInclusive;
            newOrder.isNew = true;
            newOrder.isChanged = true;
            const result = new order_entry_response_vm_1.OrderEntryWithRelatedDataResponseVM();
            result.order = newOrder;
            result.salesTypes = salesTypes;
            result.paymentMethods = paymentMethods;
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return result;
        });
    }
    getOrderByIdAsync(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            const salesTypes = yield this._salesTypeRepo.findAll({
                where: { deleted: false }
            }, true);
            const paymentMethods = yield this._paymentMethodRepo.findAll({
                where: { deleted: false }
            }, true);
            const orderDb = yield this.getOrderByIdFromDbAsync(orderId);
            if (!orderDb) {
                throw new validation_error_1.ValidationError(errorDict.addError('Order tidak ditemukan. Hanya order aktif yang dapat diubah'));
            }
            const order = this.mapOrderDbModelToVM(orderDb);
            const result = new order_entry_response_vm_1.OrderEntryWithRelatedDataResponseVM();
            result.order = order;
            result.salesTypes = salesTypes;
            result.paymentMethods = paymentMethods;
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return result;
        });
    }
    getNewOrderLineAsync(order, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            const { salesTypeId } = order;
            const lastOrderLine = lodash_1.default.maxBy(order.lines, 'sortOrder');
            const sortOrder = lastOrderLine ? lastOrderLine.sortOrder + 1 : 1;
            const newOrderLine = new order_entry_vm_1.OrderLineEntryVM();
            newOrderLine.id = v4_1.default();
            newOrderLine.lineType = 'item';
            newOrderLine.itemType = 'item';
            newOrderLine.qty = 1;
            newOrderLine.sortOrder = sortOrder;
            newOrderLine.isNew = true;
            newOrderLine.isChanged = true;
            const result = new order_entry_response_vm_1.OrderLineEntryWithRelatedDataResponseVM();
            result.orderLine = newOrderLine;
            if (productId) {
                const relatedData = yield this.getOrderLineRelatedDataAsync(productId, null, salesTypeId, errorDict);
                const { product, productVariants, modifiers } = relatedData;
                const masterVariant = lodash_1.default.find(productVariants, productVariant => productVariant.isMaster);
                newOrderLine.productId = productId;
                newOrderLine.product = product;
                newOrderLine.productVariantId = masterVariant.id;
                newOrderLine.productVariant = masterVariant;
                newOrderLine.description = masterVariant.name;
                newOrderLine.unitPrice = masterVariant.unitPrice;
                newOrderLine.serviceCharged = product.serviceCharged;
                newOrderLine.taxed = product.salesTaxId ? true : false;
                newOrderLine.taxId = product.salesTaxId;
                result.product = product;
                result.productVariants = productVariants;
                result.modifiers = modifiers;
            }
            this.calculateOrderLineTotal(newOrderLine);
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return result;
        });
    }
    getOrderLineByIdAsync(order, orderLineId) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            const { salesTypeId } = order;
            const orderLine = lodash_1.default.find(order.lines, ol => ol.id === orderLineId);
            const { productId: orderLineProductId, productVariantId: orderLineProductVariantId } = orderLine;
            const result = new order_entry_response_vm_1.OrderLineEntryWithRelatedDataResponseVM();
            result.orderLine = orderLine;
            if (orderLineProductVariantId) {
                const relatedData = yield this.getOrderLineRelatedDataAsync(orderLineProductId, orderLineProductVariantId, salesTypeId, errorDict);
                const { product, productVariants, modifiers } = relatedData;
                if (orderLineProductVariantId) {
                    // sync variant price with the saved ones. because price might change when sync to server
                    const selectedVariant = lodash_1.default.find(productVariants, pv => pv.id === orderLineProductVariantId);
                    if (!selectedVariant) {
                        errorDict.addError('Varian tidak ditemukan. Varian sudah dihapus atau dinonaktifkan');
                        throw new validation_error_1.ValidationError(errorDict);
                    }
                    selectedVariant.unitPrice = orderLine.unitPrice;
                    // sync modifiers and price with existing. because price might change when sync to server
                    lodash_1.default.forEach(orderLine.modifiers, orderLineModifier => {
                        let modifierFound = false;
                        const modifier = lodash_1.default.find(modifiers, {
                            id: orderLineModifier.modifierId
                        });
                        if (modifier) {
                            const modifierItem = lodash_1.default.find(modifier.items, {
                                id: orderLineModifier.modifierItemId
                            });
                            if (modifierItem) {
                                modifierItem.price = orderLineModifier.price;
                                modifierItem.selected = true;
                                modifierFound = true;
                            }
                        }
                        if (!modifierFound) {
                            errorDict.addError('Modifier tidak ditemukan. Modifier sudah dihapus atau dinonaktifkan');
                            throw new validation_error_1.ValidationError(errorDict);
                        }
                    });
                }
                result.product = product;
                result.productVariants = productVariants;
                result.modifiers = modifiers;
            }
            this.calculateOrderLineTotal(orderLine);
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return result;
        });
    }
    validateOrderLine(order, orderLine, orderLineModifiers, relatedData, errorDict) {
        let isValid = true;
        if (orderLine.qty < 0) {
            errorDict.addError('Qty harus sama atau lebih besar dari 0');
            isValid = false;
        }
        if (orderLine.unitPrice < 0) {
            errorDict.addError('Harga harus sama atau lebih besar dari 0');
            isValid = false;
        }
        if (!this.validateDiscount(orderLine.unitPrice, orderLine.discountPercent, orderLine.discountAmount, errorDict)) {
            isValid = false;
        }
        if (orderLine.productVariantId) {
            const { product, productVariants, modifiers: productModifiers } = relatedData;
            // validate modifiers
            lodash_1.default.forEach(productModifiers, modifier => {
                const selectedOrderLineModifiers = lodash_1.default.filter(orderLineModifiers, orderLineModifier => orderLineModifier.modifierId === modifier.id);
                if (modifier.required && selectedOrderLineModifiers.length <= 0) {
                    errorDict.addError(modifier.name + ' wajib dipilih');
                    isValid = false;
                }
                if (!modifier.allowMultiple && selectedOrderLineModifiers.length > 1) {
                    errorDict.addError('Maksimum ' + modifier.name + ' yang boleh dipilih adalah 1');
                    isValid = false;
                }
                if (modifier.maximumAllowed > 1 &&
                    selectedOrderLineModifiers.length > modifier.maximumAllowed) {
                    errorDict.addError('Maksimum ' +
                        modifier.name +
                        ' yang boleh dipilih adalah ' +
                        modifier.maximumAllowed);
                    isValid = false;
                }
            });
        }
        return isValid;
    }
    removeOrderLineAsync(order, orderLine, errorDict) {
        return __awaiter(this, void 0, void 0, function* () {
            // first remove from array
            const idx = order.lines.indexOf(orderLine);
            if (idx >= 0)
                order.lines.splice(idx, 1);
            if (!orderLine.isNew) {
                orderLine.qty = 0;
                orderLine.isChanged = true;
                this.calculateOrderLineTotal(orderLine);
                // move to deleted
                order.deletedLines.push(orderLine);
            }
            yield this.calculateOrderTotalAsync(order, errorDict);
            order.isChanged = true;
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return order;
        });
    }
    updateOrderLineAsync(order, orderLine, orderLineModifiers) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            let aOrderLine = lodash_1.default.find(order.lines, {
                id: orderLine.id
            });
            let relatedData = null;
            if (orderLine.productVariantId) {
                relatedData = yield this.getOrderLineRelatedDataAsync(orderLine.productId, orderLine.productVariantId, order.salesTypeId, errorDict);
                if (!relatedData) {
                    errorDict.addError('Produk tidak ditemukan');
                    throw new validation_error_1.ValidationError(errorDict);
                }
            }
            if (!this.validateOrderLine(order, orderLine, orderLineModifiers, relatedData, errorDict)) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            // if qty zero, we need to remove them from array.
            // but check if new, we can just remove, if not then we need to put them in deleted lines
            const lQty = new math_util_1.LDecimal(orderLine.qty);
            if (lQty.isZero()) {
                if (!aOrderLine) {
                    // nothing to do here
                    return order;
                }
                return this.removeOrderLineAsync(order, aOrderLine, errorDict);
            }
            if (!aOrderLine) {
                const lastOrderLine = lodash_1.default.maxBy(order.lines, 'sortOrder');
                let orderLineSortOrder = lastOrderLine ? lastOrderLine.sortOrder + 1 : 1;
                aOrderLine = new order_entry_vm_1.OrderLineEntryVM();
                aOrderLine.sortOrder = orderLineSortOrder;
                aOrderLine.isNew = true;
                aOrderLine.isChanged = true;
                order.lines.push(aOrderLine);
                orderLineSortOrder++;
            }
            else {
                aOrderLine.isChanged = true;
            }
            const variantChanged = aOrderLine.productVariantId !== orderLine.productVariantId;
            const originalOrderLineModifiers = aOrderLine.modifiers;
            aOrderLine.modifiers = [];
            lodash_1.default.merge(aOrderLine, orderLine);
            if (orderLine.productVariantId) {
                const { product, productVariants, modifiers: productModifiers } = relatedData;
                const productVariant = lodash_1.default.find(productVariants, pv => pv.id === orderLine.productVariantId);
                if (variantChanged) {
                    aOrderLine.product = product;
                    aOrderLine.productVariant = productVariant;
                    aOrderLine.unitPrice = productVariant.unitPrice;
                    aOrderLine.serviceCharged = product.serviceCharged;
                    aOrderLine.taxed = product.salesTaxId ? true : false;
                    aOrderLine.taxId = product.salesTaxId;
                }
                aOrderLine.description = productVariant.name;
                const flatModifiers = orderLine.productVariantId
                    ? lodash_1.default.flatMap(productModifiers, ({ items }) => lodash_1.default.map(items, item => ({
                        modifierId: item.modifierId,
                        modifierItemId: item.id,
                        name: item.name,
                        productId: item.productId,
                        productVariantId: item.productVariantId,
                        price: item.price
                    })))
                    : null;
                let modifierSortOrder = 1;
                lodash_1.default.forEach(orderLineModifiers, orderLineModifier => {
                    const modifier = lodash_1.default.find(flatModifiers, {
                        modifierId: orderLineModifier.modifierId,
                        modifierItemId: orderLineModifier.modifierItemId
                    });
                    if (!modifier) {
                        errorDict.addError('Modifier tidak ditemukan');
                        throw new validation_error_1.ValidationError(errorDict);
                    }
                    let aOrderLineModifier = lodash_1.default.find(originalOrderLineModifiers, {
                        modifierId: orderLineModifier.modifierId,
                        modifierItemId: orderLineModifier.modifierItemId
                    });
                    if (!aOrderLineModifier) {
                        aOrderLineModifier = new order_entry_vm_1.OrderLineModifierEntryVM();
                        aOrderLineModifier.id = v4_1.default();
                        aOrderLineModifier.modifierId = orderLineModifier.modifierId;
                        aOrderLineModifier.modifierItemId = orderLineModifier.modifierItemId;
                        aOrderLineModifier.modifierItemProductId = modifier.productId;
                        aOrderLineModifier.modifierItemProductVariantId =
                            modifier.productVariantId;
                        aOrderLineModifier.description = modifier.name;
                        aOrderLineModifier.price = orderLineModifier.price;
                    }
                    aOrderLineModifier.qty = aOrderLine.qty;
                    aOrderLineModifier.sortOrder = modifierSortOrder;
                    aOrderLine.modifiers.push(aOrderLineModifier);
                    modifierSortOrder++;
                });
            }
            else {
                aOrderLine.productId = null;
                aOrderLine.product = null;
                aOrderLine.productVariantId = null;
                aOrderLine.productVariant = null;
                aOrderLine.serviceCharged = false;
                aOrderLine.taxed = false;
                aOrderLine.taxId = null;
                aOrderLine.modifiers = [];
            }
            this.calculateOrderLineTotal(aOrderLine);
            yield this.calculateOrderTotalAsync(order, errorDict);
            order.isChanged = true;
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return order;
        });
    }
    updateCustomerAsync(order, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            if (customerId) {
                if (customerId === order.tableId) {
                    return order;
                }
                const customer = yield this._customerRepo.find({
                    where: { id: customerId, deleted: false }
                }, true);
                if (!customer) {
                    errorDict.addError('Customer tidak ditemukan');
                    throw new validation_error_1.ValidationError(errorDict);
                }
                order.customerId = customerId;
                order.customer = new customer_vm_1.CustomerVM(customer);
                order.customerName = customer.displayName;
                order.customerMobile = customer.phone;
                order.customerEmail = customer.email;
            }
            else {
                order.customerId = null;
                order.customer = null;
                order.customerName = null;
                order.customerMobile = null;
                order.customerEmail = null;
            }
            order.isChanged = true;
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return order;
        });
    }
    updateSalesTypeAsync(order, salesTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!salesTypeId) {
                return order; // salesType is required
            }
            if (salesTypeId === order.salesTypeId) {
                return order;
            }
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            const salesType = yield this._salesTypeRepo.find({
                where: { id: salesTypeId, deleted: false }
            }, true);
            if (!salesType) {
                errorDict.addError('Sales type tidak ditemukan');
                throw new validation_error_1.ValidationError(errorDict);
            }
            order.salesTypeId = salesTypeId;
            order.salesType = salesType;
            const productVariantIds = lodash_1.default(order.lines)
                .filter((orderLine) => orderLine.productVariantId !== null ||
                orderLine.productVariantId !== undefined)
                .map((orderLine) => orderLine.productVariantId)
                .uniq()
                .value();
            const productVariantPricelist = productVariantIds && productVariantIds.length > 0
                ? yield product_query_helper_1.ProductQueryHelper.getProductVariantPriceBySalesType(this._mainDbContext, order.salesTypeId, productVariantIds)
                : null;
            const modifierItemIds = lodash_1.default(order.lines)
                .flatMap((orderLine) => orderLine.modifiers)
                .filter((orderLineModifier) => orderLineModifier.modifierItemProductVariantId)
                .map((orderLineModifier) => orderLineModifier.modifierItemProductVariantId)
                .uniq()
                .value();
            const modifierItemPricelist = productVariantIds && productVariantIds.length > 0
                ? yield product_query_helper_1.ProductQueryHelper.getModifierItemPriceBySalesType(this._mainDbContext, order.salesTypeId, modifierItemIds)
                : null;
            lodash_1.default.forEach(order.lines, orderLine => {
                if (orderLine.productVariantId) {
                    const orderLinePrice = lodash_1.default.find(productVariantPricelist, {
                        id: orderLine.productVariantId
                    });
                    if (orderLinePrice)
                        orderLine.unitPrice = orderLinePrice.unitPrice;
                    if (orderLine.modifiers && orderLine.modifiers.length > 0) {
                        lodash_1.default.forEach(orderLine.modifiers, orderLineModifier => {
                            const orderLineModifierPrice = lodash_1.default.find(modifierItemPricelist, {
                                id: orderLineModifier.modifierItemId
                            });
                            if (orderLineModifierPrice) {
                                orderLineModifier.price = orderLineModifierPrice.price;
                            }
                        });
                    }
                    this.calculateOrderLineTotal(orderLine);
                }
            });
            yield this.calculateOrderTotalAsync(order, errorDict);
            order.isChanged = true;
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return order;
        });
    }
    updateTableAsync(order, tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            if (tableId) {
                if (tableId === order.tableId) {
                    return order;
                }
                const table = yield this._tableRepo.find({
                    where: { id: tableId, deleted: false }
                }, true);
                if (!table) {
                    errorDict.addError('Meja tidak ditemukan');
                    throw new validation_error_1.ValidationError(errorDict);
                }
                const tableUsed = yield this.isTableUsedAsync(order.id, tableId);
                if (tableUsed) {
                    errorDict.addError('Meja sudah terisi');
                    throw new validation_error_1.ValidationError(errorDict);
                }
                order.tableId = tableId;
                order.table = new table_vm_1.TableVM(table);
            }
            else {
                order.tableId = null;
                order.table = null;
            }
            order.isChanged = true;
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            return order;
        });
    }
    generateOrderNumberAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const outletSetting = yield this._outletSettingRepo.getDefaultOutletSetting();
            const currOrderDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
            if (moment(currOrderDate).format('DDMMYY') !==
                moment(outletSetting.lastOrderNumberDate).format('DDMMYY')) {
                outletSetting.updateAttributes({
                    lastOrderNumberCount: 1,
                    lastOrderNumberDate: currOrderDate
                });
            }
            else {
                outletSetting.updateAttributes({
                    lastOrderNumberCount: outletSetting.lastOrderNumberCount + 1
                });
            }
            const orderNumber = `${moment(outletSetting.lastOrderNumberDate).format('DDMMYY')}-${outletSetting.lastOrderNumberCount}`;
            return orderNumber;
        });
    }
    validateOrderAsync(order, orderDb, errorDict, withPayment = false, payments = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (order.lines.length <= 0) {
                errorDict.addError('Order harus memiliki paling sedikit 1 item');
                return false;
            }
            if (order.subTotal < 0 ||
                order.discountAmount < 0 ||
                order.serviceChargeAmount < 0 ||
                order.taxAmount < 0 ||
                order.total < 0) {
                errorDict.addError('Subtotal, service charge, pajak dan total tidak diperbolehkan kurang dari 0');
                return false;
            }
            if (!order.salesTypeId) {
                errorDict.addError('Sales type wajib diisi');
                return false;
            }
            if (order.tableId) {
                if (orderDb && orderDb.tableId && order.tableId !== orderDb.tableId) {
                    const tableUsed = yield this.isTableUsedAsync(order.id, order.tableId);
                    if (tableUsed) {
                        errorDict.addError('Meja sudah terisi');
                        return false;
                    }
                }
            }
            if (withPayment) {
                if (!payments || payments.length <= 0) {
                    errorDict.addError('Jumlah yang dibayar kurang dari total order');
                    return false;
                }
                const tenderAmount = new math_util_1.LDecimal(lodash_1.default.sumBy(payments, 'paymentAmount'));
                const changeAmount = tenderAmount.minus(order.total).toDP(2);
                if (tenderAmount.lessThan(order.total)) {
                    errorDict.addError('Jumlah yang dibayar kurang dari total order');
                    return false;
                }
                const defaultCashPayment = lodash_1.default.find(payments, (payment) => payment.isCash);
                if (changeAmount.greaterThan(0) &&
                    (!defaultCashPayment ||
                        changeAmount.greaterThan(defaultCashPayment.paymentAmount))) {
                    errorDict.addError('Jumlah kembalian tidak boleh lebih besar dari jumlah pembayaran cash');
                    return false;
                }
            }
            return true;
        });
    }
    internalSaveOrderToDbAsync(order, oriOrderDb, errorDict, withPayment = false, payments = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: orderId, rowVersion: currentRowVersion } = order;
            // remove existing modifiers
            yield this._orderLineModifierRepo.delete({ where: { orderId: orderId } });
            // remove existing order taxes
            yield this._orderTaxRepo.delete({ where: { orderId: orderId } });
            // order header
            const orderAttr = {};
            const newRowVersion = v4_1.default();
            orderAttr.isSync = false;
            orderAttr.rowVersion = newRowVersion;
            order.rowVersion = newRowVersion;
            const saveOrder = lodash_1.default.merge(lodash_1.default.cloneDeep(order), orderAttr);
            saveOrder.lines = null;
            saveOrder.payments = null;
            saveOrder.taxes = null;
            if (order.isNew) {
                yield this._orderRepo.add(saveOrder, {});
            }
            else {
                yield this._orderRepo.updateWithRowVersion(saveOrder, currentRowVersion, {
                    where: { id: orderId }
                });
            }
            const oriOrderLinesDb = oriOrderDb ? oriOrderDb.lines : null;
            // order lines
            // first delete lines that is not included in order.lines
            if (oriOrderLinesDb && oriOrderLinesDb.length > 0) {
                const deletedLineIds = [];
                lodash_1.default.forEach(oriOrderLinesDb, function (orderLineDb) {
                    const orderLine = lodash_1.default.find(order.lines, ol => ol.id === orderLineDb.id);
                    if (!orderLine)
                        deletedLineIds.push(orderLineDb.id);
                });
                if (deletedLineIds.length > 0) {
                    yield this._orderLineRepo.delete({
                        where: {
                            orderId: orderId,
                            id: {
                                $in: deletedLineIds
                            }
                        }
                    });
                }
            }
            // now save lines
            lodash_1.default.forEach(order.lines, (orderLine) => __awaiter(this, void 0, void 0, function* () {
                const orderLineAttr = {};
                orderLineAttr.orderId = orderId;
                const saveOrderLine = lodash_1.default.merge(lodash_1.default.cloneDeep(orderLine), orderLineAttr);
                saveOrderLine.modifiers = null;
                if (orderLine.isNew) {
                    yield this._orderLineRepo.add(saveOrderLine);
                }
                else {
                    yield this._orderLineRepo.update(saveOrderLine, {
                        where: { id: orderLine.id, orderId: orderId }
                    });
                }
            }));
            // save modifiers
            const mappedOrderLineModifiers = lodash_1.default.flatMap(order.lines, ol => {
                return lodash_1.default.map(ol.modifiers, modifier => {
                    return {
                        orderLineId: ol.id,
                        modifier: modifier
                    };
                });
            });
            lodash_1.default.forEach(mappedOrderLineModifiers, (mappedOrderLineModifier) => __awaiter(this, void 0, void 0, function* () {
                const { orderLineId, modifier: orderLineModifier } = mappedOrderLineModifier;
                const orderLineModifierAttr = {
                    orderId: orderId,
                    orderLineId: orderLineId
                };
                const saveOrderLineModifier = lodash_1.default.merge(orderLineModifier, orderLineModifierAttr);
                yield this._orderLineModifierRepo.add(saveOrderLineModifier);
            }));
            // save taxes
            lodash_1.default.forEach(order.taxes, (orderTax) => __awaiter(this, void 0, void 0, function* () {
                const orderTaxAttr = {
                    orderId: orderId
                };
                const saveOrderTax = lodash_1.default.merge(orderTax, orderTaxAttr);
                yield this._orderTaxRepo.add(saveOrderTax);
            }));
            if (withPayment) {
                // save payments
                const paymentMethods = yield this._paymentMethodRepo.findAll({ where: { deleted: false } }, null);
                let paymentSortOrder = 1;
                lodash_1.default.forEach(payments, (payment) => __awaiter(this, void 0, void 0, function* () {
                    const paymentMethod = lodash_1.default.find(paymentMethods, (pmtMethod) => pmtMethod.paymentMethodId === payment.paymentMethodId);
                    if (!paymentMethod) {
                        errorDict.addError('Metode pembayaran tidak ditemukan');
                        throw new validation_error_1.ValidationError(errorDict);
                    }
                    const paymentAttr = {
                        orderId: orderId,
                        paymentMethodId: payment.paymentMethodId,
                        paymentAccountId: paymentMethod.paymentAccountId,
                        paymentAmount: payment.paymentAmount,
                        cardNumber: payment.cardNumber,
                        cardHolder: payment.cardHolder,
                        referenceNumber: payment.referenceNumber,
                        sortOrder: paymentSortOrder
                    };
                    paymentSortOrder++;
                    const saveOrderPayment = paymentAttr;
                    yield this._orderPaymentRepo.add(saveOrderPayment);
                }));
            }
        });
    }
    internalSaveOrderAsync(order, userId, withPayment = false, payments = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            const currentDateTime = new Date();
            const currentDate = date_util_1.DateUtils.removeTime(currentDateTime);
            if (order.isNew) {
                order.orderDate = currentDate;
                order.orderDateTime = currentDateTime;
                order.createdByUserId = userId;
                order.createdDate = currentDateTime;
            }
            else {
                order.lastUpdateByUserId = userId;
                order.lastUpdateDate = currentDateTime;
            }
            if (withPayment) {
                order.status = 'settled';
            }
            else {
                order.status = 'open';
            }
            if (withPayment) {
                const tenderAmount = new math_util_1.LDecimal(lodash_1.default.sumBy(payments, 'paymentAmount'));
                const changeAmount = tenderAmount.minus(order.total).toDP(2);
                order.tenderAmount = tenderAmount.toNumber();
                order.changeAmount = changeAmount.toNumber();
                order.paidByUserId = userId;
                order.paymentDate = currentDateTime;
            }
            lodash_1.default.forEach(order.lines, (orderLine) => {
                if (orderLine.isNew) {
                    orderLine.createdByUserId = userId;
                    orderLine.createdDate = currentDateTime;
                }
                else {
                    orderLine.lastUpdateByUserId = userId;
                    orderLine.lastUpdateDate = currentDateTime;
                }
            });
            yield this.calculateOrderTotalAsync(order, errorDict, true);
            let oriOrderDb;
            if (!order.isNew) {
                oriOrderDb = yield this.getOrderByIdFromDbAsync(order.id);
                if (!oriOrderDb) {
                    errorDict.addError('Order tidak ditemukan. Hanya order aktif yang dapat diubah');
                    throw new validation_error_1.ValidationError(errorDict);
                }
            }
            if (!(yield this.validateOrderAsync(order, oriOrderDb, errorDict))) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            yield database_util_1.wrapAsyncFunctionWithTransactionDBMain(() => __awaiter(this, void 0, void 0, function* () {
                // put here so genereateOrderNumber is included in transaction and will rollback in case of error
                if (order.isNew) {
                    order.orderNumber = yield this.generateOrderNumberAsync();
                }
                yield this.internalSaveOrderToDbAsync(order, oriOrderDb, errorDict, withPayment, payments);
            }));
            const changedLines = lodash_1.default(order.lines)
                .filter((orderLine) => !new math_util_1.LDecimal(orderLine.changedQty).isZero())
                .union(order.deletedLines)
                .value();
            const updateOrderDb = yield this.getOrderByIdFromDbAsync(order.id, false);
            const updatedOrder = (lodash_1.default.merge(new order_entry_vm_1.OrderEntryVM(), updateOrderDb));
            const result = new order_entry_response_vm_1.SaveOrderEntryResponseVM();
            result.order = updatedOrder;
            result.changedLines = changedLines;
            return result;
        });
    }
    saveOrderAsync(order, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.internalSaveOrderAsync(order, userId, false, null);
        });
    }
    saveOrderAndPayAsync(order, userId, payments = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let totalPayment = 0;
            payments.map(p => (totalPayment += p.paymentAmount));
            if (totalPayment < order.total) {
                const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
                errorDict.addError('Error: Total pembayaran kurang dari total tagihan');
                throw new validation_error_1.ValidationError(errorDict);
            }
            return this.internalSaveOrderAsync(order, userId, true, payments);
        });
    }
    validateCancelOrder(order, userId, errorDict) {
        if (order.status !== 'open') {
            errorDict.addError('Hanya order aktif yang dapat di batalkan');
            return false;
        }
        return true;
    }
    cancelOrderAsync(orderId, reason, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            const orderDb = yield this._orderRepo.findById(orderId, null);
            if (!orderDb) {
                errorDict.addError('Order tidak ditemukan');
                throw new validation_error_1.ValidationError(errorDict);
            }
            if (!this.validateCancelOrder(orderDb, userId, errorDict)) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            yield database_util_1.wrapAsyncFunctionWithTransactionDBMain(() => __awaiter(this, void 0, void 0, function* () {
                yield this._orderRepo.update({
                    status: 'cancelled',
                    cancelledByUserId: userId,
                    cancellationReason: reason,
                    cancellationDate: new Date(),
                    rowVersion: v4_1.default()
                }, { where: { id: orderId } });
            }));
            return true;
        });
    }
    validateMergeOrder(order, targetOrder, errorDict) {
        if (order.salesTypeId !== targetOrder.salesTypeId) {
            errorDict.addError('Order dengan sales type berbeda tidak dapat digabung');
            return false;
        }
        return true;
    }
    getOrderByTableId(tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield this._orderRepo.findOne({ where: { tableId, status: 'open' } }, true);
                if (!order)
                    throw Error('Order tidak ditemukan');
                const fullOrder = yield this.getOrderByIdAsync(order.id);
                return fullOrder.order;
            }
            catch (error) {
                throw error;
            }
        });
    }
    mergeOrderAsync(orderId, targetOrderId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorDict = new error_dictionary_vm_1.ErrorDictionaryVM();
            const currentDateTime = new Date();
            const currentDate = date_util_1.DateUtils.removeTime(currentDateTime);
            if (orderId === targetOrderId) {
                errorDict.addError('Tidak dapat menggabungkan order yang sama');
                return false;
            }
            const orderDb = yield this.getOrderByIdFromDbAsync(orderId, true);
            const targetOrderDb = yield this.getOrderByIdFromDbAsync(targetOrderId, true);
            if (!orderDb || !targetOrderDb) {
                errorDict.addError('Order tidak ditemukan. Hanya order aktif yang dapat digabung');
                return false;
            }
            const order = this.mapOrderDbModelToVM(orderDb);
            const targetOrder = this.mapOrderDbModelToVM(targetOrderDb);
            if (!this.validateMergeOrder(order, targetOrder, errorDict)) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            if (!targetOrder.customerId) {
                targetOrder.customerId = order.customerId;
                targetOrder.customerName = order.customerName;
                targetOrder.customerMobile = order.customerMobile;
                targetOrder.customerEmail = order.customerEmail;
            }
            if (order.customDiscount && order.discountAmount > 0) {
                if (!targetOrder.discountPercent &&
                    (targetOrder.customDiscount || targetOrder.discountAmount === 0)) {
                    targetOrder.customDiscount = true;
                    targetOrder.discountPercent = order.discountPercent;
                    targetOrder.discountAmount = order.discountAmount;
                }
            }
            targetOrder.lastUpdateByUserId = userId;
            targetOrder.lastUpdateDate = currentDateTime;
            targetOrder.isNew = false;
            targetOrder.isChanged = true;
            const lastOrderLine = lodash_1.default.maxBy(order.lines, 'sortOrder');
            let orderLineSortOrder = lastOrderLine ? lastOrderLine.sortOrder + 1 : 1;
            lodash_1.default.forEach(order.lines, (orderLine) => {
                orderLine.sortOrder = orderLineSortOrder;
                orderLine.isNew = true;
                orderLine.isChanged = true;
                targetOrder.lines.push(orderLine);
                orderLineSortOrder++;
            });
            yield this.calculateOrderTotalAsync(targetOrder, errorDict, true);
            if (errorDict.count() > 0) {
                throw new validation_error_1.ValidationError(errorDict);
            }
            yield database_util_1.wrapAsyncFunctionWithTransactionDBMain(() => __awaiter(this, void 0, void 0, function* () {
                yield this._orderLineModifierRepo.delete({ where: { orderId } });
                yield this.internalSaveOrderToDbAsync(targetOrder, targetOrderDb, errorDict, false, null);
                // now update source order. mark status as merged
                yield this._orderRepo.updateWithRowVersion({ status: 'merged' }, order.rowVersion, { where: { id: order.id } });
            }));
            return true;
        });
    }
}
exports.OrderEntryService = OrderEntryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL29yZGVyLWVudHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUF1QjtBQUN2QixpQ0FBa0M7QUFDbEMsaURBQTJCO0FBRzNCLDJFQUFxRTtBQUNyRSxpRkFBMEU7QUFDMUUsb0VBQXdGO0FBQ3hGLDREQUF1RDtBQUN2RCw0REFBaUU7QUFHakUseURBQW1EO0FBU25ELDBFQUFtRTtBQUtuRSxnREFBMEM7QUFTMUMsK0VBR3VDO0FBQ3ZDLHVFQUttQztBQUNuQyxxREFLMEI7QUFLMUIsTUFBYSxpQkFBaUI7SUF3QjVCLGVBQWU7SUFFZixZQUFZLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBRXBDLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFE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