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
const sequelize_1 = __importDefault(require("sequelize"));
class SyncOrderService {
    constructor(mainDbContext) {
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
    syncOrderData() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._orderRepo
                    .findAll({
                    where: {
                        status: 'settled',
                        isSync: { [sequelize_1.default.Op.or]: [null, false] }
                    },
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
                    .then(orderList => {
                    const orderListMapped = orderList.map(order => {
                        return {
                            transactionId: order.id,
                            transactionNumber: order.orderNumber,
                            transactionDate: order.orderDateTime,
                            customerId: order.customerId,
                            salesTypeId: order.salesTypeId,
                            tableId: order.tableId,
                            taxInclusive: order.taxInclusive,
                            subtotal: order.subTotal,
                            discountPercent: 0,
                            discountAmount: 0,
                            serviceCharged: order.serviceCharged,
                            serviceChargeRate: order.serviceChargeRate,
                            serviceChargeAmount: order.serviceChargeAmount,
                            serviceChargeTaxId: order.serviceChargeTaxId,
                            taxed: order.taxed,
                            taxAmount: order.taxAmount,
                            adjustmentAmount: order.adjustmentAmount,
                            total: order.total,
                            note: null,
                            customerNote: null,
                            createdByUserId: order.createdByUserId,
                            createdDate: order.createdDate,
                            paidByUserId: order.paidByUserId,
                            paymentDate: order.paymentDate,
                            cancelledByUserId: order.cancelledByUserId,
                            cancellationDate: order.cancellationDate,
                            cancellationReason: order.cancellationReason,
                            tenderAmount: order.tenderAmount,
                            changeAmount: order.changeAmount,
                            lines: order.lines.map(line => {
                                return {
                                    productId: line.productId,
                                    productVariantId: line.productVariantId,
                                    description: line.description,
                                    qty: line.qty,
                                    unitPrice: line.unitPrice,
                                    discountPercent: 0,
                                    discountAmount: 0,
                                    uomId: null,
                                    serviceCharged: line.serviceCharged,
                                    taxId: line.taxId,
                                    taxed: line.taxed,
                                    note: line.notes,
                                    lineType: line.lineType,
                                    cancelledByUserId: null,
                                    cancelledDateUtc: line.cancellationDate || undefined,
                                    lastEditUserId: null,
                                    lastEditDateUtc: line.updatedAt,
                                    modifierItems: line.modifiers.map(mI => {
                                        return {
                                            modifierItemId: mI.modifierItemId,
                                            modifierId: mI.modifierId,
                                            productId: mI.modifierItemProductId,
                                            productVariantId: mI.modifierItemProductVariantId,
                                            description: mI.description,
                                            qty: mI.qty,
                                            unitPrice: mI.price,
                                        };
                                    })
                                };
                            }),
                            orderPayments: order.payments.map(oP => {
                                return {
                                    paymentMethodId: oP.paymentMethodId,
                                    paymentAccountId: oP.paymentAccountId,
                                    isDefaultCash: oP.paymentMethod.isDefaultCash,
                                    referenceNumber: oP.referenceNumber,
                                    cardNumber: oP.cardNumber,
                                    cardHolder: oP.cardHolder,
                                    payerBankInfo: '',
                                    amount: oP.paymentAmount
                                };
                            })
                        };
                    });
                    resolve(orderListMapped);
                })
                    .catch(reject);
            });
        });
    }
}
exports.SyncOrderService = SyncOrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc3luYy9zeW5jLW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFrQztBQXVCbEMsTUFBYSxnQkFBZ0I7SUF1QjNCLFlBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLG1C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