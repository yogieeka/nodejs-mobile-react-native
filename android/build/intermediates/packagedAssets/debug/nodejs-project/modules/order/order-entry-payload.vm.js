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
const order_entry_vm_1 = require("./order-entry.vm");
class UpdateOrderEntryCustomerPayloadVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelProperty({ type: order_entry_vm_1.OrderEntryVM })]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], UpdateOrderEntryCustomerPayloadVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UpdateOrderEntryCustomerPayloadVM.prototype, "customerId", void 0);
exports.UpdateOrderEntryCustomerPayloadVM = UpdateOrderEntryCustomerPayloadVM;
class UpdateOrderEntrySalesTypePayloadVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelProperty({ type: order_entry_vm_1.OrderEntryVM })]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], UpdateOrderEntrySalesTypePayloadVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UpdateOrderEntrySalesTypePayloadVM.prototype, "salesTypeId", void 0);
exports.UpdateOrderEntrySalesTypePayloadVM = UpdateOrderEntrySalesTypePayloadVM;
class UpdateOrderEntryTablePayloadVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelProperty({ type: order_entry_vm_1.OrderEntryVM })]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], UpdateOrderEntryTablePayloadVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UpdateOrderEntryTablePayloadVM.prototype, "tableId", void 0);
exports.UpdateOrderEntryTablePayloadVM = UpdateOrderEntryTablePayloadVM;
class NewOrderLinePayloadVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: order_entry_vm_1.OrderEntryVM }),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], NewOrderLinePayloadVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], NewOrderLinePayloadVM.prototype, "productId", void 0);
exports.NewOrderLinePayloadVM = NewOrderLinePayloadVM;
class ExistingOrderLinePayloadVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: order_entry_vm_1.OrderEntryVM }),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], ExistingOrderLinePayloadVM.prototype, "order", void 0);
exports.ExistingOrderLinePayloadVM = ExistingOrderLinePayloadVM;
class UpdateOrderLineEntryLinePayloadVM extends base_vm_1.BaseEntityResponseVM {
    constructor() {
        super(...arguments);
        this.qty = 0;
        this.unitPrice = 0;
        this.customDiscount = false;
        this.discountAmount = 0;
    }
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateOrderLineEntryLinePayloadVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateOrderLineEntryLinePayloadVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateOrderLineEntryLinePayloadVM.prototype, "productVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateOrderLineEntryLinePayloadVM.prototype, "description", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], UpdateOrderLineEntryLinePayloadVM.prototype, "qty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], UpdateOrderLineEntryLinePayloadVM.prototype, "unitPrice", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], UpdateOrderLineEntryLinePayloadVM.prototype, "customDiscount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], UpdateOrderLineEntryLinePayloadVM.prototype, "discountPercent", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], UpdateOrderLineEntryLinePayloadVM.prototype, "discountAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateOrderLineEntryLinePayloadVM.prototype, "notes", void 0);
exports.UpdateOrderLineEntryLinePayloadVM = UpdateOrderLineEntryLinePayloadVM;
class UpdateOrderLineEntryModifierPayloadVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateOrderLineEntryModifierPayloadVM.prototype, "modifierId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UpdateOrderLineEntryModifierPayloadVM.prototype, "modifierItemId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], UpdateOrderLineEntryModifierPayloadVM.prototype, "price", void 0);
exports.UpdateOrderLineEntryModifierPayloadVM = UpdateOrderLineEntryModifierPayloadVM;
class UpdateOrderLineEntryPayloadVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderEntryVM] })
    ]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], UpdateOrderLineEntryPayloadVM.prototype, "order", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [UpdateOrderLineEntryLinePayloadVM] })
    ]),
    __metadata("design:type", UpdateOrderLineEntryLinePayloadVM)
], UpdateOrderLineEntryPayloadVM.prototype, "orderLine", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [UpdateOrderLineEntryModifierPayloadVM] })
    ]),
    __metadata("design:type", Array)
], UpdateOrderLineEntryPayloadVM.prototype, "modifiers", void 0);
exports.UpdateOrderLineEntryPayloadVM = UpdateOrderLineEntryPayloadVM;
class SaveOrderEntryPayloadVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderEntryVM] })
    ]),
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelProperty({ type: order_entry_vm_1.OrderEntryVM })]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], SaveOrderEntryPayloadVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], SaveOrderEntryPayloadVM.prototype, "userId", void 0);
exports.SaveOrderEntryPayloadVM = SaveOrderEntryPayloadVM;
class SaveOrderAndPayEntryPayloadVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderEntryVM] })
    ]),
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelProperty({ type: order_entry_vm_1.OrderEntryVM })]),
    __metadata("design:type", order_entry_vm_1.OrderEntryVM)
], SaveOrderAndPayEntryPayloadVM.prototype, "order", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_entry_vm_1.OrderPaymentEntryVM] })
    ]),
    __metadata("design:type", Array)
], SaveOrderAndPayEntryPayloadVM.prototype, "payments", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], SaveOrderAndPayEntryPayloadVM.prototype, "userId", void 0);
exports.SaveOrderAndPayEntryPayloadVM = SaveOrderAndPayEntryPayloadVM;
class OrderPaymentEntryPayloadVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryPayloadVM.prototype, "paymentMethodId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderPaymentEntryPayloadVM.prototype, "paymentAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryPayloadVM.prototype, "cardNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryPayloadVM.prototype, "cardHolder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderPaymentEntryPayloadVM.prototype, "referenceNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderPaymentEntryPayloadVM.prototype, "isCash", void 0);
exports.OrderPaymentEntryPayloadVM = OrderPaymentEntryPayloadVM;
class CancelOrderEntryPayloadVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CancelOrderEntryPayloadVM.prototype, "reason", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CancelOrderEntryPayloadVM.prototype, "userId", void 0);
exports.CancelOrderEntryPayloadVM = CancelOrderEntryPayloadVM;
class MergeOrderEntryPayloadVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], MergeOrderEntryPayloadVM.prototype, "targetOrderId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], MergeOrderEntryPayloadVM.prototype, "userId", void 0);
exports.MergeOrderEntryPayloadVM = MergeOrderEntryPayloadVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50cnktcGF5bG9hZC52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL29yZGVyLWVudHJ5LXBheWxvYWQudm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrRUFBMkY7QUFDM0YsZ0dBQWtGO0FBQ2xGLHlEQUFtRTtBQUNuRSxxREFBcUU7QUFFckUsTUFBYSxpQ0FBaUM7Q0FPN0M7QUFKQztJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxpQ0FBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSw2QkFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUNuRCw2QkFBWTtnRUFBQztBQUczQjtJQURDLGlDQUFnQixFQUFFOztxRUFDTztBQU41Qiw4RUFPQztBQUVELE1BQWEsa0NBQWtDO0NBTzlDO0FBSkM7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsaUNBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsNkJBQVksRUFBRSxDQUFDLENBQUMsQ0FBQzs4QkFDbkQsNkJBQVk7aUVBQUM7QUFHM0I7SUFEQyxpQ0FBZ0IsRUFBRTs7dUVBQ1E7QUFON0IsZ0ZBT0M7QUFFRCxNQUFhLDhCQUE4QjtDQU8xQztBQUpDO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGlDQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLDZCQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7OEJBQ25ELDZCQUFZOzZEQUFDO0FBRzNCO0lBREMsaUNBQWdCLEVBQUU7OytEQUNJO0FBTnpCLHdFQU9DO0FBRUQsTUFBYSxxQkFBc0IsU0FBUSw4QkFBb0I7Q0FPOUQ7QUFKQztJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLDZCQUFZLEVBQUUsQ0FBQzs4QkFDbkMsNkJBQVk7b0RBQUM7QUFHM0I7SUFEQyx5Q0FBd0IsRUFBRTs7d0RBQ0Y7QUFOM0Isc0RBT0M7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