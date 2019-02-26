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
// import { UnresolvedDefinition } from '../../shared/models/common';
const printer_area_vm_1 = require("../printer-area/printer-area.vm");
const tax_vm_1 = require("../tax/tax.vm");
const category_vm_1 = require("./category/category.vm");
const modifier_vm_1 = require("./modifier/modifier.vm");
const product_variant_vm_1 = require("./variant/product-variant.vm");
class ProductVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "sku", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "detailDescription", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "uom", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductVM.prototype, "serviceCharged", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "salesTaxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductVM.prototype, "hasVariants", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ProductVM.prototype, "variantCount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "variantAttribute1", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "variantAttribute2", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "variantAttribute3", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "masterVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "pictureUrl", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "pictureLocal", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVM.prototype, "printerAreaId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductVM.prototype, "deleted", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: tax_vm_1.TaxVM })]),
    __metadata("design:type", tax_vm_1.TaxVM)
], ProductVM.prototype, "salesTax", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [category_vm_1.CategoryVM] })]),
    __metadata("design:type", Array)
], ProductVM.prototype, "categories", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [modifier_vm_1.ModifierVM] })]),
    __metadata("design:type", Array)
], ProductVM.prototype, "modifiers", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: [product_variant_vm_1.ProductVariantVM] })]),
    __metadata("design:type", Array)
], ProductVM.prototype, "productVariants", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: printer_area_vm_1.PrinterAreaVM })]),
    __metadata("design:type", printer_area_vm_1.PrinterAreaVM)
], ProductVM.prototype, "printerArea", void 0);
exports.ProductVM = ProductVM;
class ProductUpdatePrinterAreaPayloadVM {
}
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ProductUpdatePrinterAreaPayloadVM.prototype, "printerAreaId", void 0);
exports.ProductUpdatePrinterAreaPayloadVM = ProductUpdatePrinterAreaPayloadVM;
class ProductFilterByCategoryIdPayloadVM {
}
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], ProductFilterByCategoryIdPayloadVM.prototype, "categories", void 0);
exports.ProductFilterByCategoryIdPayloadVM = ProductFilterByCategoryIdPayloadVM;
class ProductSearchVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductSearchVM.prototype, "query", void 0);
exports.ProductSearchVM = ProductSearchVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3QvcHJvZHVjdC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUEyRjtBQUMzRixnR0FBa0Y7QUFDbEYseURBQW1FO0FBQ25FLHFFQUFxRTtBQUNyRSxxRUFBZ0U7QUFDaEUsMENBQXNDO0FBQ3RDLHdEQUFvRDtBQUNwRCx3REFBb0Q7QUFDcEQscUVBQWdFO0FBRWhFLE1BQWEsU0FBVSxTQUFRLDhCQUFvQjtDQWtFbEQ7QUFoRUM7SUFEQyx5Q0FBd0IsRUFBRTs7cUNBQ1Q7QUFHbEI7SUFEQyx5Q0FBd0IsRUFBRTs7c0NBQ1I7QUFHbkI7SUFEQyx5Q0FBd0IsRUFBRTs7dUNBQ1A7QUFHcEI7SUFEQyx5Q0FBd0IsRUFBRTs7b0RBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7c0NBQ1I7QUFHbkI7SUFEQyx5Q0FBd0IsRUFBRTs7aURBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7NkNBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7OENBQ0M7QUFHNUI7SUFEQyx5Q0FBd0IsRUFBRTs7K0NBQ0M7QUFHNUI7SUFEQyx5Q0FBd0IsRUFBRTs7b0RBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7b0RBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7b0RBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7a0RBQ0k7QUFHL0I7SUFEQyx5Q0FBd0IsRUFBRTs7NkNBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7K0NBQ0M7QUFHNUI7SUFEQyx5Q0FBd0IsRUFBRTs7Z0RBQ0U7QUFHN0I7SUFEQyx5Q0FBd0IsRUFBRTs7MENBQ0g7QUFHeEI7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUNqRCxjQUFLOzJDQUFDO0FBR3ZCO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsd0JBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs2Q0FDekM7QUFHaEM7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyx3QkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OzRDQUMxQztBQUcvQjtJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLHFDQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2tEQUNwQztBQUczQztJQURDLDBDQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSwrQkFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDOzhCQUN0RCwrQkFBYTs4Q0FBQztBQWpFcEMsOEJBa0VDO0FBRUQsTUFBYSxpQ0FBaUM7Q0FHN0M7QUFEQztJQURDLGlDQUFnQixFQUFFOzt3RUFDVTtBQUYvQiw4RUFHQztBQUVELE1BQWEsa0NBQWtDO0NBRzlDO0FBREM7SUFEQyxpQ0FBZ0IsRUFBRTs7c0VBQ2E7QUFGbEMsZ0ZBR0M7QUFFRCxNQUFhLGVBQWU7Q0FHM0I7QUFEQztJQURDLHlDQUF3QixFQUFFOzs4Q0FDTjtBQUZ2QiwwQ0FHQyJ9