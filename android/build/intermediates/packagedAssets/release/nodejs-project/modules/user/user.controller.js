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
const user_service_1 = require("./user.service");
const user_vm_1 = require("./user.vm");
function newUserService() {
    return new user_service_1.UserService(new main_db_context_1.MainDBContext());
}
let UserController = class UserController {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield newUserService().getAllUsers();
            return users;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield newUserService().getUserById(userId);
            return user;
        });
    }
    updateUser(userId, { oldPinNumber, newPinNumber }) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield newUserService().updateUser(oldPinNumber, newPinNumber, userId);
            return updatedUser;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [user_vm_1.UserVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    common_1.Get(':id'),
    nestjs_swagger_1.ApiOkResponse({ type: user_vm_1.UserVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    common_1.Post(':id/update'),
    nestjs_swagger_1.ApiOkResponse({ type: user_vm_1.UserVM }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_vm_1.UserUpdatePayloadVM]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    nestjs_swagger_1.ApiUseTags('User'),
    common_1.Controller('users')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci91c2VyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFvRTtBQUNwRSxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLGlEQUE2QztBQUM3Qyx1Q0FBd0Q7QUFFeEQsU0FBUyxjQUFjO0lBQ3JCLE9BQU8sSUFBSSwwQkFBVyxDQUFDLElBQUksK0JBQWEsRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUlELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFHWixRQUFROztZQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLGNBQWMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5ELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBSVksV0FBVyxDQUFjLE1BQWM7O1lBQ2xELE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBSVksVUFBVSxDQUNSLE1BQWMsRUFDbkIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUF1Qjs7WUFFM0QsTUFBTSxXQUFXLEdBQUcsTUFBTSxjQUFjLEVBQUUsQ0FBQyxVQUFVLENBQ25ELFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxDQUNQLENBQUM7WUFFRixPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBNUJDO0lBRkMsWUFBRyxFQUFFO0lBQ0wsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGdCQUFNLENBQUMsRUFBRSxDQUFDOzs7OzhDQUtqQztBQUlEO0lBRkMsWUFBRyxDQUFDLEtBQUssQ0FBQztJQUNWLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQU0sRUFBRSxDQUFDO0lBQ04sV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7aURBSXBDO0FBSUQ7SUFGQyxhQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2xCLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQU0sRUFBRSxDQUFDO0lBRTdCLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7NkNBQWlDLDZCQUFtQjs7Z0RBUzVEO0FBOUJVLGNBQWM7SUFGMUIsMkJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsbUJBQVUsQ0FBQyxPQUFPLENBQUM7R0FDUCxjQUFjLENBK0IxQjtBQS9CWSx3Q0FBYyJ9