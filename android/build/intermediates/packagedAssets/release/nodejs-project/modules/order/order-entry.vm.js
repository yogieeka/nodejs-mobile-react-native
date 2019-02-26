"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const defer_decorator_decorator_1 = require("../../shared/decorator/defer-decorator.decorator");
const base_vm_1 = require("../../shared/models/base.vm");
const customer_vm_1 = require("../customer/customer.vm");
const payment_method_vm_1 = require("../payment-method/payment-method.vm");
const sales_type_vm_1 = require("../sales-type/sales-type.vm");
const table_vm_1 = require("../table/table.vm");
const tax_vm_1 = require("../tax/tax.vm");
const user_vm_1 = require("../user/user.vm");
const order_line_modifier_vm_1 = require("./line/modifier/order-line-modifier.vm");
const order_entry_related_data_vm_1 = require("./order-entry-related-data.vm");
//#region ORDER_ENTRY
class OrderLineModifierEntryVM extends base_vm_1.BaseEntityResponseVM {
    constructor() {
        super(...arguments);
        this.qty = 0;
        this.price = 0;
        this.sortOrder = 0;
    }
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierEntryVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierEntryVM.prototype, "modifierId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierEntryVM.prototype, "modifierItemId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierEntryVM.prototype, "modifierItemProductId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierEntryVM.prototype, "modifierItemProductVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierEntryVM.prototype, "description", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineModifierEntryVM.prototype, "qty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineModifierEntryVM.prototype, "price", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineModifierEntryVM.prototype, "sortOrder", void 0);
exports.OrderLineModifierEntryVM = OrderLineModifierEntryVM;
class OrderLineEntryVM extends base_vm_1.BaseEntityResponseVM {
    constructor() {
        super(...arguments);
        this.qty = 0;
        this.originalQty = 0;
        this.changedQty = 0;
        this.unitPrice = 0;
        this.modifierPrice = 0;
        this.customDiscount = false;
        this.discountAmount = 0;
        this.total = 0;
        this.serviceCharged = false;
        this.taxed = false;
        this.lineType = 'item';
        this.itemType = 'item';
        this.isNew = false; // non database property
        this.isChanged = false;
        this.modifiers = [];
    }
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "productVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "description", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "qty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "originalQty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "changedQty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "unitPrice", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "modifierPrice", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineEntryVM.prototype, "customDiscount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "discountPercent", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "discountAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "total", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineEntryVM.prototype, "serviceCharged", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineEntryVM.prototype, "taxed", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "taxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "notes", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineEntryVM.prototype, "sortOrder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "createdByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderLineEntryVM.prototype, "createdDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "lastUpdateByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderLineEntryVM.prototype, "lastUpdateDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "cancelledByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineEntryVM.prototype, "cancelled", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "cancellationReason", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ enum: ['item'] }),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "lineType", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ enum: ['item', 'discount'] }),
    __metadata("design:type", String)
], OrderLineEntryVM.prototype, "itemType", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineEntryVM.prototype, "isNew", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineEntryVM.prototype, "isChanged", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_related_data_vm_1.ProductOrderEntryVM] })
    ]),
    __metadata("design:type", order_entry_related_data_vm_1.ProductOrderEntryVM)
], OrderLineEntryVM.prototype, "product", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_related_data_vm_1.ProductVariantOrderEntryVM] })
    ]),
    __metadata("design:type", order_entry_related_data_vm_1.ProductVariantOrderEntryVM)
], OrderLineEntryVM.prototype, "productVariant", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_line_modifier_vm_1.OrderLineModifierVM] })
    ]),
    __metadata("design:type", Array)
], OrderLineEntryVM.prototype, "modifiers", void 0);
exports.OrderLineEntryVM = OrderLineEntryVM;
class OrderTaxEntryVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderTaxEntryVM.prototype, "taxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderTaxEntryVM.prototype, "taxRate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderTaxEntryVM.prototype, "baseAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderTaxEntryVM.prototype, "taxAmount", void 0);
exports.OrderTaxEntryVM = OrderTaxEntryVM;
class OrderPaymentEntryVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryVM.prototype, "paymentMethodId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: payment_method_vm_1.PaymentMethodVM }),
    __metadata("design:type", payment_method_vm_1.PaymentMethodVM)
], OrderPaymentEntryVM.prototype, "paymentMethod", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryVM.prototype, "paymentAccountId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderPaymentEntryVM.prototype, "paymentAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryVM.prototype, "cardNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryVM.prototype, "cardHolder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryVM.prototype, "referenceNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderPaymentEntryVM.prototype, "sortOrder", void 0);
exports.OrderPaymentEntryVM = OrderPaymentEntryVM;
class OrderEntryVM extends base_vm_1.BaseEntityResponseVM {
    constructor() {
        super(...arguments);
        this.taxInclusive = false;
        this.lineCount = 0;
        this.lineTotalQty = 0;
        this.subTotal = 0;
        this.customDiscount = false;
        this.discountAmount = 0;
        this.serviceCharged = false;
        this.serviceChargeRate = 0;
        this.serviceChargeAmount = 0;
        this.taxed = false;
        this.taxAmount = 0;
        this.adjustmentAmount = 0;
        this.total = 0;
        this.tenderAmount = 0;
        this.changeAmount = 0;
        this.status = 'open';
        this.isNew = false;
        this.isChanged = false;
        this.lines = [];
        this.deletedLines = [];
        this.taxes = [];
    }
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "orderNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderEntryVM.prototype, "orderDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], OrderEntryVM.prototype, "orderDateTime", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "customerId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "customerName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "customerEmail", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "customerMobile", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "salesTypeId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "tableId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderEntryVM.prototype, "taxInclusive", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "lineCount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "lineTotalQty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "subTotal", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderEntryVM.prototype, "customDiscount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "discountPercent", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "discountAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderEntryVM.prototype, "serviceCharged", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "serviceChargeRate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "serviceChargeAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "serviceChargeTaxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderEntryVM.prototype, "taxed", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "taxAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "adjustmentAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "total", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "tenderAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderEntryVM.prototype, "changeAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "status", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", user_vm_1.UserVM)
], OrderEntryVM.prototype, "createdByUser", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "createdByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderEntryVM.prototype, "createdDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "lastUpdateByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Date)
], OrderEntryVM.prototype, "lastUpdateDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", user_vm_1.UserVM)
], OrderEntryVM.prototype, "paidByUser", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "paidByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderEntryVM.prototype, "paymentDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: [OrderPaymentEntryVM] }),
    __metadata("design:type", Array)
], OrderEntryVM.prototype, "payments", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", user_vm_1.UserVM)
], OrderEntryVM.prototype, "cancelledByUser", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "cancelledByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderEntryVM.prototype, "cancellationDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "cancellationReason", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderEntryVM.prototype, "rowVersion", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderEntryVM.prototype, "isNew", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderEntryVM.prototype, "isChanged", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: customer_vm_1.CustomerVM }),
    __metadata("design:type", customer_vm_1.CustomerVM)
], OrderEntryVM.prototype, "customer", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: sales_type_vm_1.SalesTypeVM }),
    __metadata("design:type", sales_type_vm_1.SalesTypeVM)
], OrderEntryVM.prototype, "salesType", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: table_vm_1.TableVM })]),
    __metadata("design:type", table_vm_1.TableVM)
], OrderEntryVM.prototype, "table", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: tax_vm_1.TaxVM }),
    __metadata("design:type", tax_vm_1.TaxVM)
], OrderEntryVM.prototype, "serviceChargeTax", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [OrderLineEntryVM] })
    ]),
    __metadata("design:type", Array)
], OrderEntryVM.prototype, "lines", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [OrderLineEntryVM] })
    ]),
    __metadata("design:type", Array)
], OrderEntryVM.prototype, "deletedLines", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [OrderTaxEntryVM] })
    ]),
    __metadata("design:type", Array)
], OrderEntryVM.prototype, "taxes", void 0);
exports.OrderEntryVM = OrderEntryVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50cnkudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vcmRlci9vcmRlci1lbnRyeS52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSxnR0FBa0Y7QUFDbEYseURBQW1FO0FBQ25FLHlEQUFxRDtBQUNyRCwyRUFBc0U7QUFDdEUsK0RBQTBEO0FBQzFELGdEQUE0QztBQUM1QywwQ0FBc0M7QUFDdEMsNkNBQXlDO0FBQ3pDLG1GQUE2RTtBQUM3RSwrRUFBZ0c7QUFFaEcscUJBQXFCO0FBRXJCLE1BQWEsd0JBQXlCLFNBQVEsOEJBQW9CO0lBQWxFOztRQW9CUyxRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBR2hCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsY0FBUyxHQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQUE7QUF6QkM7SUFEQyx5Q0FBd0IsRUFBRTs7b0RBQ1Q7QUFHbEI7SUFEQyx5Q0FBd0IsRUFBRTs7NERBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7Z0VBQ0c7QUFHOUI7SUFEQyx5Q0FBd0IsRUFBRTs7dUVBQ1U7QUFHckM7SUFEQyx5Q0FBd0IsRUFBRTs7OEVBQ2lCO0FBRzVDO0lBREMseUNBQXdCLEVBQUU7OzZEQUNBO0FBRzNCO0lBREMseUNBQXdCLEVBQUU7O3FEQUNKO0FBR3ZCO0lBREMseUNBQXdCLEVBQUU7O3VEQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7OzJEQUNFO0FBMUIvQiw0REEyQkM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLDhCQUFvQjtJQUExRDs7UUFjUyxRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBR2hCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFHdkIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUcxQixtQkFBYyxH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