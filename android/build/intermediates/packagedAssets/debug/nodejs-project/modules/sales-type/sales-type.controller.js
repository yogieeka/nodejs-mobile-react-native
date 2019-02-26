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
const sales_type_service_1 = require("./sales-type.service");
const sales_type_vm_1 = require("./sales-type.vm");
function newSalesTypeService() {
    return new sales_type_service_1.SalesTypeService(new main_db_context_1.MainDBContext());
}
let SalesTypeController = class SalesTypeController {
    getSalesTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            const salesTypes = yield newSalesTypeService().getAllSalesType();
            return salesTypes;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [sales_type_vm_1.SalesTypeVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesTypeController.prototype, "getSalesTypes", null);
SalesTypeController = __decorate([
    nestjs_swagger_1.ApiUseTags('Sales Type'),
    common_1.Controller('salestype')
], SalesTypeController);
exports.SalesTypeController = SalesTypeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMtdHlwZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc2FsZXMtdHlwZS9zYWxlcy10eXBlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLDZEQUF3RDtBQUN4RCxtREFBOEM7QUFFOUMsU0FBUyxtQkFBbUI7SUFDMUIsT0FBTyxJQUFJLHFDQUFnQixDQUFDLElBQUksK0JBQWEsRUFBRSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUlELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBR2pCLGFBQWE7O1lBQ3hCLE1BQU0sVUFBVSxHQUFHLE1BQU0sbUJBQW1CLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUVqRSxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBTEM7SUFGQyxZQUFHLEVBQUU7SUFDTCw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsMkJBQVcsQ0FBQyxFQUFFLENBQUM7Ozs7d0RBS3RDO0FBUFUsbUJBQW1CO0lBRi9CLDJCQUFVLENBQUMsWUFBWSxDQUFDO0lBQ3hCLG1CQUFVLENBQUMsV0FBVyxDQUFDO0dBQ1gsbUJBQW1CLENBUS9CO0FBUlksa0RBQW1CIn0=