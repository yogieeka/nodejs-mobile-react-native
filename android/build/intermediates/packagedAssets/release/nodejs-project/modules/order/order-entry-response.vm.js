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
const payment_method_vm_1 = require("../payment-method/payment-method.vm");
const sales_type_vm_1 = require("../sales-type/sales-type.vm");
const order_entry_related_data_vm_1 = require("./order-entry-related-data.vm");
const order_entry_vm_1 = require("./order-entry.vm");
class OrderEntryWithRelatedDataResponseVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderEntryVM] })]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], OrderEntryWithRelatedDataResponseVM.prototype, "order", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [sales_type_vm_1.SalesTypeVM] })]),
    __metadata("design:type", Array)
], OrderEntryWithRelatedDataResponseVM.prototype, "salesTypes", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [payment_method_vm_1.PaymentMethodVM] })]),
    __metadata("design:type", Array)
], OrderEntryWithRelatedDataResponseVM.prototype, "paymentMethods", void 0);
exports.OrderEntryWithRelatedDataResponseVM = OrderEntryWithRelatedDataResponseVM;
class OrderLineEntryRelatedDataResponseVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_related_data_vm_1.ProductOrderEntryVM] })
    ]),
    __metadata("design:type", order_entry_related_data_vm_1.ProductOrderEntryVM)
], OrderLineEntryRelatedDataResponseVM.prototype, "product", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_related_data_vm_1.ProductVariantOrderEntryVM] })
    ]),
    __metadata("design:type", Array)
], OrderLineEntryRelatedDataResponseVM.prototype, "productVariants", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_related_data_vm_1.ModifierOrderEntryVM] })
    ]),
    __metadata("design:type", Array)
], OrderLineEntryRelatedDataResponseVM.prototype, "modifiers", void 0);
exports.OrderLineEntryRelatedDataResponseVM = OrderLineEntryRelatedDataResponseVM;
class OrderLineEntryWithRelatedDataResponseVM extends OrderLineEntryRelatedDataResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderLineEntryVM] })
    ]),
    __metadata("design:type", order_entry_vm_1.OrderLineEntryVM)
], OrderLineEntryWithRelatedDataResponseVM.prototype, "orderLine", void 0);
exports.OrderLineEntryWithRelatedDataResponseVM = OrderLineEntryWithRelatedDataResponseVM;
class SaveOrderEntryResponseVM extends OrderLineEntryRelatedDataResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderEntryVM] })]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], SaveOrderEntryResponseVM.prototype, "order", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderLineEntryVM] })]),
    __metadata("design:type", Array)
], SaveOrderEntryResponseVM.prototype, "changedLines", void 0);
exports.SaveOrderEntryResponseVM = SaveOrderEntryResponseVM;
class PayOrderEntryResponseVM extends OrderLineEntryRelatedDataResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderEntryVM] })]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], PayOrderEntryResponseVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], PayOrderEntryResponseVM.prototype, "orderTotal", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], PayOrderEntryResponseVM.prototype, "tenderAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], PayOrderEntryResponseVM.prototype, "changeAmount", void 0);
exports.PayOrderEntryResponseVM = PayOrderEntryResponseVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50cnktcmVzcG9uc2Uudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vcmRlci9vcmRlci1lbnRyeS1yZXNwb25zZS52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSxnR0FBa0Y7QUFDbEYseURBQW1FO0FBQ25FLDJFQUFzRTtBQUN0RSwrREFBMEQ7QUFDMUQsK0VBQXNIO0FBQ3RILHFEQUFrRTtBQUVsRSxNQUFhLG1DQUFvQyxTQUFRLDhCQUFvQjtDQVM1RTtBQVBDO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsNkJBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUM3RCw2QkFBWTtrRUFBQztBQUczQjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLDJCQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7dUVBQ3pDO0FBR2pDO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsbUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzsyRUFDckM7QUFSM0Msa0ZBU0M7QUFFRCxNQUFhLG1DQUFvQyxTQUFRLDhCQUFvQjtDQWU1RTtBQVhDO0lBSEMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQix5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGlEQUFtQixDQUFDLEVBQUUsQ0FBQztLQUMxRCxDQUFDOzhCQUNjLGlEQUFtQjtvRUFBQztBQUtwQztJQUhDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEIseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyx3REFBMEIsQ0FBQyxFQUFFLENBQUM7S0FDakUsQ0FBQzs7NEVBQ21EO0FBS3JEO0lBSEMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQix5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGtEQUFvQixDQUFDLEVBQUUsQ0FBQztLQUMzRCxDQUFDOztzRUFDdUM7QUFkM0Msa0ZBZUM7QUFFRCxNQUFhLHVDQUF3QyxTQUFRLG1DQUFtQztDQUsvRjtBQURDO0lBSEMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQix5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGlDQUFnQixDQUFDLEVBQUUsQ0FBQztLQUN2RCxDQUFDOzhCQUNnQixpQ0FBZ0I7MEVBQUM7QUFKckMsMEZBS0M7QUFFRCxNQUFhLHdCQUF5QixTQUFRLG1DQUFtQztDQU1oRjtBQUpDO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsNkJBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUM3RCw2QkFBWTt1REFBQztBQUczQjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGlDQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OzhEQUN2QztBQUwxQyw0REFNQztBQUVELE1BQWEsdUJBQXdCLFNBQVEsbUNBQW1DO0NBWS9FO0FBVkM7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyw2QkFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OEJBQzdELDZCQUFZO3NEQUFDO0FBRzNCO0lBREMseUNBQXdCLEVBQUU7OzJEQUNEO0FBRzFCO0lBREMseUNBQXdCLEVBQUU7OzZEQUNDO0FBRzVCO0lBREMseUNBQXdCLEVBQUU7OzZEQUNDO0FBWDlCLDBEQVlDIn0=