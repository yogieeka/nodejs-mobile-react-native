"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PrinterClientService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._printerAreaRepo = mainDbContext.printerAreaRepo();
        this._printerClientRepo = mainDbContext.printerClientRepo();
    }
    getAllPrinterClient() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerClientRepo
                    .findAll({
                    include: [
                        {
                            model: this._printerAreaRepo.dbTable(),
                            required: false,
                        }
                    ]
                })
                    .then(printerClient => {
                    resolve(printerClient);
                })
                    .catch(reject);
            });
        });
    }
    getPrinterClientId(printerClientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerClientRepo
                    .findOne({
                    where: { id: printerClientId },
                    include: [
                        {
                            model: this._printerAreaRepo.dbTable(),
                            required: false,
                        }
                    ]
                })
                    .then(printerClient => resolve(printerClient))
                    .catch(reject);
            });
        });
    }
    getPrinterClientByPrinterAreaId(printerAreaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerClientRepo
                    .findAll({
                    where: { printerAreaId },
                    include: [
                        {
                            model: this._printerAreaRepo.dbTable(),
                            required: false,
                        }
                    ]
                })
                    .then(printerClient => {
                    resolve(printerClient);
                })
                    .catch(reject);
            });
        });
    }
    getPrinterClientByDeviceId(deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerClientRepo
                    .findAll({
                    where: { deviceId },
                    include: [
                        {
                            model: this._printerAreaRepo.dbTable(),
                            required: false,
                        }
                    ]
                })
                    .then(printerClient => {
                    resolve(printerClient);
                })
                    .catch(reject);
            });
        });
    }
    addPrinterClient(payloadPrinterClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerClientRepo
                    .findOne({
                    where: {
                        printerAreaId: payloadPrinterClient.printerAreaId,
                        deviceId: payloadPrinterClient.deviceId
                    }
                })
                    .then(printer => {
                    if (printer) {
                        printer
                            .updateAttributes(payloadPrinterClient)
                            .then(printerClient => resolve(printerClient))
                            .catch(reject);
                    }
                    else {
                        this._printerClientRepo
                            .add(payloadPrinterClient)
                            .then(printerClient => resolve(printerClient))
                            .catch(reject);
                    }
                })
                    .catch(reject);
            });
        });
    }
    updatePrinterClient(printerClientObj, printerClientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerClientRepo
                    .findById(printerClientId)
                    .then(printerClient => {
                    printerClient.updateAttributes(printerClientObj);
                    resolve(printerClient);
                })
                    .catch(reject);
            });
        });
    }
    deletePrinterClient(printerClientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerClientRepo
                    .delete(printerClientId)
                    .then(printerClient => {
                    resolve(printerClient);
                })
                    .catch(reject);
            });
        });
    }
}
exports.PrinterClientService = PrinterClientService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1jbGllbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3ByaW50ZXItY2xpZW50L3ByaW50ZXItY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE1BQWEsb0JBQW9CO0lBSy9CLFlBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVZLG1CQUFtQjs7WUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLGtCQUFrQjtxQkFDcEIsT0FBTyxDQUFDO29CQUNQLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs0QkFDdEMsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3FCQUNGO2lCQUNGLENBQUM7cUJBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUNwQixPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxrQkFBa0IsQ0FBQyxlQUFlOztZQUM3QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsa0JBQWtCO3FCQUNwQixPQUFPLENBQUM7b0JBQ1AsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtvQkFD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