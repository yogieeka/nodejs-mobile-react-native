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
const constant_1 = __importDefault(require("../../config/constant"));
const http_request_service_1 = require("./http-request.service");
const setting_db_service_1 = require("./setting-db.service");
class AuthenticationHttpService {
    constructor() {
        this.clientId = 'luna-main-mobile';
        this.clientSecret = '';
        this.refreshTokenRunning = false;
        this.refreshTokenObservable;
        this.httpRequestService = new http_request_service_1.HttpRequestService(constant_1.default.LUNA_AUTH_API);
    }
    /**
     * Refresh current token if current token isn't available anymore for authentication.
     */
    refreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = this.buildRefreshInfo(yield setting_db_service_1.SettingDBService.getAuthKey());
            return this.httpRequestService.post('token', data, {});
        });
    }
    login(credentials) {
        const { data } = this.buildLoginInfo(credentials);
        return this.httpRequestService.post('token', data, {});
    }
    /**
     * Build login x-www-form-urlencoded body values.
     */
    buildLoginInfo(credentials) {
        const data = 'grant_type=' +
            'password' +
            '&username=' +
            credentials.username +
            '&password=' +
            credentials.password +
            '&client_id=' +
            this.clientId +
            '&client_secret=' +
            this.clientSecret;
        return { data };
    }
    /**
     * Build refresh token x-www-form-urlencoded body values.
     */
    buildRefreshInfo(authKey) {
        const data = 'grant_type=' +
            'password' +
            '&username=' +
            authKey +
            '&client_id=' +
            this.clientId;
        return { data };
    }
}
exports.AuthenticationHttpService = AuthenticationHttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24taHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUE4QztBQUM5QyxpRUFBNEQ7QUFDNUQsNkRBQXdEO0FBRXhELE1BQWEseUJBQXlCO0lBT3BDO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUU1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSx5Q0FBa0IsQ0FBQyxrQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRDs7T0FFRztJQUNVLFlBQVk7O1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxxQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVNLEtBQUssQ0FBQyxXQUFXO1FBQ3RCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWMsQ0FBQyxXQUFXO1FBQy9CLE1BQU0sSUFBSSxHQUNSLGFBQWE7WUFDYixVQUFVO1lBQ1YsWUFBWTtZQUNaLFdBQVcsQ0FBQyxRQUFRO1lBQ3BCLFlBQVk7WUFDWixXQUFXLENBQUMsUUFBUTtZQUNwQixhQUFhO1lBQ2IsSUFBSSxDQUFDLFFBQVE7WUFDYixpQkFBaUI7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNwQixPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0JBQWdCLENBQUMsT0FBTztRQUM3QixNQUFNLElBQUksR0FDUixhQUFhO1lBQ2IsVUFBVTtZQUNWLFlBQVk7WUFDWixPQUFPO1lBQ1AsYUFBYTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEIsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQTdERCw4REE2REMifQ==