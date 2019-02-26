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
const luna_1 = __importDefault(require("../../luna"));
const setting_db_context_1 = require("../database/setting-db-context");
const authentication_http_service_1 = require("./authentication-http.service");
const setting_db_service_1 = require("./setting-db.service");
class AuthenticationHttpInterceptorService {
    constructor() {
        this.authService = new authentication_http_service_1.AuthenticationHttpService();
        this.settingDBService = new setting_db_service_1.SettingDBService(new setting_db_context_1.SettingDBContext());
    }
    setInterceptors(axios) {
        axios.interceptors.request.use((request) => __awaiter(this, void 0, void 0, function* () {
            if (luna_1.default.activeAccount && luna_1.default.activeAccount.accessToken) {
                request.headers.common.Authorization = `Bearer ${luna_1.default.activeAccount.accessToken}`;
            }
            return request;
        }));
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            const errResponse = error.response;
            if (errResponse &&
                errResponse.status === 401 &&
                errResponse.config &&
                errResponse.config.headers &&
                errResponse.config.headers.Authorization) {
                return this.authService
                    .refreshToken()
                    .catch((errRefreshToken) => __awaiter(this, void 0, void 0, function* () {
                    //    return removeSettings().then(() => {
                    // return Rx.Observable.throw(errRefreshToken)
                    return errRefreshToken;
                    // })
                }))
                    .then(user => {
                    const { company_id, outlet_id } = user;
                    const accountUpdate = {
                        accessToken: lodash_1.default.get(user, 'access_token'),
                        refreshToken: lodash_1.default.get(user, 'refresh_token')
                    };
                    return this.settingDBService
                        .createOrUpdateAccount(company_id, outlet_id, accountUpdate)
                        .then(() => {
                        const response = errResponse;
                        response.config.headers.Authorization = `Bearer ${lodash_1.default.get(user, 'access_token')}`;
                        return axios.request(response.config);
                    });
                });
            }
            else {
                return error;
            }
        });
    }
}
exports.AuthenticationHttpInterceptorService = AuthenticationHttpInterceptorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24taHR0cC1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1odHRwLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUF1QjtBQUN2QixzREFBOEI7QUFDOUIsdUVBQWtFO0FBQ2xFLCtFQUEwRTtBQUMxRSw2REFBd0Q7QUFFeEQsTUFBYSxvQ0FBb0M7SUFJL0M7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksdURBQXlCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxxQ0FBZ0IsQ0FBQyxJQUFJLHFDQUFnQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sZUFBZSxDQUFDLEtBQUs7UUFDMUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQU0sT0FBTyxFQUFDLEVBQUU7WUFDN0MsSUFBSSxjQUFJLENBQUMsYUFBYSxJQUFJLGNBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO2dCQUN4RCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFDckMsY0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUNyQixFQUFFLENBQUM7YUFDSjtZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQzdCLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1lBQ04sTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUNFLFdBQVc7Z0JBQ1gsV0FBVyxDQUFDLE1BQU0sS0FBSyxHQUFHO2dCQUMxQixXQUFXLENBQUMsTUFBTTtnQkFDbEIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPO2dCQUMxQixXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQ3hDO2dCQUNBLE9BQU8sSUFBSSxDQUFDLFdBQVc7cUJBQ3BCLFlBQVksRUFBRTtxQkFDZCxLQUFLLENBQUMsQ0FBTSxlQUFlLEVBQUMsRUFBRTtvQkFDN0IsMENBQTBDO29CQUMxQyw4Q0FBOEM7b0JBQzlDLE9BQU8sZUFBZSxDQUFDO29CQUN2QixLQUFLO2dCQUNQLENBQUMsQ0FBQSxDQUFDO3FCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDWCxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDdkMsTUFBTSxhQUFhLEdBQUc7d0JBQ3BCLFdBQVcsRUFBRSxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDO3dCQUN4QyxZQUFZLEVBQUUsZ0JBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQztxQkFDM0MsQ0FBQztvQkFDRixPQUFPLElBQUksQ0FBQyxnQkFBZ0I7eUJBQ3pCLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDO3lCQUMzRCxJQUFJLENBQUMsR0FBRyxFQUFFO3dCQUNULE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQzt3QkFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLFVBQVUsZ0JBQUMsQ0FBQyxHQUFHLENBQ3JELElBQUksRUFDSixjQUFjLENBQ2YsRUFBRSxDQUFDO3dCQUNKLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBL0RELG9GQStEQyJ9