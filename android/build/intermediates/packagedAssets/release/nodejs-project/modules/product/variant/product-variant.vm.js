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
const product_pricelist_vm_1 = require("../pricelist/product-pricelist.vm");
const product_vm_1 = require("../product.vm");
class ProductVariantVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantVM.prototype, "id", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: product_vm_1.ProductVM })]),
    __metadata("design:type", product_vm_1.ProductVM)
], ProductVariantVM.prototype, "product", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantVM.prototype, "sku", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantVM.prototype, "name", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantVM.prototype, "variantName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ProductVariantVM.prototype, "unitPrice", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductVariantVM.prototype, "isMaster", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantVM.prototype, "attribute1Value", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantVM.prototype, "attribute2Value", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductVariantVM.prototype, "attribute3Value", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ProductVariantVM.prototype, "sortOrder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductVariantVM.prototype, "deleted", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: product_pricelist_vm_1.ProductPricelistVM }),
    __metadata("design:type", Array)
], ProductVariantVM.prototype, "prices", void 0);
exports.ProductVariantVM = ProductVariantVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LnZtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdC92YXJpYW50L3Byb2R1Y3QtdmFyaWFudC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFFQUE0RTtBQUM1RSxtR0FBcUY7QUFDckYsNERBQXNFO0FBQ3RFLDRFQUF1RTtBQUN2RSw4Q0FBMEM7QUFFMUMsTUFBYSxnQkFBaUIsU0FBUSw4QkFBb0I7Q0EyQ3pEO0FBekNDO0lBREMseUNBQXdCLEVBQUU7OzRDQUNUO0FBR2xCO0lBREMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7OEJBQ3RELHNCQUFTO2lEQUFDO0FBRzFCO0lBREMseUNBQXdCLEVBQUU7O21EQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7OzZDQUNSO0FBR25CO0lBREMseUNBQXdCLEVBQUU7OzhDQUNQO0FBR3BCO0lBREMseUNBQXdCLEVBQUU7O3FEQUNBO0FBRzNCO0lBREMseUNBQXdCLEVBQUU7O21EQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7O2tEQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7O3lEQUNJO0FBRy9CO0lBREMseUNBQXdCLEVBQUU7O3lEQUNJO0FBRy9CO0lBREMseUNBQXdCLEVBQUU7O3lEQUNJO0FBRy9CO0lBREMseUNBQXdCLEVBQUU7O21EQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7O2lEQUNIO0FBSXhCO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUseUNBQWtCLEVBQUUsQ0FBQzs7Z0RBQ25CO0FBMUN0Qyw0Q0EyQ0MifQ==