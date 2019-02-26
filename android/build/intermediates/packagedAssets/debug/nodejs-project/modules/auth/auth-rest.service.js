"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = __importDefault(require("../../config/constant"));
const http_request_service_1 = require("../../shared/services/http-request.service");
const httpAuth = new http_request_service_1.HttpRequestService(constant_1.default.LUNA_AUTH_API);
const httpPos = new http_request_service_1.HttpRequestService(constant_1.default.LUNA_POS_API);
const buildLoginInfo = Symbol('buildLoginInfo');
class AuthRestService {
    getAuthKey(key) {
        return httpPos.post('/outlet-auth-key/get-auth-key', { key });
    }
    getAuthToken(authKey) {
        const { data } = this[buildLoginInfo](authKey);
        return httpAuth.post('/token', data);
    }
    [buildLoginInfo](authKey) {
        const data = 'grant_type=' +
            'password' +
            '&username=' +
            authKey +
            '&password=' +
            '' +
            '&client_id=' +
            'luna-main-mobile' +
            '&client_secret=' +
            '';
        return { data };
    }
}
exports.AuthRestService = AuthRestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGgtcmVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUVBQTZDO0FBQzdDLHFGQUFnRjtBQUVoRixNQUFNLFFBQVEsR0FBRyxJQUFJLHlDQUFrQixDQUFDLGtCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEUsTUFBTSxPQUFPLEdBQUcsSUFBSSx5Q0FBa0IsQ0FBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRWhELE1BQWEsZUFBZTtJQUNuQixVQUFVLENBQUMsR0FBRztRQUNuQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxZQUFZLENBQUMsT0FBTztRQUN6QixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTztRQUM3QixNQUFNLElBQUksR0FDUixhQUFhO1lBQ2IsVUFBVTtZQUNWLFlBQVk7WUFDWixPQUFPO1lBQ1AsWUFBWTtZQUNaLEVBQUU7WUFDRixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixFQUFFLENBQUM7UUFDTCxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBeEJELDBDQXdCQyJ9