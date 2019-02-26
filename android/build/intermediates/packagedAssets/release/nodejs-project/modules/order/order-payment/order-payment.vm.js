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
const nestjs_swagger_1 = require("../../../external/nestjs-swagger");
const defer_decorator_decorator_1 = require("../../../shared/decorator/defer-decorator.decorator");
const base_vm_1 = require("../../../shared/models/base.vm");
const payment_method_vm_1 = require("../../payment-method/payment-method.vm");
const order_vm_1 = require("../order.vm");
class OrderPaymentVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentVM.prototype, "orderId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentVM.prototype, "paymentMethodId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentVM.prototype, "paymentAccountId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderPaymentVM.prototype, "paymentAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentVM.prototype, "cardNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentVM.prototype, "cardHolder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentVM.prototype, "referenceNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderPaymentVM.prototype, "sortOrder", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: order_vm_1.OrderVM })]),
    __metadata("design:type", order_vm_1.OrderVM)
], OrderPaymentVM.prototype, "order", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: payment_method_vm_1.PaymentMethodVM })]),
    __metadata("design:type", payment_method_vm_1.PaymentMethodVM)
], OrderPaymentVM.prototype, "paymentMethod", void 0);
exports.OrderPaymentVM = OrderPaymentVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcGF5bWVudC52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL29yZGVyLXBheW1lbnQvb3JkZXItcGF5bWVudC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFFQUE0RTtBQUM1RSxtR0FBcUY7QUFDckYsNERBQXNFO0FBQ3RFLDhFQUF5RTtBQUN6RSwwQ0FBc0M7QUFFdEMsTUFBYSxjQUFlLFNBQVEsOEJBQW9CO0NBZ0N2RDtBQTdCQztJQURDLHlDQUF3QixFQUFFOzsrQ0FDSjtBQUd2QjtJQURDLHlDQUF3QixFQUFFOzt1REFDSTtBQUcvQjtJQURDLHlDQUF3QixFQUFFOzt3REFDSztBQUdoQztJQURDLHlDQUF3QixFQUFFOztxREFDRTtBQUc3QjtJQURDLHlDQUF3QixFQUFFOztrREFDRDtBQUcxQjtJQURDLHlDQUF3QixFQUFFOztrREFDRDtBQUcxQjtJQURDLHlDQUF3QixFQUFFOzt1REFDSTtBQUcvQjtJQURDLHlDQUF3QixFQUFFOztpREFDRjtBQUl6QjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUN0RCxrQkFBTzs2Q0FBQztBQUd0QjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxtQ0FBZSxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUN0RCxtQ0FBZTtxREFBQztBQS9CeEMsd0NBZ0NDIn0=