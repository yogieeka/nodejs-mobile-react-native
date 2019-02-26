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
const printer_client_vm_1 = require("../printer-client/printer-client.vm");
const product_vm_1 = require("../product/product.vm");
class PrinterAreaVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterAreaVM.prototype, "id", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [product_vm_1.ProductVM] })]),
    __metadata("design:type", Array)
], PrinterAreaVM.prototype, "products", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [printer_client_vm_1.PrinterClientVM] })]),
    __metadata("design:type", Array)
], PrinterAreaVM.prototype, "printerClients", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterAreaVM.prototype, "name", void 0);
exports.PrinterAreaVM = PrinterAreaVM;
class PrinterAreaByDeviceIDVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterAreaByDeviceIDVM.prototype, "id", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [product_vm_1.ProductVM] })]),
    __metadata("design:type", Array)
], PrinterAreaByDeviceIDVM.prototype, "products", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: printer_client_vm_1.PrinterClientVM })]),
    __metadata("design:type", printer_client_vm_1.PrinterClientVM)
], PrinterAreaByDeviceIDVM.prototype, "printerClient", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterAreaByDeviceIDVM.prototype, "name", void 0);
exports.PrinterAreaByDeviceIDVM = PrinterAreaByDeviceIDVM;
class PrinterAreaUpdatePayloadVM {
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [product_vm_1.ProductVM] })]),
    __metadata("design:type", Array)
], PrinterAreaUpdatePayloadVM.prototype, "products", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [printer_client_vm_1.PrinterClientVM] })]),
    __metadata("design:type", Array)
], PrinterAreaUpdatePayloadVM.prototype, "printerClients", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterAreaUpdatePayloadVM.prototype, "name", void 0);
exports.PrinterAreaUpdatePayloadVM = PrinterAreaUpdatePayloadVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1hcmVhLnZtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJpbnRlci1hcmVhL3ByaW50ZXItYXJlYS52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSxnR0FBa0Y7QUFDbEYseURBQW1FO0FBQ25FLDJFQUFzRTtBQUN0RSxzREFBa0Q7QUFFbEQsTUFBYSxhQUFjLFNBQVEsOEJBQW9CO0NBWXREO0FBVkM7SUFEQyx5Q0FBd0IsRUFBRTs7eUNBQ1Q7QUFHbEI7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OytDQUMzQztBQUc3QjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLG1DQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7cURBQ3JDO0FBR3pDO0lBREMseUNBQXdCLEVBQUU7OzJDQUNQO0FBWHRCLHNDQVlDO0FBRUQsTUFBYSx1QkFBd0IsU0FBUSw4QkFBb0I7Q0FZaEU7QUFWQztJQURDLHlDQUF3QixFQUFFOzttREFDVDtBQUdsQjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7eURBQzNDO0FBRzdCO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLG1DQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7OEJBQ3RELG1DQUFlOzhEQUFDO0FBR3RDO0lBREMseUNBQXdCLEVBQUU7O3FEQUNQO0FBWHRCLDBEQVlDO0FBRUQsTUFBYSwwQkFBMEI7Q0FTdEM7QUFQQztJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7NERBQzNDO0FBRzdCO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsbUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztrRUFDckM7QUFHekM7SUFEQyx5Q0FBd0IsRUFBRTs7d0RBQ1A7QUFSdEIsZ0VBU0MifQ==