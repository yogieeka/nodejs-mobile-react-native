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
const nestjs_swagger_1 = require("../../../../external/nestjs-swagger");
const defer_decorator_decorator_1 = require("../../../../shared/decorator/defer-decorator.decorator");
const base_vm_1 = require("../../../../shared/models/base.vm");
const modifier_item_vm_1 = require("../../../product/modifier/item/modifier-item.vm");
const modifier_vm_1 = require("../../../product/modifier/modifier.vm");
const product_vm_1 = require("../../../product/product.vm");
const product_variant_vm_1 = require("../../../product/variant/product-variant.vm");
const order_vm_1 = require("../../order.vm");
const order_line_vm_1 = require("../order-line.vm");
class OrderLineModifierVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierVM.prototype, "modifierId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierVM.prototype, "modifierItemId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierVM.prototype, "orderId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierVM.prototype, "orderLineId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierVM.prototype, "modifierItemProductId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierVM.prototype, "modifierItemProductVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineModifierVM.prototype, "description", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineModifierVM.prototype, "qty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineModifierVM.prototype, "price", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: order_vm_1.OrderVM })]),
    __metadata("design:type", order_vm_1.OrderVM)
], OrderLineModifierVM.prototype, "order", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: order_line_vm_1.OrderLineVM })]),
    __metadata("design:type", order_line_vm_1.OrderLineVM)
], OrderLineModifierVM.prototype, "orderLine", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: modifier_vm_1.ModifierVM }),
    __metadata("design:type", modifier_vm_1.ModifierVM)
], OrderLineModifierVM.prototype, "modifier", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: modifier_item_vm_1.ModifierItemVM }),
    __metadata("design:type", modifier_item_vm_1.ModifierItemVM)
], OrderLineModifierVM.prototype, "modifierItem", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: product_vm_1.ProductVM }),
    __metadata("design:type", product_vm_1.ProductVM)
], OrderLineModifierVM.prototype, "modifierItemProduct", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: product_variant_vm_1.ProductVariantVM }),
    __metadata("design:type", product_variant_vm_1.ProductVariantVM)
], OrderLineModifierVM.prototype, "modifierItemProductVariant", void 0);
exports.OrderLineModifierVM = OrderLineModifierVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItbGluZS1tb2RpZmllci52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL2xpbmUvbW9kaWZpZXIvb3JkZXItbGluZS1tb2RpZmllci52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdFQUErRTtBQUMvRSxzR0FBd0Y7QUFDeEYsK0RBQXlFO0FBQ3pFLHNGQUFpRjtBQUNqRix1RUFBbUU7QUFDbkUsNERBQXdEO0FBQ3hELG9GQUErRTtBQUMvRSw2Q0FBeUM7QUFDekMsb0RBQStDO0FBRS9DLE1BQWEsbUJBQW9CLFNBQVEsOEJBQW9CO0NBaUQ1RDtBQS9DQztJQURDLHlDQUF3QixFQUFFOzsrQ0FDVDtBQUdsQjtJQURDLHlDQUF3QixFQUFFOzt1REFDRDtBQUcxQjtJQURDLHlDQUF3QixFQUFFOzsyREFDRztBQUc5QjtJQURDLHlDQUF3QixFQUFFOztvREFDSjtBQUd2QjtJQURDLHlDQUF3QixFQUFFOzt3REFDQTtBQUczQjtJQURDLHlDQUF3QixFQUFFOztrRUFDVTtBQUdyQztJQURDLHlDQUF3QixFQUFFOzt5RUFDaUI7QUFHNUM7SUFEQyx5Q0FBd0IsRUFBRTs7d0RBQ0E7QUFHM0I7SUFEQyx5Q0FBd0IsRUFBRTs7Z0RBQ1I7QUFHbkI7SUFEQyx5Q0FBd0IsRUFBRTs7a0RBQ047QUFJckI7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs4QkFDdEQsa0JBQU87a0RBQUM7QUFHdEI7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsMkJBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzs4QkFDdEQsMkJBQVc7c0RBQUM7QUFHOUI7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUM7OEJBQzlCLHdCQUFVO3FEQUFDO0FBRzVCO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsaUNBQWMsRUFBRSxDQUFDOzhCQUM5QixpQ0FBYzt5REFBQztBQUdwQztJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFTLEVBQUUsQ0FBQzs4QkFDbEIsc0JBQVM7Z0VBQUM7QUFHdEM7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxxQ0FBZ0IsRUFBRSxDQUFDOzhCQUNsQixxQ0FBZ0I7dUVBQUM7QUFoRHRELGtEQWlEQyJ9