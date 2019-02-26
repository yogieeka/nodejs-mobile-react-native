"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentMethodService {
    constructor(mainDbContext) {
        this._paymentMethodRepo = mainDbContext.paymentMethodRepo();
    }
    getAllPaymentMethod(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._paymentMethodRepo
                    .findAll(options)
                    .then(paymentMethods => {
                    resolve(paymentMethods);
                })
                    .catch(reject);
            });
        });
    }
}
exports.PaymentMethodService = PaymentMethodService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLE1BQWEsb0JBQW9CO0lBRy9CLFlBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFWSxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsRUFBRTs7WUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLGtCQUFrQjtxQkFDcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQztxQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUNyQixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FFRjtBQWxCRCxvREFrQkMifQ==