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
const index_1 = require("../../../external/nestjs-swagger/index");
const base_vm_1 = require("../../../shared/models/base.vm");
class ProductPricelistVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    index_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductPricelistVM.prototype, "productId", void 0);
__decorate([
    index_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductPricelistVM.prototype, "productVariantId", void 0);
__decorate([
    index_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductPricelistVM.prototype, "salesTypeId", void 0);
__decorate([
    index_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ProductPricelistVM.prototype, "salesTypeName", void 0);
__decorate([
    index_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], ProductPricelistVM.prototype, "price", void 0);
__decorate([
    index_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductPricelistVM.prototype, "isMaster", void 0);
__decorate([
    index_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], ProductPricelistVM.prototype, "deleted", void 0);
exports.ProductPricelistVM = ProductPricelistVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wcmljZWxpc3Qudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0L3ByaWNlbGlzdC9wcm9kdWN0LXByaWNlbGlzdC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUFrRjtBQUNsRiw0REFBc0U7QUFFdEUsTUFBYSxrQkFBbUIsU0FBUSw4QkFBb0I7Q0FxQjNEO0FBbkJDO0lBREMsZ0NBQXdCLEVBQUU7O3FEQUNGO0FBR3pCO0lBREMsZ0NBQXdCLEVBQUU7OzREQUNLO0FBR2hDO0lBREMsZ0NBQXdCLEVBQUU7O3VEQUNBO0FBRzNCO0lBREMsZ0NBQXdCLEVBQUU7O3lEQUNFO0FBRzdCO0lBREMsZ0NBQXdCLEVBQUU7O2lEQUNOO0FBR3JCO0lBREMsZ0NBQXdCLEVBQUU7O29EQUNGO0FBR3pCO0lBREMsZ0NBQXdCLEVBQUU7O21EQUNIO0FBcEIxQixnREFxQkMifQ==