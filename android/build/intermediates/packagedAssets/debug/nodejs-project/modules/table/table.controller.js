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
const order_entry_vm_1 = require("../order/order-entry.vm");
const table_service_1 = require("./table.service");
const table_vm_1 = require("./table.vm");
function newTableService() {
    return new table_service_1.TableService(new main_db_context_1.MainDBContext());
}
let TableController = class TableController {
    getTables() {
        return __awaiter(this, void 0, void 0, function* () {
            const tables = yield newTableService().getAllTables();
            return tables;
        });
    }
    getTablesByArea(areaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tables = yield newTableService().getTablesByAreaId(areaId);
            return tables;
        });
    }
    getActiveOrdersByTableId(tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            const activeOrders = yield newTableService().getActiveOrderByTableId(tableId);
            return activeOrders;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: table_vm_1.TableVM }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TableController.prototype, "getTables", null);
__decorate([
    common_1.Get('areas/:id/tables'),
    nestjs_swagger_1.ApiOkResponse({ type: table_vm_1.TableVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "getTablesByArea", null);
__decorate([
    common_1.Get(':id/active/orders'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_vm_1.OrderEntryVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "getActiveOrdersByTableId", null);
TableController = __decorate([
    nestjs_swagger_1.ApiUseTags('Table'),
    common_1.Controller('tables')
], TableController);
exports.TableController = TableController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3RhYmxlL3RhYmxlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLDREQUF1RDtBQUN2RCxtREFBK0M7QUFDL0MseUNBQXFDO0FBRXJDLFNBQVMsZUFBZTtJQUN0QixPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFJRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBR2IsU0FBUzs7WUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUV0RCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFJWSxlQUFlLENBQWMsTUFBYzs7WUFDdEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqRSxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFJWSx3QkFBd0IsQ0FBYyxPQUFlOztZQUNoRSxNQUFNLFlBQVksR0FBRyxNQUFNLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixDQUNsRSxPQUFPLENBQ1IsQ0FBQztZQUVGLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtDQUNGLENBQUE7QUF2QkM7SUFGQyxZQUFHLEVBQUU7SUFDTCw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFPLEVBQUUsQ0FBQzs7OztnREFLaEM7QUFJRDtJQUZDLFlBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN2Qiw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFPLEVBQUUsQ0FBQztJQUNILFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O3NEQUl4QztBQUlEO0lBRkMsWUFBRyxDQUFDLG1CQUFtQixDQUFDO0lBQ3hCLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsNkJBQVksRUFBRSxDQUFDO0lBQ0MsV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7K0RBTWpEO0FBekJVLGVBQWU7SUFGM0IsMkJBQVUsQ0FBQyxPQUFPLENBQUM7SUFDbkIsbUJBQVUsQ0FBQyxRQUFRLENBQUM7R0FDUixlQUFlLENBMEIzQjtBQTFCWSwwQ0FBZSJ9