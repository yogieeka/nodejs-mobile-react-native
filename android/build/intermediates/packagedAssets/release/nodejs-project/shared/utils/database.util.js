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
const luna_1 = __importDefault(require("../../luna"));
const db_transaction_error_1 = require("../errors/db-transaction-error");
exports.initTransactionDBMain = () => __awaiter(this, void 0, void 0, function* () {
    return luna_1.default.mainDB.transaction();
});
exports.initTransactionDBSetting = () => __awaiter(this, void 0, void 0, function* () {
    return luna_1.default.settingDB.transaction();
});
exports.wrapAsyncFunctionWithTransactionDBMain = (targetAsyncFunction) => __awaiter(this, void 0, void 0, function* () {
    return luna_1.default.mainDB.transaction(() => this.wrapAsyncFunctionWithExistingTransaction(targetAsyncFunction));
});
exports.wrapAsyncFunctionWithTransactionDBSetting = (targetAsyncFunction) => __awaiter(this, void 0, void 0, function* () {
    return luna_1.default.settingDB.transaction(() => this.wrapAsyncFunctionWithExistingTransaction(targetAsyncFunction));
});
exports.wrapAsyncFunctionWithExistingTransaction = (targetAsyncFunction) => __awaiter(this, void 0, void 0, function* () {
    return targetAsyncFunction().catch(error => {
        throw new db_transaction_error_1.DbTransactionError(error);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvdXRpbHMvZGF0YWJhc2UudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHlFQUFvRTtBQUV2RCxRQUFBLHFCQUFxQixHQUFHLEdBQVMsRUFBRTtJQUM5QyxPQUFPLGNBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLHdCQUF3QixHQUFHLEdBQVMsRUFBRTtJQUNqRCxPQUFPLGNBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdEMsQ0FBQyxDQUFBLENBQUM7QUFFVyxRQUFBLHNDQUFzQyxHQUFHLENBQ3BELG1CQUF1QyxFQUN2QyxFQUFFO0lBQ0YsT0FBTyxjQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FDbEMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLG1CQUFtQixDQUFDLENBQ25FLENBQUM7QUFDSixDQUFDLENBQUEsQ0FBQztBQUVXLFFBQUEseUNBQXlDLEdBQUcsQ0FDdkQsbUJBQXVDLEVBQ3ZDLEVBQUU7SUFDRixPQUFPLGNBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUNyQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsbUJBQW1CLENBQUMsQ0FDbkUsQ0FBQztBQUNKLENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSx3Q0FBd0MsR0FBRyxDQUN0RCxtQkFBdUMsRUFDdkMsRUFBRTtJQUNGLE9BQU8sbUJBQW1CLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekMsTUFBTSxJQUFJLHlDQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMifQ==