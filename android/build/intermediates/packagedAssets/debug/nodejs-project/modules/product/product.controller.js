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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const main_db_context_1 = require("../../shared/database/main-db-context");
const product_service_1 = require("./product.service");
const product_vm_1 = require("./product.vm");
function newProductService() {
    return new product_service_1.ProductService(new main_db_context_1.MainDBContext());
}
let ProductController = class ProductController {
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield newProductService().getAllProducts();
            return products;
        });
    }
    searchProduct({ query }) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield newProductService().searchProduct(query);
            return product;
        });
    }
    getProductsByCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield newProductService().getProductsByCategory(categoryId);
            return product;
        });
    }
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield newProductService().getProductById(productId);
            return product;
        });
    }
    updateProductPrinterArea(productId, { printerAreaId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProduct = yield newProductService().setPrinterArea(productId, printerAreaId);
            return updatedProduct;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [product_vm_1.ProductVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    common_1.Get('search'),
    nestjs_swagger_1.ApiOkResponse({ type: product_vm_1.ProductVM }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_vm_1.ProductSearchVM]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "searchProduct", null);
__decorate([
    common_1.Get('/category/:id'),
    nestjs_swagger_1.ApiOkResponse({ type: [product_vm_1.ProductVM] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByCategory", null);
__decorate([
    common_1.Get(':id'),
    nestjs_swagger_1.ApiOkResponse({ type: product_vm_1.ProductVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    common_1.Put(':id'),
    nestjs_swagger_1.ApiOkResponse({ type: product_vm_1.ProductVM }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_vm_1.ProductUpdatePrinterAreaPayloadVM]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProductPrinterArea", null);
ProductController = __decorate([
    nestjs_swagger_1.ApiUseTags('Product'),
    common_1.Controller('products')
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFnRjtBQUNoRixrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLHVEQUFtRDtBQUNuRCw2Q0FBaUk7QUFFakksU0FBUyxpQkFBaUI7SUFDeEIsT0FBTyxJQUFJLGdDQUFjLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSUQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFHZixXQUFXOztZQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDNUQsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBSVksYUFBYSxDQUNmLEVBQUMsS0FBSyxFQUFrQjs7WUFFakMsTUFBTSxPQUFPLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDLGFBQWEsQ0FDckQsS0FBSyxDQUNOLENBQUM7WUFFRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFJWSxxQkFBcUIsQ0FBYyxVQUFrQjs7WUFDaEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTVFLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUlZLGNBQWMsQ0FBYyxTQUFpQjs7WUFDeEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVwRSxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFJWSx3QkFBd0IsQ0FDdEIsU0FBaUIsRUFDdEIsRUFBRSxhQUFhLEVBQXFDOztZQUU1RCxNQUFNLGNBQWMsR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUMsY0FBYyxDQUM3RCxTQUFTLEVBQ1QsYUFBYSxDQUNkLENBQUM7WUFFRixPQUFPLGNBQWMsQ0FBQztRQUN4QixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBOUNDO0lBRkMsWUFBRyxFQUFFO0lBQ0wsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBRSxDQUFDOzs7O29EQUlwQztBQUlEO0lBRkMsWUFBRyxDQUFDLFFBQVEsQ0FBQztJQUNiLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVMsRUFBRSxDQUFDO0lBRWhDLFdBQUEsY0FBSyxFQUFFLENBQUE7O3FDQUFVLDRCQUFlOztzREFPbEM7QUFJRDtJQUZDLFlBQUcsQ0FBQyxlQUFlLENBQUM7SUFDcEIsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBRSxDQUFDO0lBQ0QsV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7OERBSTlDO0FBSUQ7SUFGQyxZQUFHLENBQUMsS0FBSyxDQUFDO0lBQ1YsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxzQkFBUyxFQUFFLENBQUM7SUFDTixXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozt1REFJdkM7QUFJRDtJQUZDLFlBQUcsQ0FBQyxLQUFLLENBQUM7SUFDViw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFTLEVBQUUsQ0FBQztJQUVoQyxXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNYLFdBQUEsYUFBSSxFQUFFLENBQUE7OzZDQUFvQiw4Q0FBaUM7O2lFQVE3RDtBQWhEVSxpQkFBaUI7SUFGN0IsMkJBQVUsQ0FBQyxTQUFTLENBQUM7SUFDckIsbUJBQVUsQ0FBQyxVQUFVLENBQUM7R0FDVixpQkFBaUIsQ0FpRDdCO0FBakRZLDhDQUFpQiJ9