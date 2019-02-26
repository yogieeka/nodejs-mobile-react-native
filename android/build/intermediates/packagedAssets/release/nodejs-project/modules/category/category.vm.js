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
const base_vm_1 = require("../../shared/models/base.vm");
class CategoryVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CategoryVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CategoryVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], CategoryVM.prototype, "sortOrder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], CategoryVM.prototype, "deleted", void 0);
exports.CategoryVM = CategoryVM;
class CategoryWithProductCountVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CategoryWithProductCountVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CategoryWithProductCountVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], CategoryWithProductCountVM.prototype, "productCount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], CategoryWithProductCountVM.prototype, "sortOrder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], CategoryWithProductCountVM.prototype, "deleted", void 0);
exports.CategoryWithProductCountVM = CategoryWithProductCountVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9jYXRlZ29yeS9jYXRlZ29yeS52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSx5REFBbUU7QUFFbkUsTUFBYSxVQUFXLFNBQVEsOEJBQW9CO0NBWW5EO0FBVkM7SUFEQyx5Q0FBd0IsRUFBRTs7c0NBQ1Q7QUFHbEI7SUFEQyx5Q0FBd0IsRUFBRTs7d0NBQ1A7QUFHcEI7SUFEQyx5Q0FBd0IsRUFBRTs7NkNBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7MkNBQ0g7QUFYMUIsZ0NBWUM7QUFFRCxNQUFhLDBCQUEyQixTQUFRLDhCQUFvQjtDQWVuRTtBQWJDO0lBREMseUNBQXdCLEVBQUU7O3NEQUNUO0FBR2xCO0lBREMseUNBQXdCLEVBQUU7O3dEQUNQO0FBR3BCO0lBREMseUNBQXdCLEVBQUU7O2dFQUNDO0FBRzVCO0lBREMseUNBQXdCLEVBQUU7OzZEQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7OzJEQUNIO0FBZDFCLGdFQWVDIn0=