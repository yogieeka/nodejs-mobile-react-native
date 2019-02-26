"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_request_axios_service_1 = __importDefault(require("./http-request-axios.service"));
class HttpRequestService extends http_request_axios_service_1.default {
    constructor(baseURL) {
        super();
        this.axios.defaults.baseURL = baseURL;
    }
}
exports.HttpRequestService = HttpRequestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3NlcnZpY2VzL2h0dHAtcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOEZBQW1FO0FBRW5FLE1BQWEsa0JBQW1CLFNBQVEsb0NBQXVCO0lBQzdELFlBQVksT0FBTztRQUNqQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBTEQsZ0RBS0MifQ==