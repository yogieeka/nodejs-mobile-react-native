"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const http_errors_1 = __importDefault(require("http-errors"));
const lodash_1 = __importDefault(require("lodash"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let ErrorHandlerInterceptor = class ErrorHandlerInterceptor {
    intercept(_context, call$) {
        return call$.pipe(operators_1.catchError(error => this.handleError(error)));
    }
    handleError(error) {
        let targetError;
        const errResponse = lodash_1.default.get(error, 'response');
        if (error.code !== 'ENOTFOUND') {
            const errStatus = lodash_1.default.get(errResponse, 'status');
            const errData = lodash_1.default.get(errResponse, 'data') || error.message || error;
            targetError = http_errors_1.default(errStatus || 500, errData);
        }
        else {
            const urlRequest = lodash_1.default.get(error, 'config.url');
            const msg = urlRequest
                ? `Couldn't make request to ${urlRequest}`
                : `Network Error`;
            targetError = http_errors_1.default(msg);
        }
        return rxjs_1.throwError(new common_1.HttpException(targetError, common_1.HttpStatus.INTERNAL_SERVER_ERROR));
    }
};
ErrorHandlerInterceptor = __decorate([
    common_1.Injectable()
], ErrorHandlerInterceptor);
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvaW50ZXJjZXB0b3IvZXJyb3ItaGFuZGxlci5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUEwRztBQUMxRyw4REFBc0M7QUFDdEMsb0RBQXVCO0FBQ3ZCLCtCQUErRDtBQUMvRCw4Q0FBNEM7QUFHNUMsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDM0IsU0FBUyxDQUNkLFFBQTBCLEVBQzFCLEtBQXNCO1FBRXRCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksV0FBZ0IsQ0FBQztRQUNyQixNQUFNLFdBQVcsR0FBRyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0MsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUM5QixNQUFNLFNBQVMsR0FBRyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0MsTUFBTSxPQUFPLEdBQUcsZ0JBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1lBQ3JFLFdBQVcsR0FBRyxxQkFBVyxDQUFDLFNBQVMsSUFBSSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLE1BQU0sVUFBVSxHQUFHLGdCQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM5QyxNQUFNLEdBQUcsR0FBRyxVQUFVO2dCQUNwQixDQUFDLENBQUMsNEJBQTRCLFVBQVUsRUFBRTtnQkFDMUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztZQUNwQixXQUFXLEdBQUcscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztRQUVELE9BQU8saUJBQVUsQ0FBQyxJQUFJLHNCQUFhLENBQUMsV0FBVyxFQUFFLG1CQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Q0FDRixDQUFBO0FBekJZLHVCQUF1QjtJQURuQyxtQkFBVSxFQUFFO0dBQ0EsdUJBQXVCLENBeUJuQztBQXpCWSwwREFBdUIifQ==