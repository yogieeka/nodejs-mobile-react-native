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
const http_errors_1 = __importDefault(require("http-errors"));
const main_db_context_1 = require("../../shared/database/main-db-context");
const internet_util_1 = require("../../shared/utils/internet.util");
const sync_order_customer_service_1 = require("./sync-order-customer.service");
const sync_service_1 = require("./sync.service");
let job;
let syncScheduleExecutionRunning = false;
class SyncScheduleService {
    syncConnection(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const online = yield internet_util_1.checkConnection();
                if (online === true) {
                    const syncOrderCustomerService = new sync_order_customer_service_1.SyncOrderCustomerService(new main_db_context_1.MainDBContext());
                    const syncService = new sync_service_1.SyncService(new main_db_context_1.MainDBContext());
                    const result = yield Promise.all([
                        syncOrderCustomerService.syncData(),
                        syncService.syncInitData(force),
                    ]);
                    return result;
                }
                else {
                    throw http_errors_1.default(401, 'No internet access');
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    syncExecute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.syncConnection(true);
            }
            catch (error) {
                throw error;
            }
        });
    }
    syncStart() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!syncScheduleExecutionRunning) {
                syncScheduleExecutionRunning = true;
                try {
                    yield this.syncConnection();
                }
                catch (error) {
                    throw error;
                }
                finally {
                    syncScheduleExecutionRunning = false;
                    job = setTimeout(() => this.syncStart(), 5 * 60 * 1000);
                }
            }
        });
    }
    syncStop() {
        return __awaiter(this, void 0, void 0, function* () {
            return clearTimeout(job);
        });
    }
}
exports.SyncScheduleService = SyncScheduleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1zY2hlZHVsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc3luYy9zeW5jLXNjaGVkdWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUFzQztBQUN0QywyRUFBc0U7QUFDdEUsb0VBQW1FO0FBQ25FLCtFQUF5RTtBQUN6RSxpREFBNkM7QUFFN0MsSUFBSSxHQUFHLENBQUM7QUFDUixJQUFJLDRCQUE0QixHQUFZLEtBQUssQ0FBQztBQUVsRCxNQUFhLG1CQUFtQjtJQUNqQixjQUFjLENBQUMsUUFBaUIsS0FBSzs7WUFDaEQsSUFBSTtnQkFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLCtCQUFlLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNuQixNQUFNLHdCQUF3QixHQUFHLElBQUksc0RBQXdCLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztvQkFDbkYsTUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksK0JBQWEsRUFBRSxDQUFDLENBQUM7b0JBQ3pELE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQzt3QkFDL0Isd0JBQXdCLENBQUMsUUFBUSxFQUFFO3dCQUNuQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztxQkFDaEMsQ0FBQyxDQUFDO29CQUNILE9BQU8sTUFBTSxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLE1BQU0scUJBQVcsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sS0FBSyxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7SUFFWSxXQUFXOztZQUN0QixJQUFJO2dCQUNGLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxLQUFLLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtJQUVZLFNBQVM7O1lBQ3BCLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtnQkFDakMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO2dCQUVwQyxJQUFJO29CQUNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUM3QjtnQkFBQyxPQUFPLEtBQUssRUFBRTtvQkFDZCxNQUFNLEtBQUssQ0FBQztpQkFDYjt3QkFBUztvQkFDUiw0QkFBNEIsR0FBRyxLQUFLLENBQUM7b0JBRXJDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ3pEO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7SUFFWSxRQUFROztZQUNqQixPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDO0tBQUE7Q0FDRjtBQS9DRCxrREErQ0MifQ==