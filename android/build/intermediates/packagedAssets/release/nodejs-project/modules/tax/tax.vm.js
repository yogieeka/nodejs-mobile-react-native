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
const product_vm_1 = require("../product/product.vm");
class TaxVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], TaxVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], TaxVM.prototype, "code", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], TaxVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], TaxVM.prototype, "rate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], TaxVM.prototype, "deleted", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [product_vm_1.ProductVM] })]),
    __metadata("design:type", Array)
], TaxVM.prototype, "products", void 0);
exports.TaxVM = TaxVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGF4LnZtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdGF4L3RheC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSxnR0FBa0Y7QUFDbEYseURBQW1FO0FBQ25FLHNEQUFrRDtBQUVsRCxNQUFhLEtBQU0sU0FBUSw4QkFBb0I7Q0FrQjlDO0FBaEJDO0lBREMseUNBQXdCLEVBQUU7O2lDQUNUO0FBR2xCO0lBREMseUNBQXdCLEVBQUU7O21DQUNQO0FBR3BCO0lBREMseUNBQXdCLEVBQUU7O21DQUNQO0FBR3BCO0lBREMseUNBQXdCLEVBQUU7O21DQUNQO0FBR3BCO0lBREMseUNBQXdCLEVBQUU7O3NDQUNIO0FBR3hCO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsc0JBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzt1Q0FDM0M7QUFqQi9CLHNCQWtCQyJ9