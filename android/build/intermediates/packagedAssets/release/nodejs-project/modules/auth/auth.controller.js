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
const setting_db_context_1 = require("../../shared/database/setting-db-context");
const user_vm_1 = require("../user/user.vm");
const auth_service_1 = require("./auth.service");
const auth_vm_1 = require("./auth.vm");
const login_service_1 = require("./login.service");
function newAuthService() {
    return new auth_service_1.AuthService(new setting_db_context_1.SettingDBContext());
}
function newLoginService() {
    return new login_service_1.LoginService(new main_db_context_1.MainDBContext());
}
let AuthController = class AuthController {
    registerAuthKey({ authKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            const outletData = yield newAuthService().registerAuthKey(authKey);
            return outletData;
        });
    }
    loginUser({ userId, pinNumber }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield newLoginService().loginUser(userId, pinNumber);
            return user;
        });
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_vm_1.AuthRegisterPayloadVM]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerAuthKey", null);
__decorate([
    common_1.Post('login/login'),
    nestjs_swagger_1.ApiOkResponse({ type: user_vm_1.UserVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_vm_1.AuthLoginPayloadVM]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
AuthController = __decorate([
    nestjs_swagger_1.ApiUseTags('Auth'),
    common_1.Controller()
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLGlGQUE0RTtBQUM1RSw2Q0FBeUM7QUFDekMsaURBQTZDO0FBQzdDLHVDQUFzRTtBQUN0RSxtREFBK0M7QUFFL0MsU0FBUyxjQUFjO0lBQ3JCLE9BQU8sSUFBSSwwQkFBVyxDQUFDLElBQUkscUNBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxTQUFTLGVBQWU7SUFDdEIsT0FBTyxJQUFJLDRCQUFZLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBSUQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUVaLGVBQWUsQ0FBUyxFQUFFLE9BQU8sRUFBeUI7O1lBQ3JFLE1BQU0sVUFBVSxHQUFHLE1BQU0sY0FBYyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5FLE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUlZLFNBQVMsQ0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQXNCOztZQUN0RSxNQUFNLElBQUksR0FBRyxNQUFNLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFbEUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRixDQUFBO0FBYkM7SUFEQyxhQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2EsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cUNBQWMsK0JBQXFCOztxREFJdEU7QUFJRDtJQUZDLGFBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkIsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBTSxFQUFFLENBQUM7SUFDUixXQUFBLGFBQUksRUFBRSxDQUFBOztxQ0FBd0IsNEJBQWtCOzsrQ0FJdkU7QUFkVSxjQUFjO0lBRjFCLDJCQUFVLENBQUMsTUFBTSxDQUFDO0lBQ2xCLG1CQUFVLEVBQUU7R0FDQSxjQUFjLENBZTFCO0FBZlksd0NBQWMifQ==