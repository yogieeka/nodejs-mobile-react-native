"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class PrinterAreaService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._printerAreaRepo = mainDbContext.printerAreaRepo();
        this._printerClientRepo = mainDbContext.printerClientRepo();
    }
    seedMain() {
        this._printerAreaRepo.findOne({ where: { name: 'Main' } }).then(main => {
            if (!main) {
                this.addPrinterArea({ name: 'Main' });
            }
        });
    }
    getByDeviceId(deviceId) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this._printerAreaRepo.findAll(),
                this._printerClientRepo.findAll({ where: { deviceId } })
            ])
                .then(([area, client]) => {
                const result = [];
                area.map(a => {
                    const printerClient = lodash_1.default.find(client, { printerAreaId: a.id }) || null;
                    result.push({
                        id: a.id,
                        name: a.name,
                        printerClient,
                    });
                });
                resolve(result);
            })
                .catch(reject);
        });
    }
    getAllPrinterArea() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerAreaRepo
                    .findAll()
                    .then(printerArea => {
                    resolve(printerArea);
                })
                    .catch(reject);
            });
        });
    }
    getPrinterAreaById(printerAreaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerAreaRepo
                    .findOne({
                    where: { id: printerAreaId }
                })
                    .then(printerArea => resolve(printerArea))
                    .catch(reject);
            });
        });
    }
    addPrinterArea(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerAreaRepo
                    .add(name)
                    .then(printerArea => resolve(printerArea))
                    .catch(reject);
            });
        });
    }
    updatePrinterArea(printerAreaObj, printerAreaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerAreaRepo
                    .findById(printerAreaId)
                    .then(printerArea => {
                    printerArea.updateAttributes(printerAreaObj);
                    resolve(printerArea);
                })
                    .catch(reject);
            });
        });
    }
    deletePrinterArea(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._printerAreaRepo
                    .delete({ where: { id } })
                    .then(printerArea => {
                    resolve(printerArea);
                })
                    .catch(reject);
            });
        });
    }
}
exports.PrinterAreaService = PrinterAreaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1hcmVhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9wcmludGVyLWFyZWEvcHJpbnRlci1hcmVhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUF1QjtBQU12QixNQUFhLGtCQUFrQjtJQUs3QixZQUFZLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sYUFBYSxDQUFDLFFBQVE7UUFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO2FBQ3pELENBQUM7aUJBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVB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