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
const cache_service_1 = require("../../shared/services/cache.service");
class AreaService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._areaRepo = mainDbContext.areaRepo();
        this._tableRepo = mainDbContext.tableRepo();
        this._orderRepo = mainDbContext.orderRepo();
    }
    getAllArea() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activeTableIds = (yield this._orderRepo.findAll({
                    group: ['tableId'],
                    where: { status: 'open' },
                    attributes: ['tableId']
                }, true)).map(o => o.tableId);
                let areas;
                if (cache_service_1.cache.areas) {
                    areas = cache_service_1.cache.areas;
                }
                else {
                    areas = yield this.getAreasFromDB();
                    cache_service_1.cache.areas = areas;
                }
                _.forEach(areas, area => {
                    _.forEach(area.tables, table => {
                        if (activeTableIds.includes(table.id)) {
                            table.inUsed = true;
                        }
                        else {
                            table.inUsed = false;
                        }
                    });
                });
                return areas;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAreaById(areaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._areaRepo
                    .findOne({
                    where: { id: areaId },
                    include: [
                        {
                            model: this._tableRepo.dbTable(),
                            required: false
                        }
                    ]
                })
                    .then(area => resolve(area))
                    .catch(reject);
            });
        });
    }
    getAreasFromDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const areas = yield this._areaRepo.findAll({
                    include: [
                        {
                            model: this._tableRepo.dbTable(),
                            required: false
                        }
                    ]
                });
                return areas;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AreaService = AreaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXJlYS9hcmVhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEI7QUFHNUIsdUVBQTREO0FBTTVELE1BQWEsV0FBVztJQU10QixZQUFZLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFWSxVQUFVOztZQUNyQixJQUFJO2dCQUNGLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FDbkQ7b0JBQ0UsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNsQixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO29CQUN6QixVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUM7aUJBQ3hCLEVBQ0QsSUFBSSxDQUNMLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksS0FBSyxDQUFDO2dCQUNWLElBQUkscUJBQUssQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsS0FBSyxHQUFHLHFCQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3BDLHFCQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztpQkFDckI7Z0JBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDN0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDckMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQ3JCOzZCQUFNOzRCQUNMLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3lCQUN0QjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxLQUFLLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtJQUVZLFdBQVcsQ0FBQyxNQUFNOztZQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsU0FBUztxQkFDWCxPQUFPLENBQUM7b0JBQ1AsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtvQkFDckIsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTs0QkFDaEMsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3FCQUNGO2lCQUNGLENBQUM7cUJBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMzQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFYSxjQUFjOztZQUMxQixJQUFJO2dCQUNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7NEJBQ2hDLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjtxQkFDRjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sS0FBSyxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTdFRCxrQ0E2RUMifQ==