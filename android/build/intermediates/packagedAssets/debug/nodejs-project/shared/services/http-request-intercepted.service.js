"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const authentication_http_interceptor_service_1 = require("./authentication-http-interceptor.service");
const http_request_axios_service_1 = __importDefault(require("./http-request-axios.service"));
module.exports = class HttpRequestInterceptedService extends http_request_axios_service_1.default {
    constructor(baseURL) {
        super();
        this.axios.defaults.baseURL = baseURL;
        this.axios.defaults.timeout = 30000;
        new authentication_http_interceptor_service_1.AuthenticationHttpInterceptorService().setInterceptors(this.axios);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LWludGVyY2VwdGVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3NlcnZpY2VzL2h0dHAtcmVxdWVzdC1pbnRlcmNlcHRlZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1R0FBaUc7QUFDakcsOEZBQW1FO0FBRW5FLGlCQUFTLE1BQU0sNkJBQThCLFNBQVEsb0NBQXVCO0lBQzFFLFlBQVksT0FBTztRQUNqQixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVwQyxJQUFJLDhFQUFvQyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBQ0YsQ0FBQyJ9