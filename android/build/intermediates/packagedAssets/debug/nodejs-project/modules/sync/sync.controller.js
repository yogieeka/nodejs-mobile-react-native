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
const sync_schedule_service_1 = require("./sync-schedule.service");
function syncScheduleService() {
    return new sync_schedule_service_1.SyncScheduleService();
}
let SyncController = class SyncController {
    executeSync() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield syncScheduleService().syncExecute();
            return response;
        });
    }
    startSync() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield syncScheduleService().syncStart();
            return true;
        });
    }
    stopSync() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield syncScheduleService().syncStop();
            return response;
        });
    }
};
__decorate([
    common_1.Post('execute'),
    nestjs_swagger_1.ApiOkResponse({ type: Boolean }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SyncController.prototype, "executeSync", null);
__decorate([
    common_1.Post('start'),
    nestjs_swagger_1.ApiOkResponse({ type: Boolean }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SyncController.prototype, "startSync", null);
__decorate([
    common_1.Post('stop'),
    nestjs_swagger_1.ApiOkResponse({ type: Boolean }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SyncController.prototype, "stopSync", null);
SyncController = __decorate([
    nestjs_swagger_1.ApiUseTags('Sync'),
    common_1.Controller('sync')
], SyncController);
exports.SyncController = SyncController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc3luYy9zeW5jLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUNsRCxrRUFBMEU7QUFDMUUsbUVBQThEO0FBRTlELFNBQVMsbUJBQW1CO0lBQzFCLE9BQU8sSUFBSSwyQ0FBbUIsRUFBRSxDQUFDO0FBQ25DLENBQUM7QUFJRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBR1osV0FBVzs7WUFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxtQkFBbUIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTNELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUlZLFNBQVM7O1lBQ3BCLE1BQU0sUUFBUSxHQUFHLE1BQU0sbUJBQW1CLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV6RCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUlZLFFBQVE7O1lBQ25CLE1BQU0sUUFBUSxHQUFHLE1BQU0sbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUV4RCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBckJDO0lBRkMsYUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNmLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7aURBS2hDO0FBSUQ7SUFGQyxhQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2IsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7OzsrQ0FLaEM7QUFJRDtJQUZDLGFBQUksQ0FBQyxNQUFNLENBQUM7SUFDWiw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7OzhDQUtoQztBQXZCVSxjQUFjO0lBRjFCLDJCQUFVLENBQUMsTUFBTSxDQUFDO0lBQ2xCLG1CQUFVLENBQUMsTUFBTSxDQUFDO0dBQ04sY0FBYyxDQXdCMUI7QUF4Qlksd0NBQWMifQ==