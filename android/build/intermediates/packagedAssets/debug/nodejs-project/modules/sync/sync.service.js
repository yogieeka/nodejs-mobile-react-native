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
const moment_1 = __importDefault(require("moment"));
const cache_service_1 = require("../../shared/services/cache.service");
const download_service_1 = require("../../shared/services/download.service");
const sync_down_entity_service_1 = require("./sync-down-entity.service");
const sync_rest_service_1 = require("./sync-rest.service");
class SyncService {
    constructor(mainDbContext) {
        this.downloadService = new download_service_1.DownloadService();
        this.dataSyncRestService = new sync_rest_service_1.SyncRestService();
        this._mainDbContext = mainDbContext;
        this.syncDownEntityService = new sync_down_entity_service_1.SyncDownEntityService(mainDbContext);
        this._userRepo = mainDbContext.userRepo();
        this._productRepo = mainDbContext.productRepo();
    }
    syncInitData(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.dataSyncRestService
                    .getInitialData(force)
                    .then(data => {
                    const { customers, outletSetting, products, variants, categories, modifiers, modifierItems, productToModifiers, productToCategories, taxes, users, tables, areas, paymentMethods, salesTypes, priceList, serverTime, } = data;
                    const promises = [];
                    if (outletSetting !== null) {
                        promises.push(this._mainDbContext.outletSettingRepo().upsert(Object.assign(outletSetting, {
                            id: 1,
                            lastSyncTime: moment_1.default(serverTime).toDate(),
                        })));
                    }
                    promises.push(this.syncDownEntityService.syncEntityCustomer(customers));
                    promises.push(this.syncDownEntityService.syncEntityUser(users));
                    promises.push(this.syncDownEntityService.syncEntityTax(taxes));
                    promises.push(this.syncDownEntityService.syncEntityArea(areas));
                    promises.push(this.syncDownEntityService.syncEntityTable(tables));
                    promises.push(this.syncDownEntityService.syncEntityCategory(categories));
                    promises.push(this.syncDownEntityService.syncEntityModifier(modifiers));
                    promises.push(this.syncDownEntityService.syncEntityModifierItem(modifierItems));
                    promises.push(this.syncDownEntityService.syncEntityProduct(products));
                    promises.push(this.syncDownEntityService.syncEntityProductVariant(variants));
                    promises.push(this.syncDownEntityService.syncEntityProductToModifier(productToModifiers));
                    promises.push(this.syncDownEntityService.syncEntityProductToCategory(productToCategories));
                    promises.push(this.syncDownEntityService.syncEntitySalesType(salesTypes));
                    promises.push(this.syncDownEntityService.syncEntityPriceList(priceList));
                    promises.push(this.syncDownEntityService.syncEntityPaymentMethod(paymentMethods));
                    Promise.all(promises)
                        .then(() => {
                        Promise.all([
                            this.downloadUserImages(users),
                            this.downloadProductImages(products)
                        ])
                            .then(() => {
                            cache_service_1.cache.products = null;
                            cache_service_1.cache.categories = null;
                            cache_service_1.cache.areas = null;
                            cache_service_1.cache.salesTypes = null;
                            resolve(true);
                        })
                            .catch(reject);
                    })
                        .catch(reject);
                })
                    .catch(reject);
            });
        });
    }
    downloadUserImages(users) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!users)
                return Promise.resolve();
            const userPictures = lodash_1.default.reject(users, ['pictureUrl', null]);
            if (!userPictures || userPictures.length <= 0)
                return Promise.resolve();
            const promises = [];
            userPictures.forEach(up => {
                const prom = this.downloadService
                    .downloadImage(up.pictureUrl)
                    .then(fileName => this._userRepo.update({ pictureLocal: fileName }, { where: { id: up.id } }));
                promises.push(prom);
            });
            return new Promise((resolve, reject) => {
                Promise.all(promises)
                    .then(() => resolve(true))
                    .catch(e => reject(e));
            });
        });
    }
    downloadProductImages(products) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!products)
                return Promise.resolve();
            const productPictures = lodash_1.default.reject(products, ['pictureUrl', null]);
            if (!productPictures || productPictures.length <= 0) {
                return Promise.resolve();
            }
            const promises = [];
            productPictures.forEach(up => {
                const prom = this.downloadService
                    .downloadImage(up.pictureUrl)
                    .then(fileName => this._productRepo.update({ pictureLocal: fileName }, { where: { id: up.id } }));
                promises.push(prom);
            });
            return new Promise((resolve, reject) => {
                Promise.all(promises)
                    .then(() => resolve(true))
                    .catch(e => reject(e));
            });
        });
    }
}
exports.SyncService = SyncService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc3luYy9zeW5jLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUF1QjtBQUN2QixvREFBNEI7QUFHNUIsdUVBQTREO0FBQzVELDZFQUF5RTtBQUd6RSx5RUFBbUU7QUFDbkUsMkRBQXNEO0FBRXRELE1BQWEsV0FBVztJQVF0QixZQUFZLGFBQTRCO1FBSmpDLG9CQUFlLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDeEMsd0JBQW1CLEdBQUcsSUFBSSxtQ0FBZSxFQUFFLENBQUM7UUFJakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFFcEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksZ0RBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVZLFlBQVksQ0FBQyxRQUFpQixLQUFLOztZQUM5QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsbUJBQW1CO3FCQUNyQixjQUFjLENBQUMsS0FBSyxDQUFDO3FCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ1gsTUFBTSxFQUNKLFNBQVMsRUFDVCxhQUFhLEVBQ2IsUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsU0FBUyxFQUNULGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCxLQUFLLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxjQUFjLEVBQ2QsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEdBQ1gs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