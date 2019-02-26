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
class OutletVM extends base_vm_1.BaseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OutletVM.prototype, "companyId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OutletVM.prototype, "companyName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OutletVM.prototype, "outletId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OutletVM.prototype, "outletName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OutletVM.prototype, "lastSyncTime", void 0);
exports.OutletVM = OutletVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnZtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvb3V0bGV0L291dGxldC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSx5REFBcUQ7QUFFckQsTUFBYSxRQUFTLFNBQVEsZ0JBQU07Q0FnQm5DO0FBZEM7SUFEQyx5Q0FBd0IsRUFBRTs7MkNBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7NkNBQ0E7QUFHM0I7SUFEQyx5Q0FBd0IsRUFBRTs7MENBQ0g7QUFHeEI7SUFEQyx5Q0FBd0IsRUFBRTs7NENBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7OENBQ0M7QUFkOUIsNEJBZ0JDIn0=