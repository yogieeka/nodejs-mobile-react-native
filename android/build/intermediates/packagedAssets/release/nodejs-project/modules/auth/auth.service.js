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
const luna_1 = __importDefault(require("../../luna"));
const database_config_1 = require("../../shared/database/database-config");
const main_db_context_1 = require("../../shared/database/main-db-context");
const setting_db_service_1 = require("../../shared/services/setting-db.service");
const printer_area_service_1 = require("../printer-area/printer-area.service");
const sync_service_1 = require("../sync/sync.service");
const auth_rest_service_1 = require("./auth-rest.service");
class AuthService {
    constructor(settingDbContext) {
        this.authRestService = new auth_rest_service_1.AuthRestService();
        this._settingDbContext = settingDbContext;
        this._settingDbService = new setting_db_service_1.SettingDBService(settingDbContext);
    }
    /**
     * Register auth key
     * TODO: we need to add validation or fallback if iniDBMain failed.
     * Revert back to previous settings if failed
     * @param {*} shortAuthKey
     */
    registerAuthKey(shortAuthKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.authRestService
                    .getAuthKey(shortAuthKey)
                    .then(data => {
                    const { outletAuthKey } = data;
                    if (outletAuthKey === '00000000-0000-0000-0000-000000000000') {
                        reject(http_errors_1.default(400, 'Invalid Key'));
                        return;
                    }
                    this.authRestService
                        .getAuthToken(outletAuthKey)
                        .then(outletData => {
                        const { company_id, company_name, outlet_id, outlet_name, access_token, refresh_token } = outletData;
                        const responseResult = outletData;
                        const accountData = {
                            companyId: company_id,
                            companyName: company_name,
                            outletId: outlet_id,
                            outletName: outlet_name,
                            authKey: outletAuthKey,
                            accessToken: access_token,
                            refreshToken: refresh_token
                        };
                        // first create or update account data
                        this._settingDbService
                            .createOrUpdateAccount(company_id, outlet_id, accountData)
                            .then(account => {
                            // const acc = account;
                            // const accountId = account.id;
                            // const lastSyncTime = account.lastSyncTime;
                            // now set as active account
                            this._settingDbService
                                .updateSystemSettingActiveAccount(account.id)
                                .then(() => {
                                luna_1.default.activeAccount = account;
                                // now init the database for access by others
                                database_config_1.databaseConfig
                                    .initMainDB(company_id, outlet_id)
                                    .then(() => __awaiter(this, void 0, void 0, function* () {
                                    const printerAreaServive = new printer_area_service_1.PrinterAreaService(new main_db_context_1.MainDBContext());
                                    yield printerAreaServive.seedMain();
                                    // now sync data with server
                                    const syncService = new sync_service_1.SyncService(new main_db_context_1.MainDBContext());
                                    syncService
                                        .syncInitData(true)
                                        .then(() => {
                                        resolve(responseResult);
                                    })
                                        .catch(reject);
                                }))
                                    .catch(reject);
                            })
                                .catch(reject);
                        })
                            .catch(reject);
                    })
                        .catch(reject);
                })
                    .catch(reject);
            });
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUFzQztBQUN0QyxzREFBOEI7QUFDOUIsMkVBQXVFO0FBQ3ZFLDJFQUFzRTtBQUV0RSxpRkFBNEU7QUFDNUUsK0VBQTBFO0FBQzFFLHVEQUFtRDtBQUNuRCwyREFBc0Q7QUFFdEQsTUFBYSxXQUFXO0lBS3RCLFlBQVksZ0JBQWtDO1FBRnZDLG9CQUFlLEdBQUcsSUFBSSxtQ0FBZSxFQUFFLENBQUM7UUFHN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHFDQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1UsZUFBZSxDQUFDLFlBQVk7O1lBQ3ZDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxlQUFlO3FCQUNqQixVQUFVLENBQUMsWUFBWSxDQUFDO3FCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ1gsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDL0IsSUFBSSxhQUFhLEtBQUssc0NBQXNDLEVBQUU7d0JBQzVELE1BQU0sQ0FBQyxxQkFBVyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxPQUFPO3FCQUNSO29CQUVELElBQUksQ0FBQyxlQUFlO3lCQUNqQixZQUFZLENBQUMsYUFBYSxDQUFDO3lCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ2pCLE1BQU0sRUFDSixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLGFBQWEsRUFDZCxHQUFHLFVBQVUsQ0FBQzt3QkFDZixNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUM7d0JBRWxDLE1BQU0sV0FBVyxHQUFHOzRCQUNsQixTQUFTLEVBQUUsVUFBVTs0QkFDckIsV0FBVyxFQUFFLFlBQVk7NEJBQ3pCLFFBQVEsRUFBRSxTQUFTOzRCQUNuQixVQUFVLEVBQUUsV0FBVzs0QkFDdkIsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxZQUFZOzRCQUN6QixZQUFZLEVBQUUsYUFBYTt5QkFDNUIsQ0FBQzt3QkFFRixzQ0FBc0M7d0JBQ3RDLElBQUksQ0FBQyxpQkFBaUI7NkJBQ25CLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDOzZCQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ2QsdUJBQXVCOzRCQUN2QixnQ0FBZ0M7NEJBQ2hDLDZDQUE2Qzs0QkFFN0MsNEJBQTRCOzRCQUM1QixJQUFJLENBQUMsaUJBQWlCO2lDQUNuQixnQ0FBZ0MsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2lDQUM1QyxJQUFJLENBQUMsR0FBRyxFQUFFO2dDQUNULGNBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO2dDQUU3Qiw2Q0FBNkM7Z0NBQzdDLGdDQUFjO3FDQUNYLFVBQVUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDO3FDQUNqQyxJQUFJLENBQUMsR0FBUyxFQUFFO29DQUNmLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx5Q0FBa0IsQ0FDL0MsSUFBSSwrQkFBYSxFQUFFLENBQ3BCLENBQUM7b0NBQ0YsTUFBTSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQ0FDcEMsNEJBQTRCO29DQUM1QixNQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQ2pDLElBQUksK0JBQWEsRUFBRSxDQUNwQixDQUFDO29DQUNGLFdBQVc7eUNBQ1IsWUFBWSxDQUFDLElBQUksQ0FBQzt5Q0FDbEIsSUFBSSxDQUFDLEdBQUcsRUFBRTt3Q0FDVCxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0NBQzFCLENBQUMsQ0FBQzt5Q0FDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQ25CLENBQUMsQ0FBQSxDQUFDO3FDQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQyxDQUFDO2lDQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQyxDQUFDOzZCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBOUZELGtDQThGQyJ9