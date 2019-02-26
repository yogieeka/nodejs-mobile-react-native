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
const product_pricelist_vm_1 = require("../../pricelist/product-pricelist.vm");
const product_vm_1 = require("../../product.vm");
const product_variant_vm_1 = require("../../variant/product-variant.vm");
const modifier_vm_1 = require("../modifier.vm");
class ModifierItemVM extends base_vm_1.BaseEntityResponseVM {
    constructor() {
        super(...arguments);
        this.selected = false;
    }
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemVM.prototype, "modifierId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemVM.prototype, "productVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierItemVM.prototype, "useCustomPrice", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ModifierItemVM.prototype, "price", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierItemVM.prototype, "deleted", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: modifier_vm_1.ModifierVM })]),
    __metadata("design:type", modifier_vm_1.ModifierVM)
], ModifierItemVM.prototype, "modifier", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: product_vm_1.ProductVM })]),
    __metadata("design:type", product_vm_1.ProductVM)
], ModifierItemVM.prototype, "product", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: product_variant_vm_1.ProductVariantVM }),
    __metadata("design:type", product_variant_vm_1.ProductVariantVM)
], ModifierItemVM.prototype, "productVariant", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: product_pricelist_vm_1.ProductPricelistVM }),
    __metadata("design:type", Array)
], ModifierItemVM.prototype, "prices", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierItemVM.prototype, "selected", void 0);
exports.ModifierItemVM = ModifierItemVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXItaXRlbS52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3QvbW9kaWZpZXIvaXRlbS9tb2RpZmllci1pdGVtLnZtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0VBQStFO0FBQy9FLHNHQUF3RjtBQUN4RiwrREFBeUU7QUFDekUsK0VBQTBFO0FBQzFFLGlEQUE2QztBQUM3Qyx5RUFBb0U7QUFDcEUsZ0RBQTRDO0FBRTVDLE1BQWEsY0FBZSxTQUFRLDhCQUFvQjtJQUF4RDs7UUF3Q1MsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUNuQyxDQUFDO0NBQUE7QUF2Q0M7SUFEQyx5Q0FBd0IsRUFBRTs7MENBQ1Q7QUFHbEI7SUFEQyx5Q0FBd0IsRUFBRTs7a0RBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7NENBQ1A7QUFHcEI7SUFEQyx5Q0FBd0IsRUFBRTs7aURBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7d0RBQ0s7QUFHaEM7SUFEQyx5Q0FBd0IsRUFBRTs7c0RBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7NkNBQ047QUFHckI7SUFEQyx5Q0FBd0IsRUFBRTs7K0NBQ0g7QUFJeEI7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzs4QkFDdEQsd0JBQVU7Z0RBQUM7QUFHNUI7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzs4QkFDdEQsc0JBQVM7K0NBQUM7QUFHMUI7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxxQ0FBZ0IsRUFBRSxDQUFDOzhCQUM5QixxQ0FBZ0I7c0RBQUM7QUFJeEM7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSx5Q0FBa0IsRUFBRSxDQUFDOzs4Q0FDbkI7QUFHcEM7SUFEQyx5Q0FBd0IsRUFBRTs7Z0RBQ007QUF4Q25DLHdDQXlDQyJ9