"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const main_db_context_1 = require("../../shared/database/main-db-context");
const table_service_1 = require("../table/table.service");
const area_service_1 = require("./area.service");
const area_vm_1 = require("./area.vm");
function newAreaService() {
    return new area_service_1.AreaService(new main_db_context_1.MainDBContext());
}
function newTableService() {
    return new table_service_1.TableService(new main_db_context_1.MainDBContext());
}
let AreaController = class AreaController {
    getAreas() {
        return __awaiter(this, void 0, void 0, function* () {
            const areas = yield newAreaService().getAllArea();
            return areas;
        });
    }
    getAreaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const area = yield newAreaService().getAreaById(id);
            return area;
        });
    }
    getTablesByAreaId(areaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tables = yield newTableService().getTablesByAreaId(areaId);
            return tables;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [area_vm_1.AreaVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "getAreas", null);
__decorate([
    common_1.Get(':id'),
    nestjs_swagger_1.ApiOkResponse({ type: area_vm_1.AreaVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "getAreaById", null);
__decorate([
    common_1.Get(':id/tables'),
    nestjs_swagger_1.ApiOkResponse({ type: [area_vm_1.AreaVM] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "getTablesByAreaId", null);
AreaController = __decorate([
    nestjs_swagger_1.ApiUseTags('Area'),
    common_1.Controller('areas')
], AreaController);
exports.AreaController = AreaController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXJlYS9hcmVhLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLDBEQUFzRDtBQUN0RCxpREFBNkM7QUFDN0MsdUNBQW1DO0FBRW5DLFNBQVMsY0FBYztJQUNyQixPQUFPLElBQUksMEJBQVcsQ0FBQyxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxTQUFTLGVBQWU7SUFDdEIsT0FBTyxJQUFJLDRCQUFZLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBSUQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUdaLFFBQVE7O1lBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sY0FBYyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFbEQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFJWSxXQUFXLENBQWMsRUFBVTs7WUFDOUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFcEQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFJWSxpQkFBaUIsQ0FBYyxNQUFjOztZQUN4RCxNQUFNLE1BQU0sR0FBRyxNQUFNLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpFLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtDQUNGLENBQUE7QUFyQkM7SUFGQyxZQUFHLEVBQUU7SUFDTCw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQU0sQ0FBQyxFQUFFLENBQUM7Ozs7OENBS2pDO0FBSUQ7SUFGQyxZQUFHLENBQUMsS0FBSyxDQUFDO0lBQ1YsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBTSxFQUFFLENBQUM7SUFDTixXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztpREFJcEM7QUFJRDtJQUZDLFlBQUcsQ0FBQyxZQUFZLENBQUM7SUFDakIsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGdCQUFNLENBQUMsRUFBRSxDQUFDO0lBQ0YsV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7dURBSTFDO0FBdkJVLGNBQWM7SUFGMUIsMkJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsbUJBQVUsQ0FBQyxPQUFPLENBQUM7R0FDUCxjQUFjLENBd0IxQjtBQXhCWSx3Q0FBYyJ9