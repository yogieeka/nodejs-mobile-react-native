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
const printer_client_service_1 = require("./printer-client.service");
const printer_client_vm_1 = require("./printer-client.vm");
function newPrinterClientService() {
    return new printer_client_service_1.PrinterClientService(new main_db_context_1.MainDBContext());
}
let PrinterClientController = class PrinterClientController {
    getPrinterClients() {
        return __awaiter(this, void 0, void 0, function* () {
            const printerClients = yield newPrinterClientService().getAllPrinterClient();
            return printerClients;
        });
    }
    getPrinterClientById(printerClientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const printerClient = yield newPrinterClientService().getPrinterClientId(printerClientId);
            return printerClient;
        });
    }
    getPrinterClientsByPrinterAreaId(printerAreaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const printerClientsFound = yield newPrinterClientService().getPrinterClientByPrinterAreaId(printerAreaId);
            return printerClientsFound;
        });
    }
    getPrinterClientsByDeviceId(deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const printerClientsFound = yield newPrinterClientService().getPrinterClientByDeviceId(deviceId);
            return printerClientsFound;
        });
    }
    createPrinterClient(printerClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdPrinterClient = yield newPrinterClientService().addPrinterClient(printerClient);
            return createdPrinterClient;
        });
    }
    updatePrinterClient(printerClientId, printerClientToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPrinterClient = yield newPrinterClientService().updatePrinterClient(printerClientToUpdate, printerClientId);
            return updatedPrinterClient;
        });
    }
    deletePrinterClient(printerClientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPrinterClient = yield newPrinterClientService().deletePrinterClient(printerClientId);
            return deletedPrinterClient;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [printer_client_vm_1.PrinterClientVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrinterClientController.prototype, "getPrinterClients", null);
__decorate([
    common_1.Get(':id'),
    nestjs_swagger_1.ApiOkResponse({ type: printer_client_vm_1.PrinterClientVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterClientController.prototype, "getPrinterClientById", null);
__decorate([
    common_1.Get(':id/area'),
    nestjs_swagger_1.ApiOkResponse({ type: [printer_client_vm_1.PrinterClientVM] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterClientController.prototype, "getPrinterClientsByPrinterAreaId", null);
__decorate([
    common_1.Get(':id/device'),
    nestjs_swagger_1.ApiOkResponse({ type: [printer_client_vm_1.PrinterClientVM] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterClientController.prototype, "getPrinterClientsByDeviceId", null);
__decorate([
    common_1.Post('create'),
    nestjs_swagger_1.ApiOkResponse({ type: printer_client_vm_1.PrinterClientVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [printer_client_vm_1.PrinterClientCreatePayloadVM]),
    __metadata("design:returntype", Promise)
], PrinterClientController.prototype, "createPrinterClient", null);
__decorate([
    common_1.Put(':id/update'),
    nestjs_swagger_1.ApiOkResponse({ type: printer_client_vm_1.PrinterClientVM }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, printer_client_vm_1.PrinterClientUpdatePayloadVM]),
    __metadata("design:returntype", Promise)
], PrinterClientController.prototype, "updatePrinterClient", null);
__decorate([
    common_1.Delete(':id/delete'),
    nestjs_swagger_1.ApiOkResponse({ type: Boolean }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterClientController.prototype, "deletePrinterClient", null);
PrinterClientController = __decorate([
    nestjs_swagger_1.ApiUseTags('Printer - Client'),
    common_1.Controller('printers/client')
], PrinterClientController);
exports.PrinterClientController = PrinterClientController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1jbGllbnQuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3ByaW50ZXItY2xpZW50L3ByaW50ZXItY2xpZW50LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRjtBQUNqRixrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLHFFQUFnRTtBQUNoRSwyREFBa0g7QUFFbEgsU0FBUyx1QkFBdUI7SUFDOUIsT0FBTyxJQUFJLDZDQUFvQixDQUFDLElBQUksK0JBQWEsRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUlELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBR3JCLGlCQUFpQjs7WUFDNUIsTUFBTSxjQUFjLEdBQUcsTUFBTSx1QkFBdUIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFFN0UsT0FBTyxjQUFjLENBQUM7UUFDeEIsQ0FBQztLQUFBO0lBSVksb0JBQW9CLENBQWMsZUFBdUI7O1lBQ3BFLE1BQU0sYUFBYSxHQUFHLE1BQU0sdUJBQXVCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDdEUsZUFBZSxDQUNoQixDQUFDO1lBRUYsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBSVksZ0NBQWdDLENBQzlCLGFBQXFCOztZQUVsQyxNQUFNLG1CQUFtQixHQUFHLE1BQU0sdUJBQXVCLEVBQUUsQ0FBQywrQkFBK0IsQ0FDekYsYUFBYSxDQUNkLENBQUM7WUFFRixPQUFPLG1CQUFtQixDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUlZLDJCQUEyQixDQUFjLFFBQWdCOztZQUNwRSxNQUFNLG1CQUFtQixHQUFHLE1BQU0sdUJBQXVCLEVBQUUsQ0FBQywwQkFBMEIsQ0FDcEYsUUFBUSxDQUNULENBQUM7WUFFRixPQUFPLG1CQUFtQixDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUlZLG1CQUFtQixDQUN0QixhQUEyQzs7WUFFbkQsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLHVCQUF1QixFQUFFLENBQUMsZ0JBQWdCLENBQzNFLGFBQWEsQ0FDZCxDQUFDO1lBRUYsT0FBTyxvQkFBb0IsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFJWSxtQkFBbUIsQ0FDakIsZUFBdUIsRUFDNUIscUJBQW1EOztZQUUzRCxNQUFNLG9CQUFvQixHQUFHLE1BQU0sdUJBQXVCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FDOUUscUJBQXFCLEVBQ3JCLGVBQWUsQ0FDaEIsQ0FBQztZQUVGLE9BQU8sb0JBQW9CLENBQUM7UUFDOUIsQ0FBQztLQUFBO0lBSVksbUJBQW1CLENBQWMsZUFBdUI7O1lBQ25FLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSx1QkFBdUIsRUFBRSxDQUFDLG1CQUFtQixDQUM5RSxlQUFlLENBQ2hCLENBQUM7WUFFRixPQUFPLG9CQUFvQixDQUFDO1FBQzlCLENBQUM7S0FBQTtDQUNGLENBQUE7QUF6RUM7SUFGQyxZQUFHLEVBQUU7SUFDTCw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsbUNBQWUsQ0FBQyxFQUFFLENBQUM7Ozs7Z0VBSzFDO0FBSUQ7SUFGQyxZQUFHLENBQUMsS0FBSyxDQUFDO0lBQ1YsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxtQ0FBZSxFQUFFLENBQUM7SUFDTixXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OzttRUFNN0M7QUFJRDtJQUZDLFlBQUcsQ0FBQyxVQUFVLENBQUM7SUFDZiw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsbUNBQWUsQ0FBQyxFQUFFLENBQUM7SUFFeEMsV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7K0VBT2I7QUFJRDtJQUZDLFlBQUcsQ0FBQyxZQUFZLENBQUM7SUFDakIsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLG1DQUFlLENBQUMsRUFBRSxDQUFDO0lBQ0QsV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7MEVBTXBEO0FBSUQ7SUFGQyxhQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2QsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxtQ0FBZSxFQUFFLENBQUM7SUFFdEMsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cUNBQWdCLGdEQUE0Qjs7a0VBT3BEO0FBSUQ7SUFGQyxZQUFHLENBQUMsWUFBWSxDQUFDO0lBQ2pCLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsbUNBQWUsRUFBRSxDQUFDO0lBRXRDLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7NkNBQXdCLGdEQUE0Qjs7a0VBUTVEO0FBSUQ7SUFGQyxlQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3BCLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDQyxXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztrRUFNNUM7QUEzRVUsdUJBQXVCO0lBRm5DLDJCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDOUIsbUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQztHQUNqQix1QkFBdUIsQ0E0RW5DO0FBNUVZLDBEQUF1QiJ9