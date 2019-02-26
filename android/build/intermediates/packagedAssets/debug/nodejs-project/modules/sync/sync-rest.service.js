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
const moment = require("moment");
const constant_1 = __importDefault(require("../../config/constant"));
const main_db_context_1 = require("../../shared/database/main-db-context");
const http_request_intercepted_service_1 = __importDefault(require("../../shared/services/http-request-intercepted.service"));
const outlet_setting_service_1 = require("../outlet-setting/outlet-setting.service");
function newOutletSettingService() {
    return new outlet_setting_service_1.OutletSettingService(new main_db_context_1.MainDBContext());
}
class SyncRestService {
    constructor() {
        this.httpPosIntercepted = new http_request_intercepted_service_1.default(constant_1.default.LUNA_POS_API);
        this.httpAuthIntercepted = new http_request_intercepted_service_1.default(constant_1.default.LUNA_AUTH_API);
    }
    getInitialData(force = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                if (force) {
                    resolve(this.httpPosIntercepted.post(`pos/initial-data`, { serverTime: null }));
                }
                else {
                    newOutletSettingService()
                        .getOutletSettingById(1)
                        .then(outletSetting => {
                        const serverTime = lodash_1.default.get(outletSetting, 'lastSyncTime') || null;
                        const serverTimeISOFormat = moment(serverTime).toISOString();
                        resolve(this.httpPosIntercepted.post(`pos/initial-data`, { serverTime: serverTimeISOFormat }));
                    });
                }
            });
        });
    }
    updateUsers(users) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpAuthIntercepted.post(`posuser`, users);
        });
    }
    postOrdersCustomers(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpPosIntercepted.post(`sync`, data);
        });
    }
}
exports.SyncRestService = SyncRestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1yZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9zeW5jL3N5bmMtcmVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBdUI7QUFDdkIsaUNBQWtDO0FBQ2xDLHFFQUE2QztBQUU3QywyRUFBc0U7QUFDdEUsOEhBQW1HO0FBQ25HLHFGQUFnRjtBQUVoRixTQUFTLHVCQUF1QjtJQUM5QixPQUFPLElBQUksNkNBQW9CLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsTUFBYSxlQUFlO0lBQTVCO1FBQ1MsdUJBQWtCLEdBQUcsSUFBSSwwQ0FBNkIsQ0FDM0Qsa0JBQVEsQ0FBQyxZQUFZLENBQ3RCLENBQUM7UUFFSyx3QkFBbUIsR0FBRyxJQUFJLDBDQUE2QixDQUM1RCxrQkFBUSxDQUFDLGFBQWEsQ0FDdkIsQ0FBQztJQStCSixDQUFDO0lBN0JjLGNBQWMsQ0FDekIsUUFBaUIsS0FBSzs7WUFFdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsT0FBTyxDQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDdkUsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCx1QkFBdUIsRUFBRTt5QkFDdEIsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO3lCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7d0JBQ3BCLE1BQU0sVUFBVSxHQUFHLGdCQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUM7d0JBQ2hFLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUM3RCxPQUFPLENBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQ3RGLENBQUM7b0JBQ0osQ0FBQyxDQUFDLENBQUM7aUJBQ047WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVZLFdBQVcsQ0FBQyxLQUFLOztZQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVZLG1CQUFtQixDQUFDLElBQUk7O1lBQ25DLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0NBQ0Y7QUF0Q0QsMENBc0NDIn0=