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
class PaymentMethodVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PaymentMethodVM.prototype, "paymentMethodId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PaymentMethodVM.prototype, "paymentMethodType", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PaymentMethodVM.prototype, "paymentMethodName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PaymentMethodVM.prototype, "paymentAccountId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], PaymentMethodVM.prototype, "isDefaultCash", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], PaymentMethodVM.prototype, "sortOrder", void 0);
exports.PaymentMethodVM = PaymentMethodVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2Qudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSx5REFBbUU7QUFFbkUsTUFBYSxlQUFnQixTQUFRLDhCQUFvQjtDQW1CeEQ7QUFoQkM7SUFEQyx5Q0FBd0IsRUFBRTs7d0RBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7MERBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7MERBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7eURBQ0s7QUFHaEM7SUFEQyx5Q0FBd0IsRUFBRTs7c0RBQ0c7QUFHOUI7SUFEQyx5Q0FBd0IsRUFBRTs7a0RBQ0Y7QUFsQjNCLDBDQW1CQyJ9