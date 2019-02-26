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
const modifier_item_vm_1 = require("./item/modifier-item.vm");
class ModifierVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierVM.prototype, "required", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierVM.prototype, "allowMultiple", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ModifierVM.prototype, "maximumAllowed", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ModifierVM.prototype, "sortOrder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierVM.prototype, "deleted", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [modifier_item_vm_1.ModifierItemVM] })]),
    __metadata("design:type", Array)
], ModifierVM.prototype, "items", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [product_vm_1.ProductVM] })]),
    __metadata("design:type", Array)
], ModifierVM.prototype, "products", void 0);
exports.ModifierVM = ModifierVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXIudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0L21vZGlmaWVyL21vZGlmaWVyLnZtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUVBQTRFO0FBQzVFLG1HQUFxRjtBQUNyRiw0REFBc0U7QUFDdEUsOENBQTBDO0FBQzFDLDhEQUF5RDtBQUV6RCxNQUFhLFVBQVcsU0FBUSw4QkFBb0I7Q0EyQm5EO0FBekJDO0lBREMseUNBQXdCLEVBQUU7O3NDQUNUO0FBR2xCO0lBREMseUNBQXdCLEVBQUU7O3dDQUNQO0FBR3BCO0lBREMseUNBQXdCLEVBQUU7OzRDQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7O2lEQUNHO0FBRzlCO0lBREMseUNBQXdCLEVBQUU7O2tEQUNHO0FBRzlCO0lBREMseUNBQXdCLEVBQUU7OzZDQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7OzJDQUNIO0FBR3hCO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsaUNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzt5Q0FDOUM7QUFHL0I7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OzRDQUMzQztBQTFCL0IsZ0NBMkJDIn0=