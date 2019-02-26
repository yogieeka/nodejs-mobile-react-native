"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = __importDefault(require("../../config/constant"));
class CommonService {
    static validateClientAppVersion(version) {
        return (+(version.replace('.', '')) >= +(constant_1.default.APP_VERSION.replace('.', '')));
    }
}
exports.CommonService = CommonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUVBQWlEO0FBRWpELE1BQWEsYUFBYTtJQUNqQixNQUFNLENBQUMsd0JBQXdCLENBQUMsT0FBZTtRQUNwRCxPQUFPLENBQ0wsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDNUUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQU5ELHNDQU1DIn0=