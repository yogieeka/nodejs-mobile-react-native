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
const printer_area_service_1 = require("./printer-area.service");
const printer_area_vm_1 = require("./printer-area.vm");
function newPrinterAreaService() {
    return new printer_area_service_1.PrinterAreaService(new main_db_context_1.MainDBContext());
}
let PrinterAreaController = class PrinterAreaController {
    getPrinterAreasByDeviceId(deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const printerAreas = yield newPrinterAreaService().getByDeviceId(deviceId);
            return printerAreas;
        });
    }
    getPrinterAreas() {
        return __awaiter(this, void 0, void 0, function* () {
            const printerAreas = yield newPrinterAreaService().getAllPrinterArea();
            return printerAreas;
        });
    }
    getPrinterAreaById(printerAreaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const printerArea = yield newPrinterAreaService().getPrinterAreaById(printerAreaId);
            return printerArea;
        });
    }
    createPrinterArea(printerAreaName) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdPrinterArea = yield newPrinterAreaService().addPrinterArea(printerAreaName);
            return createdPrinterArea;
        });
    }
    updatePrinterArea(printerAreaId, printerAreaToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPrinterArea = yield newPrinterAreaService().updatePrinterArea(printerAreaToUpdate, printerAreaId);
            return updatedPrinterArea;
        });
    }
    deletePrinterArea(printerAreaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPrinterArea = yield newPrinterAreaService().deletePrinterArea(printerAreaId);
            return deletedPrinterArea;
        });
    }
};
__decorate([
    common_1.Get('device/:deviceId'),
    nestjs_swagger_1.ApiOkResponse({ type: [printer_area_vm_1.PrinterAreaByDeviceIDVM] }),
    __param(0, common_1.Param('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterAreaController.prototype, "getPrinterAreasByDeviceId", null);
__decorate([
    common_1.Get('area'),
    nestjs_swagger_1.ApiOkResponse({ type: [printer_area_vm_1.PrinterAreaVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrinterAreaController.prototype, "getPrinterAreas", null);
__decorate([
    common_1.Get('area/:id'),
    nestjs_swagger_1.ApiOkResponse({ type: printer_area_vm_1.PrinterAreaVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterAreaController.prototype, "getPrinterAreaById", null);
__decorate([
    common_1.Post('area/create'),
    nestjs_swagger_1.ApiOkResponse({ type: printer_area_vm_1.PrinterAreaVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterAreaController.prototype, "createPrinterArea", null);
__decorate([
    common_1.Put('area/:id/update'),
    nestjs_swagger_1.ApiOkResponse({ type: printer_area_vm_1.PrinterAreaVM }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, printer_area_vm_1.PrinterAreaUpdatePayloadVM]),
    __metadata("design:returntype", Promise)
], PrinterAreaController.prototype, "updatePrinterArea", null);
__decorate([
    common_1.Delete('area/:id/delete'),
    nestjs_swagger_1.ApiOkResponse({ type: Boolean }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterAreaController.prototype, "deletePrinterArea", null);
PrinterAreaController = __decorate([
    nestjs_swagger_1.ApiUseTags('Printer - Area'),
    common_1.Controller('printers')
], PrinterAreaController);
exports.PrinterAreaController = PrinterAreaController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1hcmVhLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9wcmludGVyLWFyZWEvcHJpbnRlci1hcmVhLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQVF3QjtBQUN4QixrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLGlFQUE0RDtBQUM1RCx1REFJMkI7QUFFM0IsU0FBUyxxQkFBcUI7SUFDNUIsT0FBTyxJQUFJLHlDQUFrQixDQUFDLElBQUksK0JBQWEsRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUlELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBR25CLHlCQUF5QixDQUFvQixRQUFnQjs7WUFDeEUsTUFBTSxZQUFZLEdBQUcsTUFBTSxxQkFBcUIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUzRSxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFJWSxlQUFlOztZQUMxQixNQUFNLFlBQVksR0FBRyxNQUFNLHFCQUFxQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUV2RSxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFJWSxrQkFBa0IsQ0FBYyxhQUFxQjs7WUFDaEUsTUFBTSxXQUFXLEdBQUcsTUFBTSxxQkFBcUIsRUFBRSxDQUFDLGtCQUFrQixDQUNsRSxhQUFhLENBQ2QsQ0FBQztZQUVGLE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUM7S0FBQTtJQUlZLGlCQUFpQixDQUFTLGVBQXVCOztZQUM1RCxNQUFNLGtCQUFrQixHQUFHLE1BQU0scUJBQXFCLEVBQUUsQ0FBQyxjQUFjLENBQ3JFLGVBQWUsQ0FDaEIsQ0FBQztZQUVGLE9BQU8sa0JBQWtCLENBQUM7UUFDNUIsQ0FBQztLQUFBO0lBSVksaUJBQWlCLENBQ2YsYUFBcUIsRUFDMUIsbUJBQStDOztZQUV2RCxNQUFNLGtCQUFrQixHQUFHLE1BQU0scUJBQXFCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FDeEUsbUJBQW1CLEVBQ25CLGFBQWEsQ0FDZCxDQUFDO1lBRUYsT0FBTyxrQkFBa0IsQ0FBQztRQUM1QixDQUFDO0tBQUE7SUFJWSxpQkFBaUIsQ0FBYyxhQUFxQjs7WUFDL0QsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLHFCQUFxQixFQUFFLENBQUMsaUJBQWlCLENBQ3hFLGFBQWEsQ0FDZCxDQUFDO1lBRUYsT0FBTyxrQkFBa0IsQ0FBQztRQUM1QixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBekRDO0lBRkMsWUFBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ3ZCLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyx5Q0FBdUIsQ0FBQyxFQUFFLENBQUM7SUFDWCxXQUFBLGNBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTs7OztzRUFJeEQ7QUFJRDtJQUZDLFlBQUcsQ0FBQyxNQUFNLENBQUM7SUFDWCw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsK0JBQWEsQ0FBQyxFQUFFLENBQUM7Ozs7NERBS3hDO0FBSUQ7SUFGQyxZQUFHLENBQUMsVUFBVSxDQUFDO0lBQ2YsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSwrQkFBYSxFQUFFLENBQUM7SUFDTixXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OzsrREFNM0M7QUFJRDtJQUZDLGFBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkIsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSwrQkFBYSxFQUFFLENBQUM7SUFDUCxXQUFBLGFBQUksRUFBRSxDQUFBOzs7OzhEQU1yQztBQUlEO0lBRkMsWUFBRyxDQUFDLGlCQUFpQixDQUFDO0lBQ3RCLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsK0JBQWEsRUFBRSxDQUFDO0lBRXBDLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7NkNBQXNCLDRDQUEwQjs7OERBUXhEO0FBSUQ7SUFGQyxlQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDekIsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNELFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7OzhEQU0xQztBQTNEVSxxQkFBcUI7SUFGakMsMkJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QixtQkFBVSxDQUFDLFVBQVUsQ0FBQztHQUNWLHFCQUFxQixDQTREakM7QUE1RFksc0RBQXFCIn0=