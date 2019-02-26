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
const database_util_1 = require("../../shared/utils/database.util");
const math_util_1 = require("../../shared/utils/math.util");
class TaxBaseAmount {
}
exports.TaxBaseAmount = TaxBaseAmount;
class TaxBaseAmounts {
    constructor() {
        this.taxes = [];
        this._taxBaseAmounts = [];
    }
    getAllTaxBaseAmounts() {
        return this._taxBaseAmounts;
    }
    addTaxBaseAmount(taxAmount) {
        const tax = lodash_1.default.find(this.taxes, { taxId: taxAmount.taxId });
        if (tax) {
            const found = lodash_1.default.filter(this._taxBaseAmounts, { taxId: taxAmount.taxId });
            let taxObj;
            if (found.length > 0) {
                taxObj = found[0];
                taxObj.taxBaseAmount = taxObj.taxBaseAmount.plus(taxAmount.taxBaseAmount);
            }
            else if (tax.rate > 0) {
                this._taxBaseAmounts.push({
                    taxId: taxAmount.taxId,
                    taxRate: tax.rate,
                    taxBaseAmount: taxAmount.taxBaseAmount
                });
            }
        }
    }
    calculateAllTaxBaseAmounts(taxInclusive = false) {
        this._taxBaseAmounts.forEach(taxBaseAmount => {
            let taxBaseAmountTotalTax = 0;
            if (taxInclusive) {
                // calculate tax amount if its already included in price
                // ref: https://www.accountingcoach.com/blog/calculate-sales-tax
                const divider = new math_util_1.LDecimal(taxBaseAmount.taxRate)
                    .dividedBy(100)
                    .plus(1);
                taxBaseAmountTotalTax = new math_util_1.LDecimal(taxBaseAmount.taxBaseAmount)
                    .dividedBy(divider)
                    .toDP(2);
            }
            else {
                taxBaseAmountTotalTax = new math_util_1.LDecimal(taxBaseAmount.taxBaseAmount)
                    .times(taxBaseAmount.taxRate)
                    .dividedBy(100)
                    .toDP(2);
            }
            taxBaseAmount.taxAmount = taxBaseAmountTotalTax;
        });
    }
    persistToOrderTax(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.orderTaxRepo) {
                throw `Please assign 'orderTaxRepo' first before calling 'persistToOrderTax'`;
            }
            database_util_1.wrapAsyncFunctionWithTransactionDBMain(() => __awaiter(this, void 0, void 0, function* () {
                const recordToUpsert = this._taxBaseAmounts.map(taxBaseAmount => (Object.assign({}, taxBaseAmount, { orderId })));
                yield this.orderTaxRepo.bulkUpsert(recordToUpsert, {});
            }));
        });
    }
}
exports.TaxBaseAmounts = TaxBaseAmounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGF4Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdGF4L3RheC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXVCO0FBRXZCLG9FQUEwRjtBQUMxRiw0REFBd0Q7QUFJeEQsTUFBYSxhQUFhO0NBS3pCO0FBTEQsc0NBS0M7QUFFRCxNQUFhLGNBQWM7SUFBM0I7UUFFUyxVQUFLLEdBQWlCLEVBQUUsQ0FBQztRQUV4QixvQkFBZSxHQUFvQixFQUFFLENBQUM7SUFnRWhELENBQUM7SUE5RFEsb0JBQW9CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsU0FBd0I7UUFDOUMsTUFBTSxHQUFHLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQWUsQ0FBQztRQUN6RSxJQUFJLEdBQUcsRUFBRTtZQUNQLE1BQU0sS0FBSyxHQUFHLGdCQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDekUsSUFBSSxNQUFNLENBQUM7WUFDWCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM5QyxTQUFTLENBQUMsYUFBYSxDQUN4QixDQUFDO2FBQ0g7aUJBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztvQkFDdEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNqQixhQUFhLEVBQUUsU0FBUyxDQUFDLGFBQWE7aUJBQ3ZDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sMEJBQTBCLENBQUMsZUFBd0IsS0FBSztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUMzQyxJQUFJLHFCQUFxQixHQUFHLENBQUMsQ0FBQztZQUU5QixJQUFJLFlBQVksRUFBRTtnQkFDaEIsd0RBQXdEO2dCQUN4RCxnRUFBZ0U7Z0JBQ2hFLE1BQU0sT0FBTyxHQUFHLElBQUksb0JBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO3FCQUNoRCxTQUFTLENBQUMsR0FBRyxDQUFDO3FCQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxxQkFBcUIsR0FBRyxJQUFJLG9CQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztxQkFDOUQsU0FBUyxDQUFDLE9BQU8sQ0FBQztxQkFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1o7aUJBQU07Z0JBQ0wscUJBQXFCLEdBQUcsSUFBSSxvQkFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7cUJBQzlELEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO3FCQUM1QixTQUFTLENBQUMsR0FBRyxDQUFDO3FCQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNaO1lBRUQsYUFBYSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFWSxpQkFBaUIsQ0FBQyxPQUFlOztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsTUFBTSx1RUFBdUUsQ0FBQzthQUMvRTtZQUVELHNEQUFzQyxDQUFDLEdBQVMsRUFBRTtnQkFDaEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxtQkFDNUQsYUFBYSxJQUNoQixPQUFPLElBQ1AsQ0FBQyxDQUFDO2dCQUVKLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRjtBQXBFRCx3Q0FvRUMifQ==