"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const main_db_context_1 = require("../../shared/database/main-db-context");
const payment_method_service_1 = require("./payment-method.service");
const payment_method_vm_1 = require("./payment-method.vm");
function newPaymentMethodService() {
    return new payment_method_service_1.PaymentMethodService(new main_db_context_1.MainDBContext());
}
let PaymentMethodController = class PaymentMethodController {
    getPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentMethods = newPaymentMethodService().getAllPaymentMethod({ order: [['sortOrder', 'ASC']] });
            return paymentMethods;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [payment_method_vm_1.PaymentMethodVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentMethodController.prototype, "getPayments", null);
PaymentMethodController = __decorate([
    nestjs_swagger_1.ApiUseTags('Payment'),
    common_1.Controller('payment')
], PaymentMethodController);
exports.PaymentMethodController = PaymentMethodController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLHFFQUFnRTtBQUNoRSwyREFBc0Q7QUFFdEQsU0FBUyx1QkFBdUI7SUFDOUIsT0FBTyxJQUFJLDZDQUFvQixDQUFDLElBQUksK0JBQWEsRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUlELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBR3JCLFdBQVc7O1lBQ3RCLE1BQU0sY0FBYyxHQUFHLHVCQUF1QixFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUV0RyxPQUFPLGNBQWMsQ0FBQztRQUN4QixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBTEM7SUFGQyxZQUFHLEVBQUU7SUFDTCw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsbUNBQWUsQ0FBQyxFQUFFLENBQUM7Ozs7MERBSzFDO0FBUFUsdUJBQXVCO0lBRm5DLDJCQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3JCLG1CQUFVLENBQUMsU0FBUyxDQUFDO0dBQ1QsdUJBQXVCLENBUW5DO0FBUlksMERBQXVCIn0=