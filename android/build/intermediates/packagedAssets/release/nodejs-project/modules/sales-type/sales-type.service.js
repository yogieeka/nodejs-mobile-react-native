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
const cache_service_1 = require("../../shared/services/cache.service");
class SalesTypeService {
    constructor(mainDbContext) {
        this._salesTypeRepo = mainDbContext.salesTypeRepo();
    }
    getAllSalesType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (cache_service_1.cache.salesTypes) {
                    return cache_service_1.cache.salesTypes;
                }
                else {
                    const salesTypes = yield this.getSalesTypeFromDB();
                    cache_service_1.cache.salesTypes = salesTypes;
                    return salesTypes;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    getSalesTypeFromDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._salesTypeRepo.findAll({});
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.SalesTypeService = SalesTypeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMtdHlwZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc2FsZXMtdHlwZS9zYWxlcy10eXBlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLHVFQUE0RDtBQUc1RCxNQUFhLGdCQUFnQjtJQUczQixZQUFZLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFWSxlQUFlOztZQUMxQixJQUFJO2dCQUNGLElBQUkscUJBQUssQ0FBQyxVQUFVLEVBQUU7b0JBQ3BCLE9BQU8scUJBQUssQ0FBQyxVQUFVLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQ25ELHFCQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDOUIsT0FBTyxVQUFVLENBQUM7aUJBQ25CO2FBQ0Y7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLEtBQUssQ0FBQzthQUNiO1FBQ0gsQ0FBQztLQUFBO0lBRWEsa0JBQWtCOztZQUM5QixJQUFJO2dCQUNGLE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sS0FBSyxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7Q0FFRjtBQTdCRCw0Q0E2QkMifQ==