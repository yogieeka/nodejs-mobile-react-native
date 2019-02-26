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
const setting_db_context_1 = require("../../shared/database/setting-db-context");
const outlet_service_1 = require("./outlet.service");
const outlet_vm_1 = require("./outlet.vm");
function newOutletService() {
    return new outlet_service_1.OutletService(new setting_db_context_1.SettingDBContext(), new main_db_context_1.MainDBContext());
}
let OutletController = class OutletController {
    getOutletInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield newOutletService().getOutletInfo();
            return result;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: outlet_vm_1.OutletVM }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OutletController.prototype, "getOutletInfo", null);
OutletController = __decorate([
    nestjs_swagger_1.ApiUseTags('Outlet'),
    common_1.Controller('outlet')
], OutletController);
exports.OutletController = OutletController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9vdXRsZXQvb3V0bGV0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLGlGQUE0RTtBQUM1RSxxREFBaUQ7QUFDakQsMkNBQXVDO0FBRXZDLFNBQVMsZ0JBQWdCO0lBQ3ZCLE9BQU8sSUFBSSw4QkFBYSxDQUFDLElBQUkscUNBQWdCLEVBQUUsRUFBRSxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFJRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUdkLGFBQWE7O1lBQ3hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4RCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FFRixDQUFBO0FBTEM7SUFGQyxZQUFHLEVBQUU7SUFDTCw4QkFBYSxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFRLEVBQUMsQ0FBQzs7OztxREFJL0I7QUFOVSxnQkFBZ0I7SUFGNUIsMkJBQVUsQ0FBQyxRQUFRLENBQUM7SUFDcEIsbUJBQVUsQ0FBQyxRQUFRLENBQUM7R0FDUixnQkFBZ0IsQ0FRNUI7QUFSWSw0Q0FBZ0IifQ==