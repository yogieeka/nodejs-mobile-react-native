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
const common_service_1 = require("../../shared/services/common.service");
const common_vm_1 = require("./common.vm");
let CommonController = class CommonController {
    validateClientAppVersion(clientAppVersion) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = common_service_1.CommonService.validateClientAppVersion(clientAppVersion);
            return { result };
        });
    }
};
__decorate([
    common_1.Get('validate-client-app-version/:version'),
    nestjs_swagger_1.ApiOkResponse({ type: common_vm_1.CommonValidateAppClientVM }),
    __param(0, common_1.Param('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "validateClientAppVersion", null);
CommonController = __decorate([
    nestjs_swagger_1.ApiUseTags('Common'),
    common_1.Controller('common')
], CommonController);
exports.CommonController = CommonController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21tb24vY29tbW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCxrRUFBMEU7QUFDMUUseUVBQXFFO0FBQ3JFLDJDQUF3RDtBQUl4RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUdkLHdCQUF3QixDQUNqQixnQkFBd0I7O1lBRTFDLE1BQU0sTUFBTSxHQUFHLDhCQUFhLENBQUMsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUV4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDcEIsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQVBDO0lBRkMsWUFBRyxDQUFDLHNDQUFzQyxDQUFDO0lBQzNDLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUscUNBQXlCLEVBQUUsQ0FBQztJQUVoRCxXQUFBLGNBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTs7OztnRUFLbEI7QUFUVSxnQkFBZ0I7SUFGNUIsMkJBQVUsQ0FBQyxRQUFRLENBQUM7SUFDcEIsbUJBQVUsQ0FBQyxRQUFRLENBQUM7R0FDUixnQkFBZ0IsQ0FVNUI7QUFWWSw0Q0FBZ0IifQ==