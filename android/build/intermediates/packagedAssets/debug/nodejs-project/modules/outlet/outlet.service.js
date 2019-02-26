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
const outlet_vm_1 = require("./outlet.vm");
class OutletService {
    constructor(settingDbContext, mainDbContext) {
        this._settingDbContext = settingDbContext;
        this._systemSettingRepo = settingDbContext.systemSettingRepo();
        this._accountRepo = settingDbContext.accountRepo();
        this._outletSettingRepo = mainDbContext.outletSettingRepo();
    }
    getOutletInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const systemSetting = yield this._systemSettingRepo.findOne({ where: { id: 1 } });
                    const outletInfo = yield this._accountRepo.findOne({ where: { id: systemSetting.activeAccountId } });
                    const outletSetting = yield this._outletSettingRepo.findOne({ where: { id: 1 } });
                    const result = new outlet_vm_1.OutletVM();
                    result.companyId = outletInfo.companyId;
                    result.companyName = outletInfo.companyName;
                    result.lastSyncTime = outletSetting.lastSyncTime;
                    result.outletId = outletInfo.outletId;
                    result.outletName = outletInfo.outletName;
                    resolve(result);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
}
exports.OutletService = OutletService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vdXRsZXQvb3V0bGV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBLDJDQUF1QztBQUV2QyxNQUFhLGFBQWE7SUFNeEIsWUFBWSxnQkFBa0MsRUFBRSxhQUE0QjtRQUMxRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVZLGFBQWE7O1lBQ3hCLE9BQU8sSUFBSSxPQUFPLENBQUUsQ0FBTyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQzVDLElBQUk7b0JBQ0YsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQztvQkFDOUUsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsZUFBZSxFQUFDLEVBQUMsQ0FBQyxDQUFDO29CQUNqRyxNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDO29CQUM5RSxNQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFRLEVBQUUsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO29CQUN4QyxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7b0JBQzVDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQztvQkFDakQsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO29CQUN0QyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7b0JBQzFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakI7Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNmO1lBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBL0JELHNDQStCQyJ9