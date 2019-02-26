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
const area_vm_1 = require("../area/area.vm");
const order_vm_1 = require("../order/order.vm");
class TableVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], TableVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], TableVM.prototype, "areaId", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: area_vm_1.AreaVM })]),
    __metadata("design:type", area_vm_1.AreaVM)
], TableVM.prototype, "area", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_vm_1.OrderVM] })]),
    __metadata("design:type", Array)
], TableVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], TableVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], TableVM.prototype, "inUsed", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], TableVM.prototype, "deleted", void 0);
exports.TableVM = TableVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy90YWJsZS90YWJsZS52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSxnR0FBa0Y7QUFDbEYseURBQW1FO0FBQ25FLDZDQUF5QztBQUN6QyxnREFBNEM7QUFFNUMsTUFBYSxPQUFRLFNBQVEsOEJBQW9CO0NBcUJoRDtBQW5CQztJQURDLHlDQUF3QixFQUFFOzttQ0FDVDtBQUdsQjtJQURDLHlDQUF3QixFQUFFOzt1Q0FDTDtBQUd0QjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUN0RCxnQkFBTTtxQ0FBQztBQUdwQjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGtCQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7c0NBQzlDO0FBR3hCO0lBREMseUNBQXdCLEVBQUU7O3FDQUNQO0FBR3BCO0lBREMseUNBQXdCLEVBQUU7O3VDQUNKO0FBR3ZCO0lBREMseUNBQXdCLEVBQUU7O3dDQUNIO0FBcEIxQiwwQkFxQkMifQ==