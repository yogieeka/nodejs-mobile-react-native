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
const sales_type_vm_1 = require("../sales-type/sales-type.vm");
const table_vm_1 = require("../table/table.vm");
const tax_vm_1 = require("../tax/tax.vm");
const user_vm_1 = require("../user/user.vm");
const order_line_vm_1 = require("./line/order-line.vm");
const order_payment_vm_1 = require("./order-payment/order-payment.vm");
const order_tax_vm_1 = require("./order-tax/order-tax.vm");
class OrderVM extends base_vm_1.BaseEntityResponseVM {
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
        this.serviceChargeTaxRate = 0;
        this.taxed = false;
        this.taxAmount = 0;
        this.adjustmentAmount = 0;
        this.total = 0;
        this.tenderAmount = 0;
        this.changeAmount = 0;
        this.status = 'open';
        this.isSync = false;
        this.lines = [];
        this.payments = [];
        this.taxes = [];
    }
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "orderNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderVM.prototype, "orderDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], OrderVM.prototype, "orderDateTime", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: customer_vm_1.CustomerVM }),
    __metadata("design:type", customer_vm_1.CustomerVM)
], OrderVM.prototype, "customer", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "customerId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "customerName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "customerEmail", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "customerMobile", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: sales_type_vm_1.SalesTypeVM }),
    __metadata("design:type", sales_type_vm_1.SalesTypeVM)
], OrderVM.prototype, "salesType", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "salesTypeId", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: table_vm_1.TableVM })]),
    __metadata("design:type", table_vm_1.TableVM)
], OrderVM.prototype, "table", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "tableId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderVM.prototype, "taxInclusive", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "lineCount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "lineTotalQty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "subTotal", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderVM.prototype, "customDiscount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "discountPercent", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "discountAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderVM.prototype, "serviceCharged", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "serviceChargeRate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "serviceChargeAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: tax_vm_1.TaxVM }),
    __metadata("design:type", tax_vm_1.TaxVM)
], OrderVM.prototype, "serviceChargeTax", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "serviceChargeTaxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "serviceChargeTaxRate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderVM.prototype, "taxed", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "taxAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "adjustmentAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "total", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "tenderAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderVM.prototype, "changeAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "status", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", user_vm_1.UserVM)
], OrderVM.prototype, "createdByUser", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "createdByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderVM.prototype, "createdDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "lastUpdateByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Date)
], OrderVM.prototype, "lastUpdateDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", user_vm_1.UserVM)
], OrderVM.prototype, "paidByUser", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "paidByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderVM.prototype, "paymentDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", user_vm_1.UserVM)
], OrderVM.prototype, "cancelledByUser", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "cancelledByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderVM.prototype, "cancellationDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "cancellationReason", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderVM.prototype, "rowVersion", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderVM.prototype, "isSync", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Date)
], OrderVM.prototype, "syncDate", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_line_vm_1.OrderLineVM] })]),
    __metadata("design:type", Array)
], OrderVM.prototype, "lines", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_payment_vm_1.OrderPaymentVM] })]),
    __metadata("design:type", Array)
], OrderVM.prototype, "payments", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_tax_vm_1.OrderTaxVM] })]),
    __metadata("design:type", Array)
], OrderVM.prototype, "taxes", void 0);
exports.OrderVM = OrderVM;
class OrderSearchVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderSearchVM.prototype, "query", void 0);
exports.OrderSearchVM = OrderSearchVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vcmRlci9vcmRlci52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSxnR0FBa0Y7QUFDbEYseURBQW1FO0FBQ25FLHlEQUFxRDtBQUNyRCwrREFBMEQ7QUFDMUQsZ0RBQTRDO0FBQzVDLDBDQUFzQztBQUN0Qyw2Q0FBeUM7QUFDekMsd0RBQW1EO0FBQ25ELHVFQUFrRTtBQUNsRSwyREFBc0Q7QUFFdEQsTUFBYSxPQUFRLFNBQVEsOEJBQW9CO0lBQWpEOztRQXlDUyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUc5QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR3RCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFNaEMsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFHM0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFHaEMsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRzlCLHdCQUFtQixHQUFXLENBQUMsQ0FBQztRQVNoQyx5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFHakMsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUd2QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR3RCLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUc3QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLFdBQU0sR0FBVyxNQUFNLENBQUM7UUEwQ3hCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFNeEIsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFHMUIsYUFBUSxHQUFxQixFQUFFLENBQUM7UUFHaEMsVUFBSyxHQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUFBO0FBdkpD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