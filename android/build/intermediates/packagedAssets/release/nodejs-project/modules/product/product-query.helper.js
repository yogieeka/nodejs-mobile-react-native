"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const sequelize_1 = require("sequelize");
exports.ProductQueryHelper = {
    getProductVariantPriceBySalesType(mainDbContext, salesTypeId, productVariantIds = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const productVariantRepo = mainDbContext.productVariantRepo();
            const pricelistRepo = mainDbContext.pricelistRepo();
            let whereQuery;
            if (productVariantIds) {
                if (lodash_1.default.isArray(productVariantIds)) {
                    whereQuery = {
                        deleted: false,
                        [sequelize_1.Op.or]: [
                            {
                                id: productVariantIds
                            }
                        ]
                    };
                }
                else {
                    whereQuery = {
                        $or: [{ id: productVariantIds }, { deleted: false }]
                    };
                }
            }
            else {
                whereQuery = { deleted: false };
            }
            const productVariants = yield productVariantRepo.findAll({
                where: whereQuery,
                include: [
                    {
                        model: pricelistRepo.dbTable(),
                        where: { salesTypeId },
                        required: false,
                        as: 'prices'
                    }
                ],
                attributes: ['id', 'productId', 'unitPrice']
            }, true);
            return lodash_1.default.flatMap(productVariants, function (productVariant) {
                let price = productVariant.prices && productVariant.prices.length > 0
                    ? productVariant.prices[0].price
                    : productVariant.unitPrice;
                if (!price)
                    price = 0;
                return {
                    id: productVariant.id,
                    productId: productVariant.productId,
                    unitPrice: price
                };
            });
        });
    },
    getModifierItemPriceBySalesType(mainDbContext, salesTypeId, modifierItemIds = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const modifierItemRepo = mainDbContext.modifierItemRepo();
            const pricelistRepo = mainDbContext.pricelistRepo();
            let whereQuery;
            if (modifierItemIds) {
                if (lodash_1.default.isArray(modifierItemIds)) {
                    whereQuery = {
                        [sequelize_1.Op.or]: [
                            {
                                id: {
                                    [sequelize_1.Op.in]: modifierItemIds
                                }
                            },
                            { deleted: false }
                        ]
                    };
                }
                else {
                    whereQuery = {
                        $or: [{ id: modifierItemIds }, { deleted: false }]
                    };
                }
            }
            else {
                whereQuery = { deleted: false };
            }
            const modifierItems = yield modifierItemRepo.findAll({
                where: whereQuery,
                include: [
                    {
                        model: pricelistRepo.dbTable(),
                        where: { salesTypeId },
                        required: false,
                        as: 'prices'
                    }
                ],
                attributes: ['id', 'modifierId', 'price'],
                raw: true
            });
            return lodash_1.default.flatMap(modifierItems, function (modifierItem) {
                let price = modifierItem.prices && modifierItem.prices.length > 0
                    ? modifierItem.prices[0].price
                    : modifierItem.price;
                if (!price)
                    price = 0;
                return {
                    id: modifierItem.id,
                    modifierId: modifierItem.modifierId,
                    price: price
                };
            });
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1xdWVyeS5oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0L3Byb2R1Y3QtcXVlcnkuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBdUI7QUFDdkIseUNBQStCO0FBR2xCLFFBQUEsa0JBQWtCLEdBQUc7SUFDMUIsaUNBQWlDLENBQ3JDLGFBQTRCLEVBQzVCLFdBQVcsRUFDWCxvQkFBdUMsSUFBSTs7WUFFM0MsTUFBTSxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM5RCxNQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFcEQsSUFBSSxVQUFVLENBQUM7WUFDZixJQUFJLGlCQUFpQixFQUFFO2dCQUNyQixJQUFJLGdCQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7b0JBQ2hDLFVBQVUsR0FBRzt3QkFDWCxPQUFPLEVBQUUsS0FBSzt3QkFDZCxDQUFDLGNBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDUDtnQ0FDRSxFQUFFLEVBQUUsaUJBQWlCOzZCQUN0Qjt5QkFDRjtxQkFDRixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLFVBQVUsR0FBRzt3QkFDWCxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO3FCQUNyRCxDQUFDO2lCQUNIO2FBQ0Y7aUJBQU07Z0JBQ0wsVUFBVSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ2pDO1lBRUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxPQUFPLENBQ3REO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsS0FBSyxFQUFFLGFBQWEsQ0FBQyxPQUFPLEVB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