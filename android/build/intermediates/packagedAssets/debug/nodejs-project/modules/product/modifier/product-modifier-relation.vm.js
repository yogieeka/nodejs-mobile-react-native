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
const product_vm_1 = require("../product.vm");
const modifier_vm_1 = require("./modifier.vm");
class ProductModifierRelationVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductModifierRelationVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductModifierRelationVM.prototype, "modifierId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ProductModifierRelationVM.prototype, "sortOrder", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [product_vm_1.ProductVM] })]),
    __metadata("design:type", product_vm_1.ProductVM)
], ProductModifierRelationVM.prototype, "product", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [modifier_vm_1.ModifierVM] })]),
    __metadata("design:type", modifier_vm_1.ModifierVM)
], ProductModifierRelationVM.prototype, "modifier", void 0);
exports.ProductModifierRelationVM = ProductModifierRelationVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1tb2RpZmllci1yZWxhdGlvbi52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3QvbW9kaWZpZXIvcHJvZHVjdC1tb2RpZmllci1yZWxhdGlvbi52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFFQUE0RTtBQUM1RSxtR0FBcUY7QUFDckYsNERBQXNFO0FBQ3RFLDhDQUEwQztBQUMxQywrQ0FBMkM7QUFFM0MsTUFBYSx5QkFBMEIsU0FBUSw4QkFBb0I7Q0FnQmxFO0FBYkM7SUFEQyx5Q0FBd0IsRUFBRTs7NERBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7NkRBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7NERBQ0Y7QUFHekI7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OEJBQ3hELHNCQUFTOzBEQUFDO0FBRzFCO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsd0JBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUN4RCx3QkFBVTsyREFBQztBQWY5Qiw4REFnQkMifQ==