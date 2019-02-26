"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const sequelize_1 = require("sequelize");
const db_row_version_conflict_error_1 = require("../errors/db-row-version-conflict-error");
class BaseDBRepository {
    constructor(tableSet) {
        this._tableSet = tableSet;
    }
    get singlePrimaryKeyFieldName() {
        return this._tableSet.primaryKeyAttributes[0];
    }
    get defaultUpdateAllWhereSpecifier() {
        return _.mapValues(this._tableSet.primaryKeys, (_fieldOption, _fieldName) => {
            return { [sequelize_1.Op.ne]: null };
        });
    }
    dbTable() {
        return this._tableSet;
    }
    initTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            throw 'initTransaction() not implemented';
        });
    }
    find(options = {}, plain = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return plain
                ? this._tableSet.find(options)
                    .then((response) => {
                    return Promise.resolve(response.toJSON());
                })
                : this._tableSet.find(options);
        });
    }
    findAll(options = {}, plain = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return plain
                ? this._tableSet.findAll(options)
                    .then(response => {
                    return Promise.resolve(_.flatMap(response, (x) => x.toJSON()));
                })
                : this._tableSet.findAll(options);
        });
    }
    findById(id, options = {}, plain = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findByPk(id, options, plain);
        });
    }
    findByPk(primaryKey, options = {}, plain = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!_.isObject(primaryKey)) {
                const primaryKeyValue = primaryKey;
                primaryKey = { [this.singlePrimaryKeyFieldName]: primaryKeyValue };
            }
            const whereOption = { where: primaryKey };
            const mergeOptions = _.merge(whereOption, options);
            return plain
                ? this._tableSet.findOne(mergeOptions)
                    .then((response) => {
                    return Promise.resolve(response ? response.toJSON() : response);
                })
                : this._tableSet.findOne(mergeOptions);
        });
    }
    findOne(options = {}, plain = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return plain
                ? this._tableSet.findOne(options)
                    .then((response) => {
                    return Promise.resolve(response.toJSON());
                })
                : this._tableSet.findOne(options);
        });
    }
    upsert(obj, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._tableSet.upsert(obj, options);
        });
    }
    add(obj, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._tableSet.create(obj, options);
        });
    }
    update(obj, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._tableSet.update(obj, options);
        });
    }
    updateWithRowVersion(obj, rowVersion, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options.where)
                options.where = {};
            if (rowVersion) {
                Object.assign(options.where, { rowVersion });
            }
            else {
                Object.assign(options.where, { rowVersion: null });
            }
            const updateResult = yield this._tableSet.update(obj, options);
            if (updateResult[0] <= 0)
                throw new db_row_version_conflict_error_1.DbRowVersionConflictError();
            return updateResult;
        });
    }
    delete(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._tableSet.destroy(options);
        });
    }
    updateAll(obj, options = {}, whereSpecifier = this.defaultUpdateAllWhereSpecifier) {
        return __awaiter(this, void 0, void 0, function* () {
            const targetOptions = Object.assign({}, options, { where: whereSpecifier });
            return this._tableSet.update(obj, targetOptions);
        });
    }
    softDelete(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._tableSet.update({ deleted: true }, options);
        });
    }
    softDeleteAll(options = {}, whereSpecifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.updateAll({ deleted: true }, options, whereSpecifier);
        });
    }
    bulkUpsert(arrayObj, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [];
            arrayObj.forEach(obj => {
                promises.push(this.upsert(obj, options));
            });
            return Promise.all(promises);
        });
    }
}
exports.BaseDBRepository = BaseDBRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYi1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9kYXRhYmFzZS9iYXNlLWRiLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEI7QUFDNUIseUNBQW1EO0FBQ25ELDJGQUFvRjtBQUVwRixNQUFhLGdCQUFnQjtJQWUzQixZQUFZLFFBQVE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQWRELElBQUkseUJBQXlCO1FBQzNCLE9BQWEsSUFBSSxDQUFDLFNBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSw4QkFBOEI7UUFDaEMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUNWLElBQUksQ0FBQyxTQUFVLENBQUMsV0FBVyxFQUNqQyxDQUFDLFlBQVksRUFBRSxVQUFrQixFQUFFLEVBQUU7WUFDbkMsT0FBTyxFQUFFLENBQUMsY0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQU1NLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVZLGVBQWU7O1lBQzFCLE1BQU0sbUNBQW1DLENBQUM7UUFDNUMsQ0FBQztLQUFBO0lBRVksSUFBSSxDQUNmLFVBQWUsRUFBRSxFQUNqQixRQUFpQixLQUFLOztZQUV0QixPQUFPLEtBQUs7Z0JBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDM0IsSUFBSSxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7b0JBQ3RCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FDcEIsUUFBUSxDQUFDLE1BQU0sRUFBTyxDQUN2QixDQUFDO2dCQUNKLENBQUMs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