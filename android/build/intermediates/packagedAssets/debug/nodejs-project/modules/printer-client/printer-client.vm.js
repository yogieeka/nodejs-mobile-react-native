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
const printer_area_vm_1 = require("../printer-area/printer-area.vm");
class PrinterClientVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterClientVM.prototype, "id", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: printer_area_vm_1.PrinterAreaVM })]),
    __metadata("design:type", printer_area_vm_1.PrinterAreaVM)
], PrinterClientVM.prototype, "printerArea", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterClientVM.prototype, "printerAreaId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterClientVM.prototype, "deviceId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterClientVM.prototype, "type", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterClientVM.prototype, "ip", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterClientVM.prototype, "port", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterClientVM.prototype, "macAddress", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], PrinterClientVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], PrinterClientVM.prototype, "paperSize", void 0);
exports.PrinterClientVM = PrinterClientVM;
class PrinterClientCreatePayloadVM extends PrinterClientVM {
}
exports.PrinterClientCreatePayloadVM = PrinterClientCreatePayloadVM;
class PrinterClientUpdatePayloadVM extends PrinterClientVM {
}
exports.PrinterClientUpdatePayloadVM = PrinterClientUpdatePayloadVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1jbGllbnQudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9wcmludGVyLWNsaWVudC9wcmludGVyLWNsaWVudC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUF5RTtBQUN6RSxnR0FBa0Y7QUFDbEYseURBQW1FO0FBQ25FLHFFQUFnRTtBQUVoRSxNQUFhLGVBQWdCLFNBQVEsOEJBQW9CO0NBOEJ4RDtBQTVCQztJQURDLHlDQUF3QixFQUFFOzsyQ0FDVDtBQUdsQjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSwrQkFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUN0RCwrQkFBYTtvREFBQztBQUdsQztJQURDLHlDQUF3QixFQUFFOztzREFDRTtBQUc3QjtJQURDLHlDQUF3QixFQUFFOztpREFDSDtBQUd4QjtJQURDLHlDQUF3QixFQUFFOzs2Q0FDUDtBQUdwQjtJQURDLHlDQUF3QixFQUFFOzsyQ0FDVDtBQUdsQjtJQURDLHlDQUF3QixFQUFFOzs2Q0FDUDtBQUdwQjtJQURDLHlDQUF3QixFQUFFOzttREFDRDtBQUcxQjtJQURDLHlDQUF3QixFQUFFOzs2Q0FDUDtBQUdwQjtJQURDLHlDQUF3QixFQUFFOztrREFDRjtBQTdCM0IsMENBOEJDO0FBRUQsTUFBYSw0QkFBOEIsU0FBUSxlQUFlO0NBQUc7QUFBckUsb0VBQXFFO0FBRXJFLE1BQWEsNEJBQTZCLFNBQVEsZUFBZTtDQUFHO0FBQXBFLG9FQUFvRSJ9