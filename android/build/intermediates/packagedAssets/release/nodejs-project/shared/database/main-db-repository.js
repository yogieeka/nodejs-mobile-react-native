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
class MainDBRepository extends base_db_repository_1.BaseDBRepository {
    initTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return database_util_1.initTransactionDBMain();
        });
    }
}
exports.MainDBRepository = MainDBRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1kYi1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9kYXRhYmFzZS9tYWluLWRiLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBEQUErRDtBQUMvRCw2REFBd0Q7QUFFeEQsTUFBYSxnQkFBb0IsU0FBUSxxQ0FBbUI7SUFDN0MsZUFBZTs7WUFDMUIsT0FBTyxxQ0FBcUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7S0FBQTtDQUNGO0FBSkQsNENBSUMifQ==