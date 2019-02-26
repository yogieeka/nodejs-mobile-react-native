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
const category_vm_1 = require("./category.vm");
class ProductCategoryRelationVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductCategoryRelationVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductCategoryRelationVM.prototype, "categoryId", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: product_vm_1.ProductVM })]),
    __metadata("design:type", product_vm_1.ProductVM)
], ProductCategoryRelationVM.prototype, "product", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: category_vm_1.CategoryVM })]),
    __metadata("design:type", category_vm_1.CategoryVM)
], ProductCategoryRelationVM.prototype, "category", void 0);
exports.ProductCategoryRelationVM = ProductCategoryRelationVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXRlZ29yeS1yZWxhdGlvbi52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3QvY2F0ZWdvcnkvcHJvZHVjdC1jYXRlZ29yeS1yZWxhdGlvbi52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFFQUE0RTtBQUM1RSxtR0FBcUY7QUFDckYsNERBQXNFO0FBQ3RFLDhDQUEwQztBQUMxQywrQ0FBMkM7QUFFM0MsTUFBYSx5QkFBMEIsU0FBUSw4QkFBb0I7Q0FZbEU7QUFWQztJQURDLHlDQUF3QixFQUFFOzs0REFDRjtBQUd6QjtJQURDLHlDQUF3QixFQUFFOzs2REFDRDtBQUcxQjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxzQkFBUyxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUN0RCxzQkFBUzswREFBQztBQUcxQjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUN0RCx3QkFBVTsyREFBQztBQVg5Qiw4REFZQyJ9