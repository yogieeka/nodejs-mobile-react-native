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
class OutletSettingVM extends base_vm_1.BaseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OutletSettingVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OutletSettingVM.prototype, "lastLoginUseId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OutletSettingVM.prototype, "lastOrderNumberCount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OutletSettingVM.prototype, "lastOrderNumberDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], OutletSettingVM.prototype, "lastSyncTime", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OutletSettingVM.prototype, "serviceCharged", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OutletSettingVM.prototype, "serviceChargeRate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OutletSettingVM.prototype, "serviceChargeTaxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OutletSettingVM.prototype, "serviceChargeTaxRate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OutletSettingVM.prototype, "taxed", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OutletSettingVM.prototype, "taxInclusive", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OutletSettingVM.prototype, "taxOnSales", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], OutletSettingVM.prototype, "updatedAt", void 0);
exports.OutletSettingVM = OutletSettingVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXNldHRpbmcudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vdXRsZXQtc2V0dGluZy9vdXRsZXQtc2V0dGluZy52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSx5REFBcUQ7QUFFckQsTUFBYSxlQUFnQixTQUFRLGdCQUFNO0NBd0MxQztBQXRDQztJQURDLHlDQUF3QixFQUFFOzsyQ0FDVDtBQUdsQjtJQURDLHlDQUF3QixFQUFFOzt1REFDRztBQUc5QjtJQURDLHlDQUF3QixFQUFFOzs2REFDUztBQUdwQztJQURDLHlDQUF3QixFQUFFOzs0REFDUTtBQUduQztJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7OEJBQzdDLElBQUk7cURBQUM7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7dURBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7MERBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7MkRBQ087QUFHbEM7SUFEQyx5Q0FBd0IsRUFBRTs7NkRBQ1M7QUFHcEM7SUFEQyx5Q0FBd0IsRUFBRTs7OENBQ0w7QUFHdEI7SUFEQyx5Q0FBd0IsRUFBRTs7cURBQ0U7QUFHN0I7SUFEQyx5Q0FBd0IsRUFBRTs7bURBQ0E7QUFHM0I7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDOzhCQUNoRCxJQUFJO2tEQUFDO0FBdEN6QiwwQ0F3Q0MifQ==