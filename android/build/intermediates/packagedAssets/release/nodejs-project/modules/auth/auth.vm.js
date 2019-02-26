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
const class_validator_1 = require("class-validator");
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
class AuthRegisterPayloadVM {
}
__decorate([
    class_validator_1.IsString(),
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AuthRegisterPayloadVM.prototype, "authKey", void 0);
exports.AuthRegisterPayloadVM = AuthRegisterPayloadVM;
class AuthLoginPayloadVM {
}
__decorate([
    class_validator_1.IsString(),
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AuthLoginPayloadVM.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AuthLoginPayloadVM.prototype, "pinNumber", void 0);
exports.AuthLoginPayloadVM = AuthLoginPayloadVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUEyQztBQUMzQyxrRUFBaUU7QUFFakUsTUFBYSxxQkFBcUI7Q0FJakM7QUFEQztJQUZDLDBCQUFRLEVBQUU7SUFDVixpQ0FBZ0IsRUFBRTs7c0RBQ0k7QUFIekIsc0RBSUM7QUFFRCxNQUFhLGtCQUFrQjtDQVE5QjtBQUxDO0lBRkMsMEJBQVEsRUFBRTtJQUNWLGlDQUFnQixFQUFFOztrREFDRztBQUl0QjtJQUZDLDBCQUFRLEVBQUU7SUFDVixpQ0FBZ0IsRUFBRTs7cURBQ007QUFQM0IsZ0RBUUMifQ==