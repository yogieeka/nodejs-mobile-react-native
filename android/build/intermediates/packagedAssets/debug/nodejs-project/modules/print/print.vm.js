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
const order_line_vm_1 = require("../order/line/order-line.vm");
class PrintViaNetworkPayloadVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrintViaNetworkPayloadVM.prototype, "ip", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrintViaNetworkPayloadVM.prototype, "port", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_line_vm_1.OrderLineVM] }),
    __metadata("design:type", Array)
], PrintViaNetworkPayloadVM.prototype, "orderLinesContent", void 0);
exports.PrintViaNetworkPayloadVM = PrintViaNetworkPayloadVM;
class PrintViaNetworkResponseMessageVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ enum: ['success'] }),
    __metadata("design:type", String)
], PrintViaNetworkResponseMessageVM.prototype, "status", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrintViaNetworkResponseMessageVM.prototype, "ip", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrintViaNetworkResponseMessageVM.prototype, "port", void 0);
exports.PrintViaNetworkResponseMessageVM = PrintViaNetworkResponseMessageVM;
class PrintViaNetworkResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: PrintViaNetworkResponseMessageVM }),
    __metadata("design:type", PrintViaNetworkResponseMessageVM)
], PrintViaNetworkResponseVM.prototype, "msg", void 0);
exports.PrintViaNetworkResponseVM = PrintViaNetworkResponseVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9wcmludC9wcmludC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSwrREFBMEQ7QUFFMUQsTUFBYSx3QkFBd0I7Q0FTcEM7QUFQQztJQURDLHlDQUF3QixFQUFFOztvREFDVDtBQUdsQjtJQURDLHlDQUF3QixFQUFFOztzREFDUDtBQUdwQjtJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsMkJBQVcsQ0FBQyxFQUFFLENBQUM7O21FQUNWO0FBUjFDLDREQVNDO0FBRUQsTUFBYSxnQ0FBZ0M7Q0FTNUM7QUFQQztJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzs7Z0VBQ3ZCO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7OzREQUNUO0FBR2xCO0lBREMseUNBQXdCLEVBQUU7OzhEQUNQO0FBUnRCLDRFQVNDO0FBRUQsTUFBYSx5QkFBeUI7Q0FHckM7QUFEQztJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLENBQUM7OEJBQ3pELGdDQUFnQztzREFBQztBQUYvQyw4REFHQyJ9