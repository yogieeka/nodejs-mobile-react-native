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
const nestjs_swagger_1 = require("../../../external/nestjs-swagger");
const defer_decorator_decorator_1 = require("../../../shared/decorator/defer-decorator.decorator");
const base_vm_1 = require("../../../shared/models/base.vm");
const order_vm_1 = require("../order.vm");
class SplitOrderVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: order_vm_1.OrderVM })]),
    __metadata("design:type", order_vm_1.OrderVM)
], SplitOrderVM.prototype, "order", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_vm_1.OrderVM] })]),
    __metadata("design:type", Array)
], SplitOrderVM.prototype, "splitOrders", void 0);
exports.SplitOrderVM = SplitOrderVM;
class SplitOrderMoveLineVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: order_vm_1.OrderVM }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", order_vm_1.OrderVM)
], SplitOrderMoveLineVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_vm_1.OrderVM] }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], SplitOrderMoveLineVM.prototype, "splitOrders", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SplitOrderMoveLineVM.prototype, "lineId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], SplitOrderMoveLineVM.prototype, "splitOrderIndex", void 0);
exports.SplitOrderMoveLineVM = SplitOrderMoveLineVM;
class SplitOrderDeleteLineVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: order_vm_1.OrderVM }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", order_vm_1.OrderVM)
], SplitOrderDeleteLineVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_vm_1.OrderVM] }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], SplitOrderDeleteLineVM.prototype, "splitOrders", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], SplitOrderDeleteLineVM.prototype, "splitOrderIndex", void 0);
exports.SplitOrderDeleteLineVM = SplitOrderDeleteLineVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtb3JkZXIudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9vcmRlci9zcGxpdC9zcGxpdC1vcmRlci52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUE2QztBQUM3QyxxRUFBNEU7QUFDNUUsbUdBQXFGO0FBQ3JGLDREQUFzRTtBQUN0RSwwQ0FBc0M7QUFFdEMsTUFBYSxZQUFhLFNBQVEsOEJBQW9CO0NBT3JEO0FBSkM7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs4QkFDdEQsa0JBQU87MkNBQUM7QUFHdEI7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2lEQUN4QztBQU5oQyxvQ0FPQztBQUVELE1BQWEsb0JBQW9CO0NBZ0JoQztBQWJDO0lBRkMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQU8sRUFBRSxDQUFDO0lBQzNDLDRCQUFVLEVBQUU7OEJBQ0Msa0JBQU87bURBQUM7QUFJdEI7SUFGQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGtCQUFPLENBQUMsRUFBRSxDQUFDO0lBQzdDLDRCQUFVLEVBQUU7O3lEQUNpQjtBQUk5QjtJQUZDLHlDQUF3QixFQUFFO0lBQzFCLDRCQUFVLEVBQUU7O29EQUNTO0FBSXRCO0lBRkMseUNBQXdCLEVBQUU7SUFDMUIsNEJBQVUsRUFBRTs7NkRBQ2tCO0FBZmpDLG9EQWdCQztBQUVELE1BQWEsc0JBQXNCO0NBWWxDO0FBVEM7SUFGQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBTyxFQUFFLENBQUM7SUFDM0MsNEJBQVUsRUFBRTs4QkFDQyxrQkFBTztxREFBQztBQUl0QjtJQUZDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQU8sQ0FBQyxFQUFFLENBQUM7SUFDN0MsNEJBQVUsRUFBRTs7MkRBQ2lCO0FBSTlCO0lBRkMseUNBQXdCLEVBQUU7SUFDMUIsNEJBQVUsRUFBRTs7K0RBQ2tCO0FBWGpDLHdEQVlDIn0=