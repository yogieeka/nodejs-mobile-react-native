"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const sequelize_1 = __importDefault(require("sequelize"));
const cache_service_1 = require("../../shared/services/cache.service");
class ProductService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._categoryRepo = mainDbContext.categoryRepo();
        this._modifierItemRepo = mainDbContext.modifierItemRepo();
        this._modifierRepo = mainDbContext.modifierRepo();
        this._printerAreaRepo = mainDbContext.printerAreaRepo();
        this._productRepo = mainDbContext.productRepo();
        this._productVariantRepo = mainDbContext.productVariantRepo();
        this._taxRepo = mainDbContext.taxRepo();
        this._salesTypeRepo = mainDbContext.salesTypeRepo();
        this._pricelist = mainDbContext.pricelistRepo();
        this._productToCategoryRepo = mainDbContext.productToCategoryRepo();
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (cache_service_1.cache.products)
                    return cache_service_1.cache.products;
                const products = yield this.getProductsFromDB();
                cache_service_1.cache.products = products;
                return products;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (cache_service_1.cache.products) {
                    const product = cache_service_1.cache.products.find((p) => p.id === id);
                    if (product)
                        return product;
                    throw new Error('product not found');
                }
                else {
                    const product = yield this._productRepo
                        .findById(id, {
                        include: [
                            {
                                model: this._productVariantRepo.dbTable(),
                                as: 'productVariants',
                                order: [['sortOrder', 'ASC']],
                                required: false
                            },
                            {
                                model: this._categoryRepo.dbTable(),
                                as: 'categories',
                                required: false
                            },
                            {
                                model: this._taxRepo.dbTable(),
                                required: false
                            },
                            {
                                model: this._printerAreaRepo.dbTable(),
                                required: false
                            }
                        ]
                    });
                    return product;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    searchProduct(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (cache_service_1.cache.products) {
                    const result = cache_service_1.cache.products.filter((p) => {
                        return p.name.toLowerCase().includes(query.toLowerCase()) || p.sku.toLowerCase().includes(query.toLowerCase());
                    });
                    return result;
                }
                else {
                    const result = yield this._productRepo
                        .findAll({
                        order: [['name', 'ASC']],
                        where: {
                            [sequelize_1.default.Op.or]: {
                                name: { [sequelize_1.default.Op.like]: `%${query}%` },
                                sku: { [sequelize_1.default.Op.like]: `%${query}%` }
                            }
                        },
                        include: [
                            {
                                model: this._modifierRepo.dbTable(),
                                as: 'modifiers',
                                through: { attributes: [] },
                                required: false,
                                include: {
                                    model: this._modifierItemRepo.dbTable(),
                                    as: 'items',
                                    required: false
                                }
                            },
                            {
                                model: this._productVariantRepo.dbTable(),
                                as: 'productVariants',
                                order: [['sortOrder', 'ASC']],
                                required: false
                            },
                            {
                                model: this._categoryRepo.dbTable(),
                                as: 'categories',
                                required: false
                            },
                            {
                                model: this._taxRepo.dbTable(),
                                required: false
                            },
                            {
                                model: this._printerAreaRepo.dbTable(),
                                required: false
                            }
                        ]
                    });
                    return result;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    setPrinterArea(productId, printerAreaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this._productRepo.findOne({ where: { id: productId } });
                if (!product)
                    throw new Error('Product not found');
                const result = yield product.updateAttributes({ printerAreaId });
                if (cache_service_1.cache.products) {
                    const products = yield this.getProductsFromDB();
                    cache_service_1.cache.products = products;
                }
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProductsByCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allProducts = yield this.getAllProducts();
                const productsInCategory = _.filter(allProducts, product => {
                    const categoriesIds = _.map(product.categories, c => c.id);
                    return categoriesIds.includes(categoryId);
                });
                return productsInCategory;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProductsFromDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this._productRepo
                    .findAll({
                    order: [['name', 'ASC']],
                    include: [
                        {
                            model: this._modifierRepo.dbTable(),
                            through: { attributes: [] },
                            required: false,
                            as: 'modifiers',
                            include: {
                                model: this._modifierItemRepo.dbTable(),
                                as: 'items',
                                required: false
                            }
                        },
                        {
                            model: this._productVariantRepo.dbTable(),
                            as: 'productVariants',
                            order: [['sortOrder', 'ASC']],
                            required: false,
                            include: {
                                model: this._pricelist.dbTable(),
                                as: 'prices',
                                required: false
                            }
                        },
                        {
                            model: this._categoryRepo.dbTable(),
                            as: 'categories',
                            required: false
                        },
                        {
                            model: this._taxRepo.dbTable(),
                            required: false
                        },
                        {
                            model: this._printerAreaRepo.dbTable(),
                            required: false
                        }
                    ]
                }, true);
                return products;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEI7QUFDNUIsMERBQWtDO0FBR2xDLHVFQUE0RDtBQVk1RCxNQUFhLGNBQWM7SUFlekIsWUFBWSxhQUE0QjtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFFWSxjQUFjOztZQUN6QixJQUFJO2dCQUNGLElBQUkscUJBQUssQ0FBQyxRQUFRO29CQUFFLE9BQU8scUJBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQzFDLE1BQU0sUUFB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