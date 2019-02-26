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
const luna_1 = __importDefault(require("../../luna"));
class SettingDBService {
    static getAuthKey() {
        throw new Error('Method not implemented.');
    }
    constructor(settingDbContext) {
        this._settingDbContext = settingDbContext;
        this._systemSettingRepo = settingDbContext.systemSettingRepo();
        this._accountRepo = settingDbContext.accountRepo();
    }
    //#region SYSTEM_SETTING
    getSystemSetting() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._systemSettingRepo.findOne({ where: { id: 1 } });
        });
    }
    updateSystemSettingActiveAccount(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const systemSetting = yield this.getSystemSetting();
            return systemSetting.updateAttributes({ activeAccountId: accountId });
        });
    }
    //#endregion SYSTEM_SETTING
    //#region ACCOUNT
    getAccount(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this._accountRepo.findOne({
                where: { id: accountId }
            });
            return account;
        });
    }
    getActiveAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const systemSetting = yield this.getSystemSetting();
            if (systemSetting && systemSetting.activeAccountId) {
                const account = yield this.getAccount(systemSetting.activeAccountId);
                return account;
            }
            else {
                return null;
            }
        });
    }
    /**
     * create or update account
     * @param {*} obj
     */
    createOrUpdateAccount(_companyId, outletId, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this._accountRepo.findOne({
                where: { companyId: outletId, outletId }
            });
            let accountResult;
            if (account) {
                accountResult = yield account.updateAttributes(obj);
            }
            else {
                accountResult = yield this._accountRepo.add(obj);
            }
            this.updateActiveAccountInstance(accountResult);
            return accountResult;
        });
    }
    removeAccount(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this._accountRepo.findOne({
                where: { id: accountId }
            });
            if (account) {
                return account.destroy({ force: true });
            }
            return null;
        });
    }
    updateAccountLastSyncTime(accountId, syncTime) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield this.getAccount(accountId);
            if (account) {
                const accountResult = yield account.updateAttributes({
                    lastSyncTime: syncTime
                });
                this.updateActiveAccountInstance(accountResult);
                return accountResult;
            }
            return null;
        });
    }
    /**
     * Update account in luna instance.
     * @param {*} newAccount
     */
    updateActiveAccountInstance(newAccount) {
        if (newAccount &&
            luna_1.default.activeAccount &&
            newAccount.id === luna_1.default.activeAccount.id) {
            luna_1.default.activeAccount = Object.assign(luna_1.default.activeAccount, newAccount);
        }
    }
    getAuthKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.getActiveAccount();
            return lodash_1.default.get(setting, 'authKey');
        });
    }
    getCompanyId() {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.getActiveAccount();
            return lodash_1.default.get(setting, 'companyId');
        });
    }
    getOutletId() {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.getActiveAccount();
            return lodash_1.default.get(setting, 'outletId');
        });
    }
    getLastUserId() {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.getActiveAccount();
            return lodash_1.default.get(setting, 'lastUserId');
        });
    }
    getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.getActiveAccount();
            return lodash_1.default.get(setting, 'accessToken');
        });
    }
    getRefreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.getActiveAccount();
            return lodash_1.default.get(setting, 'refreshToken');
        });
    }
    getLastSeenTime() {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.getActiveAccount();
            return lodash_1.default.get(setting, 'lastSeenTimes');
        });
    }
}
exports.SettingDBService = SettingDBService;
//#endregion ACCOUNT
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9zZXJ2aWNlcy9zZXR0aW5nLWRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUF1QjtBQUN2QixzREFBOEI7QUFNOUIsTUFBYSxnQkFBZ0I7SUFDcEIsTUFBTSxDQUFDLFVBQVU7UUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFNRCxZQUFZLGdCQUFrQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsd0JBQXdCO0lBQ1gsZ0JBQWdCOztZQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtJQUVZLGdDQUFnQyxDQUFDLFNBQVM7O1lBQ3JELE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDcEQsT0FBTyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN4RSxDQUFDO0tBQUE7SUFFRCwyQkFBMkI7SUFFM0IsaUJBQWlCO0lBRUosVUFBVSxDQUFDLFNBQVM7O1lBQy9CLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQzlDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUU7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