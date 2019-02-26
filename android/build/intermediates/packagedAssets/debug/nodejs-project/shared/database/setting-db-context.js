"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luna_1 = __importDefault(require("../../luna"));
const setting_db_repository_1 = require("./setting-db-repository");
class SettingDBContext {
    get _props() {
        return {
            systemSettingRepo: new setting_db_repository_1.SettingDBRepository(luna_1.default.settingDB.models.systemSetting),
            accountRepo: new setting_db_repository_1.SettingDBRepository(luna_1.default.settingDB.models.account)
        };
    }
    systemSettingRepo() {
        return this._props.systemSettingRepo;
    }
    accountRepo() {
        return this._props.accountRepo;
    }
}
exports.SettingDBContext = SettingDBContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kYi1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9kYXRhYmFzZS9zZXR0aW5nLWRiLWNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFHOUIsbUVBQThEO0FBRTlELE1BQWEsZ0JBQWdCO0lBQzNCLElBQVcsTUFBTTtRQUNmLE9BQU87WUFDTCxpQkFBaUIsRUFBRSxJQUFJLDJDQUFtQixDQUN4QyxjQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQ3BDO1lBQ0QsV0FBVyxFQUFFLElBQUksMkNBQW1CLENBQ2xDLGNBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDOUI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDdkMsQ0FBQztJQUNNLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFsQkQsNENBa0JDIn0=