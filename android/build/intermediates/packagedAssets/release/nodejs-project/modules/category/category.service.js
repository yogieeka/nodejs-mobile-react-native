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
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const cache_service_1 = require("../../shared/services/cache.service");
const product_service_1 = require("../product/product.service");
class CategoryService {
    constructor(mainDbContext) {
        this._categoryRepo = mainDbContext.categoryRepo();
        this._productCategoryRelationRepo = mainDbContext.productToCategoryRepo();
        this.productService = new product_service_1.ProductService(mainDbContext);
    }
    getAllCategory(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (cache_service_1.cache.categories) {
                    return cache_service_1.cache.categories;
                }
                else {
                    const categories = yield this._categoryRepo.findAll(options, true);
                    const products = yield this.productService.getAllProducts();
                    const productsMapped = products.map((p) => {
                        return {
                            id: p.id,
                            categories: p.categories.map((c) => c.id)
                        };
                    });
                    _.forEach(categories, (category) => {
                        let count = 0;
                        productsMapped.forEach((pM) => {
                            if (pM.categories.includes(category.id))
                                count++;
                        });
                        category.productCount = count;
                    });
                    cache_service_1.cache.categories = categories;
                    return categories;
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NhdGVnb3J5L2NhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEI7QUFHNUIsdUVBQTREO0FBRTVELGdFQUE0RDtBQUc1RCxNQUFhLGVBQWU7SUFPMUIsWUFBWSxhQUE0QjtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGdDQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVZLGNBQWMsQ0FBQyxPQUFPLEdBQUcsRUFBRTs7WUFDdEMsSUFBSTtnQkFDRixJQUFJLHFCQUFLLENBQUMsVUFBVSxFQUFFO29CQUNwQixPQUFPLHFCQUFLLENBQUMsVUFBVSxDQUFDO2lCQUN6QjtxQkFBTTtvQkFDTCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbkUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUM1RCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQ3hDLE9BQU87NEJBQ0wsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFOzRCQUNSLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt5QkFDMUMsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztvQkFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQWEsRUFBRSxFQUFFO3dCQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2QsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFOzRCQUM1QixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0NBQUUsS0FBSyxFQUFFLENBQUM7d0JBQ25ELENBQUMsQ0FBQyxDQUFDO3dCQUNILFFBQVEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUNoQyxDQUFDLENBQUMsQ0FBQztvQkFDSCxxQkFBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7b0JBQzlCLE9BQU8sVUFBVSxDQUFDO2lCQUNuQjthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUF4Q0QsMENBd0NDIn0=