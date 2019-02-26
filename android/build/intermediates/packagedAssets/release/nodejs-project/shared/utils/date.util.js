"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
exports.DateUtils = {
    removeTime(date) {
        const d = moment_1.default(date);
        const dateValue = moment_1.default.utc({
            year: d.year(),
            month: d.month(),
            date: d.date()
        }).toDate();
        return dateValue;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC91dGlscy9kYXRlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFFZixRQUFBLFNBQVMsR0FBRztJQUN2QixVQUFVLENBQUMsSUFBSTtRQUNiLE1BQU0sQ0FBQyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsTUFBTSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDZCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtTQUNmLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNaLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFDIn0=