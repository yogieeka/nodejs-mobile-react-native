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
const continuation_local_storage_1 = __importDefault(require("continuation-local-storage"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = __importDefault(require("sequelize"));
const umzug_1 = __importDefault(require("umzug"));
const luna_1 = __importDefault(require("../../luna"));
const file_util_1 = require("../utils/file.util");
const sequelizeDBCLSNamespace = continuation_local_storage_1.default.createNamespace('sequelize-cls');
sequelize_1.default.useCLS(sequelizeDBCLSNamespace);
class DatabaseConfig {
    //#region SETTING_DB
    initSettingDB() {
        return __awaiter(this, void 0, void 0, function* () {
            // first reset exisiting value
            luna_1.default.settingDB = null;
            const config = luna_1.default.config.getConfig();
            const settingDBConfig = config.database.dbSettings;
            const settingDB = new sequelize_1.default(Object.assign({ name: 'setting' }, settingDBConfig));
            const umzugSettingDB = new umzug_1.default({
                storage: 'sequelize',
                storageOptions: {
                    sequelize: settingDB
                },
                migrations: {
                    path: __dirname + '/../../sequelize/migrations/db-setting',
                    pattern: /^\d+[\w-]+(\.js)$/,
                    params: [settingDB.getQueryInterface(), settingDB]
                }
            });
            const targetSettingDBMigrations = [];
            const settingDBMigrations = file_util_1.scanDir(__dirname + '/../../sequelize/migrations/db-setting').filter(file => file.match(/.*(.ts|.js)$/i));
            settingDBMigrations.forEach(settingDBMigration => {
                targetSettingDBMigrations.push(path_1.default.basename(settingDBMigration).replace(/\.[^/.]+$/, ''));
            });
            yield umzugSettingDB.execute({
                migrations: targetSettingDBMigrations,
                method: 'up'
            });
            const settingDBTables = file_util_1.scanDir(__dirname + '/../../sequelize/tables/db-setting').filter(file => file.match(/.*(.ts|.js)$/i));
            settingDBTables.forEach(settingDBTable => {
                settingDB.import(settingDBTable);
            });
            Object.keys(settingDB.models).forEach(settingDBModelName => {
                if (settingDB.models[settingDBModelName].associate) {
                    settingDB.models[settingDBModelName].associate(settingDB.models);
                }
            });
            yield settingDB.sync();
            yield this.seedSettingDB(settingDB);
            luna_1.default.settingDB = settingDB;
        });
    }
    seedSettingDB(settingDB) {
        return __awaiter(this, void 0, void 0, function* () {
            const systemSetting = yield settingDB.models.systemSetting.findOne();
            if (!systemSetting) {
                yield settingDB.models.systemSetting.create({ id: 1 });
            }
        });
    }
    //#endregion SETTING_DB
    //#region MAIN_DB
    initMainDB(companyId, outletId) {
        return __awaiter(this, void 0, void 0, function* () {
            // first reset exisiting value
            luna_1.default.mainDB = null;
            const config = luna_1.default.config.getConfig();
            const dbMainConfig = config.database.dbMain;
            const appDataPath = luna_1.default.config.getAppDataPath();
            const mainDBFilename = `${config.prefix}db_${companyId}_${outletId}.sqlite`;
            dbMainConfig.storage = `${appDataPath}/${mainDBFilename}`;
            const mainDB = new sequelize_1.default(Object.assign({ name: 'main' }, dbMainConfig));
            const umzugMainDB = new umzug_1.default({
                storage: 'sequelize',
                storageOptions: {
                    sequelize: mainDB
                },
                migrations: {
                    path: __dirname + '/../../sequelize/migrations/db-main',
                    pattern: /^\d+[\w-]+(\.js)$/,
                    params: [mainDB.getQueryInterface(), mainDB]
                }
            });
            const targetMainDBMigrations = [];
            const mainDBMigrations = file_util_1.scanDir(__dirname + '/../../sequelize/migrations/db-main').filter(file => file.match(/.*(.ts|.js)$/i));
            mainDBMigrations.forEach(settingDBMigration => {
                targetMainDBMigrations.push(path_1.default.basename(settingDBMigration).replace(/\.[^/.]+$/, ''));
            });
            yield umzugMainDB.execute({
                migrations: targetMainDBMigrations,
                method: 'up'
            });
            const mainDBTables = file_util_1.scanDir(__dirname + '/../../sequelize/tables/db-main').filter(file => file.match(/.*(.ts|.js)$/i));
            mainDBTables.forEach(mainDBTable => {
                mainDB.import(mainDBTable);
            });
            Object.keys(mainDB.models).forEach(mainDBModelName => {
                if (mainDB.models[mainDBModelName].associate) {
                    mainDB.models[mainDBModelName].associate(mainDB.models);
                }
            });
            yield mainDB.sync();
            luna_1.default.mainDB = mainDB;
        });
    }
}
exports.databaseConfig = new DatabaseConfig();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9kYXRhYmFzZS9kYXRhYmFzZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDRGQUE2QztBQUM3QyxnREFBd0I7QUFDeEIsMERBQWtDO0FBQ2xDLGtEQUEwQjtBQUMxQixzREFBOEI7QUFDOUIsa0RBQTZDO0FBRTdDLE1BQU0sdUJBQXVCLEdBQUcsb0NBQUcsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDckUsbUJBQVMsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUUxQyxNQUFNLGNBQWM7SUFDbEIsb0JBQW9CO0lBRVAsYUFBYTs7WUFDeEIsOEJBQThCO1lBQzlCLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRXRCLE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdkMsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDbkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxtQkFBUyxpQkFDN0IsSUFBSSxFQUFFLFNBQVMsSUFDWixlQUFlLEVBQ2xCLENBQUM7WUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLGVBQUssQ0FBQztnQkFDL0IsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLGNBQWMsRUFBRTtvQkFDZCxTQUFTLEVBQUUsU0FBUztpQkFDckI7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxTQUFTLEdBQUcsd0NBQXdDO29CQUMxRCxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxTQUFTLENBQUM7aUJBQ25EO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsTUFBTSx5QkFBeUIsR0FBYSxFQUFFLENBQUM7WUFDL0Ms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