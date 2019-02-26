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
const order_entry_service_1 = require("../order/order-entry.service");
class TableService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._areaRepo = mainDbContext.areaRepo();
        this._categoryRepo = mainDbContext.categoryRepo();
        this._customerRepo = mainDbContext.customerRepo();
        this._modifierItemRepo = mainDbContext.modifierItemRepo();
        this._modifierRepo = mainDbContext.modifierRepo();
        this._orderLineModifierRepo = mainDbContext.orderLineModifierRepo();
        this._orderLineRepo = mainDbContext.orderLineRepo();
        this._orderPaymentRepo = mainDbContext.orderPaymentRepo();
        this._orderRepo = mainDbContext.orderRepo();
        this._outletSettingRepo = mainDbContext.outletSettingRepo();
        this._productRepo = mainDbContext.productRepo();
        this._productVariantRepo = mainDbContext.productVariantRepo();
        this._productVariantRepo = mainDbContext.productVariantRepo();
        this._tableRepo = mainDbContext.tableRepo();
        this._tableRepo = mainDbContext.tableRepo();
        this._taxRepo = mainDbContext.taxRepo();
        this._orderEntryService = new order_entry_service_1.OrderEntryService(mainDbContext);
    }
    getAllTables(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._tableRepo
                    .findAll(options)
                    .then(tables => {
                    resolve(tables);
                })
                    .catch(reject);
            });
        });
    }
    getTableById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._tableRepo
                    .findById(id)
                    .then(table => {
                    resolve(table);
                })
                    .catch(reject);
            });
        });
    }
    getTablesByAreaId(areaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._tableRepo
                    .findAll({ where: { areaId } })
                    .then(tables => {
                    resolve(tables);
                })
                    .catch(reject);
            });
        });
    }
    getActiveOrderByTableId(tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield this._orderEntryService.getOrderByTableId(tableId);
                return order;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.TableService = TableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3RhYmxlL3RhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBLHNFQUFpRTtBQVdqRSxNQUFhLFlBQVk7SUFrQnZCLFlBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksdUNBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVZLFlBQVksQ0FBQyxPQUFPLEdBQUcsRUFBRTs7WUFDcEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLFVBQVU7cUJBQ1osT0FBTyxDQUFDLE9BQU8sQ0FBQztxQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNiLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxFQUFFOztZQUMxQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsVUFBVTtxQkFDWixRQUFRLENBQUMsRUFBRSxDQUFDO3FCQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxpQkFBaUIsQ0FBQyxNQUFNOztZQUNuQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsVUFBVTtxQkFDWixPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDO3FCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRVksdUJBQXVCLENBQUMsT0FBTzs7WUFDMUMsSUFBSTtnQkFDRixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sS0FBSyxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQWhGRCxvQ0FnRkMifQ==