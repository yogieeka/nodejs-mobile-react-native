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
const database_util_1 = require("../utils/database.util");
const base_db_repository_1 = require("./base-db-repository");
class SettingDBRepository extends base_db_repository_1.BaseDBRepository {
    initTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return database_util_1.initTransactionDBSetting();
        });
    }
}
exports.SettingDBRepository = SettingDBRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kYi1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9kYXRhYmFzZS9zZXR0aW5nLWRiLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBEQUFrRTtBQUNsRSw2REFBd0Q7QUFFeEQsTUFBYSxtQkFBdUIsU0FBUSxxQ0FBbUI7SUFDaEQsZUFBZTs7WUFDMUIsT0FBTyx3Q0FBd0IsRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FBQTtDQUNGO0FBSkQsa0RBSUMifQ==