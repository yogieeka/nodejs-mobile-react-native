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
const sequelize_1 = require("sequelize");
const main_db_context_1 = require("../../shared/database/main-db-context");
const sync_customer_service_1 = require("./sync-customer-service");
const sync_order_service_1 = require("./sync-order.service");
const sync_rest_service_1 = require("./sync-rest.service");
function syncOrderService() {
    return new sync_order_service_1.SyncOrderService(new main_db_context_1.MainDBContext());
}
function syncCustomerService() {
    return new sync_customer_service_1.SyncCustomerService(new main_db_context_1.MainDBContext());
}
class SyncOrderCustomerService {
    constructor(_mainDbContext) {
        this.dataSyncRestService = new sync_rest_service_1.SyncRestService();
        this._orderRepo = _mainDbContext.orderRepo();
        this._customerRepo = _mainDbContext.customerRepo();
    }
    syncData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Promise.all([
                    syncOrderService().syncOrderData(),
                    syncCustomerService().syncCustomerData()
                ]);
                const [orders, customers] = data;
                const result = yield this.dataSyncRestService.postOrdersCustomers({
                    orders,
                    customers
                });
                if (result) {
                    const orderIds = _.map(orders, o => _.get(o, 'transactionId'));
                    const customerIds = _.map(customers, c => _.get(c, 'customerId'));
                    this._orderRepo.update({ isSync: true }, { where: { [sequelize_1.Op.or]: { id: orderIds } } });
                    this._customerRepo.update({ isSync: true }, { where: { [sequelize_1.Op.or]: { id: customerIds } } });
                }
                return result;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.SyncOrderCustomerService = SyncOrderCustomerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1vcmRlci1jdXN0b21lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc3luYy9zeW5jLW9yZGVyLWN1c3RvbWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEI7QUFDNUIseUNBQStCO0FBQy9CLDJFQUFzRTtBQUl0RSxtRUFBOEQ7QUFDOUQsNkRBQXdEO0FBQ3hELDJEQUFzRDtBQUV0RCxTQUFTLGdCQUFnQjtJQUN2QixPQUFPLElBQUkscUNBQWdCLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQsU0FBUyxtQkFBbUI7SUFDMUIsT0FBTyxJQUFJLDJDQUFtQixDQUFDLElBQUksK0JBQWEsRUFBRSxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVELE1BQWEsd0JBQXdCO0lBS25DLFlBQVksY0FBOEI7UUFKbkMsd0JBQW1CLEdBQUcsSUFBSSxtQ0FBZSxFQUFFLENBQUM7UUFLakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVZLFFBQVE7O1lBQ25CLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUM3QixnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsRUFBRTtvQkFDbEMsbUJBQW1CLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtpQkFDekMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDaEUsTUFBTTtvQkFDTixTQUFTO2lCQUNWLENBQUMsQ0FBQztnQkFDSCxJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7b0JBQy9ELE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQ3BCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUNoQixFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsY0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FDekMsQ0FBQztvQkFDRixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FDdkIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQ2hCLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUM1QyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXRDRCw0REFzQ0MifQ==