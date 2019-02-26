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
const order_vm_1 = require("../order.vm");
class OrderTaxVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: order_vm_1.OrderVM })]),
    __metadata("design:type", order_vm_1.OrderVM)
], OrderTaxVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderTaxVM.prototype, "orderId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderTaxVM.prototype, "taxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderTaxVM.prototype, "taxRate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderTaxVM.prototype, "baseAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderTaxVM.prototype, "taxAmount", void 0);
exports.OrderTaxVM = OrderTaxVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItdGF4LnZtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvb3JkZXIvb3JkZXItdGF4L29yZGVyLXRheC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFFQUE0RTtBQUM1RSxtR0FBcUY7QUFDckYsNERBQXNFO0FBQ3RFLDBDQUFzQztBQUV0QyxNQUFhLFVBQVcsU0FBUSw4QkFBb0I7Q0FtQm5EO0FBaEJDO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7OEJBQ3RELGtCQUFPO3lDQUFDO0FBR3RCO0lBREMseUNBQXdCLEVBQUU7OzJDQUNKO0FBR3ZCO0lBREMseUNBQXdCLEVBQUU7O3lDQUNOO0FBR3JCO0lBREMseUNBQXdCLEVBQUU7OzJDQUNKO0FBR3ZCO0lBREMseUNBQXdCLEVBQUU7OzhDQUNEO0FBRzFCO0lBREMseUNBQXdCLEVBQUU7OzZDQUNGO0FBbEIzQixnQ0FtQkMifQ==