"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class SyncDownEntityService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._areaRepo = this._mainDbContext.areaRepo();
        this._categoryRepo = this._mainDbContext.categoryRepo();
        this._customerRepo = this._mainDbContext.customerRepo();
        this._modifierItemRepo = this._mainDbContext.modifierItemRepo();
        this._modifierRepo = this._mainDbContext.modifierRepo();
        this._paymentMethodRepo = this._mainDbContext.paymentMethodRepo();
        this._pricelistRepo = this._mainDbContext.pricelistRepo();
        this._productRepo = this._mainDbContext.productRepo();
        this._productToCategoryRepo = this._mainDbContext.productToCategoryRepo();
        this._productToModifierRepo = this._mainDbContext.productToModifierRepo();
        this._productVariantRepo = this._mainDbContext.productVariantRepo();
        this._salesTypeRepo = this._mainDbContext.salesTypeRepo();
        this._tableRepo = this._mainDbContext.tableRepo();
        this._taxRepo = this._mainDbContext.taxRepo();
        this._userRepo = this._mainDbContext.userRepo();
    }
    syncEntityArea(areas) {
        return __awaiter(this, void 0, void 0, function* () {
            if (areas !== null) {
                yield this._areaRepo.softDeleteAll();
                if (areas.length > 0) {
                    const areasToUpsert = areas.map(area => {
                        return Object.assign({}, area, { deleted: false });
                    });
                    return this._areaRepo.bulkUpsert(areasToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityCategory(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            if (categories !== null) {
                yield this._categoryRepo.softDeleteAll();
                if (categories.length > 0) {
                    const categoriesToUpsert = categories.map(category => {
                        return Object.assign({}, category, { deleted: false });
                    });
                    return this._categoryRepo.bulkUpsert(categoriesToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityCustomer(customers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (customers && customers.length > 0) {
                return this._customerRepo.bulkUpsert(customers);
            }
            return true;
        });
    }
    syncEntityModifier(modifiers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (modifiers !== null) {
                yield this._modifierRepo.softDeleteAll();
                if (modifiers.length > 0) {
                    const modifiersToUpsert = modifiers.map(modifier => {
                        return Object.assign({}, modifier, { deleted: false });
                    });
                    return this._modifierRepo.bulkUpsert(modifiersToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityModifierItem(modifierItems) {
        return __awaiter(this, void 0, void 0, function* () {
            if (modifierItems !== null) {
                yield this._modifierItemRepo.softDeleteAll();
                if (modifierItems.length > 0) {
                    const modifierItemsToUpsert = modifierItems.map(modifierItem => {
                        return Object.assign({}, modifierItem, { deleted: false });
                    });
                    return this._modifierItemRepo.bulkUpsert(modifierItemsToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityPaymentMethod(paymentMethods) {
        return __awaiter(this, void 0, void 0, function* () {
            if (paymentMethods !== null) {
                yield this._paymentMethodRepo.softDeleteAll(null, { paymentMethodId: { [sequelize_1.Op.ne]: null } });
                if (paymentMethods.length > 0) {
                    const paymentMethodsToUpsert = paymentMethods.map(paymentMethod => {
                        return Object.assign({}, paymentMethod, { deleted: false });
                    });
                    return this._paymentMethodRepo.bulkUpsert(paymentMethodsToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityPriceList(pricelist) {
        return __awaiter(this, void 0, void 0, function* () {
            if (pricelist !== null) {
                yield this._pricelistRepo.softDeleteAll(null, { productId: { [sequelize_1.Op.ne]: null }, productVariantId: { [sequelize_1.Op.ne]: null }, salesTypeId: { [sequelize_1.Op.ne]: null } });
                if (pricelist.length > 0) {
                    const pricelistToUpsert = pricelist.map(pricelistItem => {
                        return Object.assign({}, pricelistItem, { deleted: false });
                    });
                    return this._pricelistRepo.bulkUpsert(pricelistToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityProduct(products) {
        return __awaiter(this, void 0, void 0, function* () {
            if (products !== null) {
                yield this._productRepo.softDeleteAll();
                if (products.length > 0) {
                    const productsToUpsert = products.map(product => {
                        return Object.assign({}, product, { deleted: false });
                    });
                    return this._productRepo.bulkUpsert(productsToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityProductToCategory(productToCategories) {
        return __awaiter(this, void 0, void 0, function* () {
            if (productToCategories !== null) {
                yield this._productToCategoryRepo.softDeleteAll(null, { productId: { [sequelize_1.Op.ne]: null }, categoryId: { [sequelize_1.Op.ne]: null } });
                if (productToCategories.length > 0) {
                    const productToCategoriesToUpsert = productToCategories.map(productToCategory => {
                        return Object.assign({}, productToCategory, { deleted: false });
                    });
                    return this._productToCategoryRepo.bulkUpsert(productToCategoriesToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityProductToModifier(productToModifiers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (productToModifiers !== null) {
                yield this._productToModifierRepo.softDeleteAll(null, { productId: { [sequelize_1.Op.ne]: null }, modifierId: { [sequelize_1.Op.ne]: null } });
                if (productToModifiers.length > 0) {
                    const productToModifiersToUpsert = productToModifiers.map(productToModifier => {
                        return Object.assign({}, productToModifier, { deleted: false });
                    });
                    return this._productToModifierRepo.bulkUpsert(productToModifiersToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityProductVariant(productVariants) {
        return __awaiter(this, void 0, void 0, function* () {
            if (productVariants !== null) {
                yield this._productVariantRepo.softDeleteAll();
                if (productVariants.length > 0) {
                    const productVariantsToUpsert = productVariants.map(productVariant => {
                        return Object.assign({}, productVariant, { deleted: false });
                    });
                    return this._productVariantRepo.bulkUpsert(productVariantsToUpsert);
                }
            }
            return true;
        });
    }
    syncEntitySalesType(salesTypes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (salesTypes !== null) {
                yield this._salesTypeRepo.softDeleteAll();
                if (salesTypes.length > 0) {
                    const salesTypesToUpsert = salesTypes.map(salesType => {
                        return Object.assign({}, salesType, { deleted: false });
                    });
                    return this._salesTypeRepo.bulkUpsert(salesTypesToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityTable(tables) {
        return __awaiter(this, void 0, void 0, function* () {
            if (tables !== null) {
                yield this._tableRepo.softDeleteAll();
                if (tables.length > 0) {
                    const tablesToUpsert = tables.map(table => {
                        return Object.assign({}, table, { deleted: false });
                    });
                    return this._tableRepo.bulkUpsert(tablesToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityTax(taxes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (taxes !== null) {
                yield this._taxRepo.softDeleteAll();
                if (taxes.length > 0) {
                    const taxesToUpsert = taxes.map(tax => {
                        return Object.assign({}, tax, { deleted: false });
                    });
                    return this._taxRepo.bulkUpsert(taxesToUpsert);
                }
            }
            return true;
        });
    }
    syncEntityUser(users) {
        return __awaiter(this, void 0, void 0, function* () {
            if (users !== null) {
                yield this._userRepo.softDeleteAll();
                if (users.length > 0) {
                    const usersToUpsert = users.map(user => {
                        return Object.assign({}, user, { deleted: false });
                    });
                    return this._userRepo.bulkUpsert(usersToUpsert);
                }
            }
            return true;
        });
    }
}
exports.SyncDownEntityService = SyncDownEntityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1kb3duLWVudGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc3luYy9zeW5jLWRvd24tZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUErQjtBQW1CL0IsTUFBYSxxQkFBcUI7SUF1QmhDLFlBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFFcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMxRSxJQUFJLENBQUMsbUJBQW1C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