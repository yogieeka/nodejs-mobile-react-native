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
const printer_area_service_1 = require("../../modules/printer-area/printer-area.service");
const database_config_1 = require("../database/database-config");
const main_db_context_1 = require("../database/main-db-context");
const setting_db_context_1 = require("../database/setting-db-context");
const setting_db_service_1 = require("./setting-db.service");
class BootstrapService {
    boot() {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_config_1.databaseConfig.initSettingDB();
            const settingDbService = new setting_db_service_1.SettingDBService(new setting_db_context_1.SettingDBContext());
            const activeAccount = yield settingDbService.getActiveAccount();
            if (activeAccount) {
                luna_1.default.activeAccount = activeAccount;
                yield database_config_1.databaseConfig.initMainDB(activeAccount.companyId, activeAccount.outletId);
                const printerAreaServive = new printer_area_service_1.PrinterAreaService(new main_db_context_1.MainDBContext());
                yield printerAreaServive.seedMain();
            }
        });
    }
}
exports.BootstrapService = BootstrapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3NlcnZpY2VzL2Jvb3RzdHJhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsMEZBQXFGO0FBQ3JGLGlFQUE2RDtBQUM3RCxpRUFBNEQ7QUFDNUQsdUVBQWtFO0FBQ2xFLDZEQUF3RDtBQUV4RCxNQUFhLGdCQUFnQjtJQUNkLElBQUk7O1lBQ2YsTUFBTSxnQ0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxxQ0FBZ0IsQ0FBQyxJQUFJLHFDQUFnQixFQUFFLENBQUMsQ0FBQztZQUN0RSxNQUFNLGFBQWEsR0FBRyxNQUFNLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDaEUsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLGNBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUNuQyxNQUFNLGdDQUFjLENBQUMsVUFBVSxDQUM3QixhQUFhLENBQUMsU0FBUyxFQUN2QixhQUFhLENBQUMsUUFBUSxDQUN2QixDQUFDO2dCQUNGLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx5Q0FBa0IsQ0FBQyxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxNQUFNLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFmRCw0Q0FlQyJ9