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
class OutletSettingService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._outletSettingRepo = mainDbContext.outletSettingRepo();
    }
    getAllOutletSetting() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._outletSettingRepo
                    .findAll()
                    .then(outletSetting => {
                    resolve(outletSetting);
                })
                    .catch(reject);
            });
        });
    }
    getOutletSettingById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._outletSettingRepo
                    .findById(id)
                    .then(outletSetting => resolve(outletSetting))
                    .catch(reject);
            });
        });
    }
}
exports.OutletSettingService = OutletSettingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXNldHRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL291dGxldC1zZXR0aW5nL291dGxldC1zZXR0aW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQWEsb0JBQW9CO0lBSS9CLFlBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFWSxtQkFBbUI7O1lBQzlCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxrQkFBa0I7cUJBQ3BCLE9BQU8sRUFBRTtxQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVZLG9CQUFvQixDQUFDLEVBQUU7O1lBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxrQkFBa0I7cUJBQ3BCLFFBQVEsQ0FBQyxFQUFFLENBQUM7cUJBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUM3QyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRjtBQTVCRCxvREE0QkMifQ==