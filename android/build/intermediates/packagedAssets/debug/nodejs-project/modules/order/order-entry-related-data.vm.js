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
const tax_vm_1 = require("../tax/tax.vm");
class ProductOrderEntryVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "sku", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "detailDescription", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "uom", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductOrderEntryVM.prototype, "serviceCharged", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "salesTaxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductOrderEntryVM.prototype, "hasVariants", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ProductOrderEntryVM.prototype, "variantCount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "variantAttribute1", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "variantAttribute2", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "variantAttribute3", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "masterVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "pictureUrl", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "pictureLocal", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductOrderEntryVM.prototype, "printerAreaId", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: tax_vm_1.TaxVM })]),
    __metadata("design:type", tax_vm_1.TaxVM)
], ProductOrderEntryVM.prototype, "salesTax", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: printer_area_vm_1.PrinterAreaVM })]),
    __metadata("design:type", printer_area_vm_1.PrinterAreaVM)
], ProductOrderEntryVM.prototype, "printerArea", void 0);
exports.ProductOrderEntryVM = ProductOrderEntryVM;
class ProductVariantOrderEntryVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantOrderEntryVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantOrderEntryVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantOrderEntryVM.prototype, "sku", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantOrderEntryVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantOrderEntryVM.prototype, "variantName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ProductVariantOrderEntryVM.prototype, "unitPrice", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductVariantOrderEntryVM.prototype, "isMaster", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantOrderEntryVM.prototype, "attribute1Value", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantOrderEntryVM.prototype, "attribute2Value", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantOrderEntryVM.prototype, "attribute3Value", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ProductVariantOrderEntryVM.prototype, "sortOrder", void 0);
exports.ProductVariantOrderEntryVM = ProductVariantOrderEntryVM;
class ModifierOrderEntryVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierOrderEntryVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierOrderEntryVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierOrderEntryVM.prototype, "required", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierOrderEntryVM.prototype, "allowMultiple", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ModifierOrderEntryVM.prototype, "maximumAllowed", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [ModifierItemOrderEntryVM] })
    ]),
    __metadata("design:type", Array)
], ModifierOrderEntryVM.prototype, "items", void 0);
exports.ModifierOrderEntryVM = ModifierOrderEntryVM;
class ModifierItemOrderEntryVM extends base_vm_1.BaseEntityResponseVM {
    constructor() {
        super(...arguments);
        this.selected = false;
    }
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemOrderEntryVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemOrderEntryVM.prototype, "modifierId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemOrderEntryVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemOrderEntryVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ModifierItemOrderEntryVM.prototype, "productVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ModifierItemOrderEntryVM.prototype, "price", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ModifierItemOrderEntryVM.prototype, "sortOrder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ModifierItemOrderEntryVM.prototype, "selected", void 0);
exports.ModifierItemOrderEntryVM = ModifierItemOrderEntryVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50cnktcmVsYXRlZC1kYXRhLnZtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvb3JkZXIvb3JkZXItZW50cnktcmVsYXRlZC1kYXRhLnZtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsa0VBQXlFO0FBQ3pFLGdHQUFrRjtBQUNsRix5REFBbUU7QUFDbkUscUVBQWdFO0FBQ2hFLDBDQUFzQztBQUV0QyxNQUFhLG1CQUFvQixTQUFRLDhCQUFvQjtDQXNENUQ7QUFwREM7SUFEQyx5Q0FBd0IsRUFBRTs7K0NBQ1Q7QUFHbEI7SUFEQyx5Q0FBd0IsRUFBRTs7Z0RBQ1I7QUFHbkI7SUFEQyx5Q0FBd0IsRUFBRTs7aURBQ1A7QUFHcEI7SUFEQyx5Q0FBd0IsRUFBRTs7OERBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7Z0RBQ1I7QUFHbkI7SUFEQyx5Q0FBd0IsRUFBRTs7MkRBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7dURBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7d0RBQ0M7QUFHNUI7SUFEQyx5Q0FBd0IsRUFBRTs7eURBQ0M7QUFHNUI7SUFEQyx5Q0FBd0IsRUFBRTs7OERBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7OERBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7OERBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7NERBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7dURBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7eURBQ0M7QUFHNUI7SUFEQyx5Q0FBd0IsRUFBRTs7MERBQ0U7QUFHN0I7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUNqRCxjQUFLO3FEQUFDO0FBR3ZCO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLCtCQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7OEJBQ3RELCtCQUFhO3dEQUFDO0FBckRwQyxrREFzREM7QUFFRCxNQUFhLDBCQUEyQixTQUFRLDhCQUFvQjtDQWlDbkU7QUEvQkM7SUFEQyx5Q0FBd0IsRUFBRTs7c0RBQ1Q7QUFHbEI7SUFEQyx5Q0FBd0IsRUFBRTs7NkRBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7dURBQ1I7QUFHbkI7SUFEQyx5Q0FBd0IsRUFBRTs7d0RBQ1A7QUFHcEI7SUFEQyx5Q0FBd0IsRUFBRTs7K0RBQ0E7QUFHM0I7SUFEQyx5Q0FBd0IsRUFBRTs7NkRBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7NERBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7bUVBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7bUVBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7bUVBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7NkRBQ0Y7QUFoQzNCLGdFQWlDQztBQUVELE1BQWEsb0JBQXFCLFNBQVEsOEJBQW9CO0NBb0I3RDtBQWxCQztJQURDLHlDQUF3QixFQUFFOztnREFDVDtBQUdsQjtJQURDLHlDQUF3QixFQUFFOztrREFDUDtBQUdwQjtJQURDLHlDQUF3QixFQUFFOztzREFDRjtBQUd6QjtJQURDLHlDQUF3QixFQUFFOzsyREFDRztBQUc5QjtJQURDLHlDQUF3QixFQUFFOzs0REFDRztBQUs5QjtJQUhDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEIseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUM7S0FDL0QsQ0FBQzs7bURBQ3VDO0FBbkIzQyxvREFvQkM7QUFFRCxNQUFhLHdCQUF5QixTQUFRLDhCQUFvQjtJQUFsRTs7UUF1QlMsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUNuQyxDQUFDO0NBQUE7QUF0QkM7SUFEQyx5Q0FBd0IsRUFBRTs7b0RBQ1Q7QUFHbEI7SUFEQyx5Q0FBd0IsRUFBRTs7NERBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7c0RBQ1A7QUFHcEI7SUFEQyx5Q0FBd0IsRUFBRTs7MkRBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7a0VBQ0s7QUFHaEM7SUFEQyx5Q0FBd0IsRUFBRTs7dURBQ047QUFHckI7SUFEQyx5Q0FBd0IsRUFBRTs7MkRBQ0Y7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7MERBQ007QUF2Qm5DLDREQXdCQyJ9