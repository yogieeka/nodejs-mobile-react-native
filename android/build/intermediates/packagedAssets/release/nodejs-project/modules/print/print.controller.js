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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const node_thermal_printer_1 = __importDefault(require("node-thermal-printer"));
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const print_vm_1 = require("./print.vm");
let PrintController = class PrintController {
    printViaNetwork({ ip, port, orderLinesContent }) {
        return __awaiter(this, void 0, void 0, function* () {
            node_thermal_printer_1.default.init({
                type: 'epson',
                interface: 'tcp://' + ip + ':' + port
            });
            orderLinesContent.forEach(line => {
                node_thermal_printer_1.default.println(line);
            });
            node_thermal_printer_1.default.cut();
            return new Promise((resolve, reject) => {
                node_thermal_printer_1.default.execute(function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({ msg: { status: 'success', ip, port } });
                    }
                });
            });
        });
    }
};
__decorate([
    common_1.Post(),
    nestjs_swagger_1.ApiOkResponse({ type: print_vm_1.PrintViaNetworkResponseVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [print_vm_1.PrintViaNetworkPayloadVM]),
    __metadata("design:returntype", Promise)
], PrintController.prototype, "printViaNetwork", null);
PrintController = __decorate([
    nestjs_swagger_1.ApiUseTags('Print'),
    common_1.Controller('print')
], PrintController);
exports.PrintController = PrintController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3ByaW50L3ByaW50LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCxnRkFBMkM7QUFDM0Msa0VBQTBFO0FBQzFFLHlDQUFpRjtBQUlqRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBR2IsZUFBZSxDQUNsQixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQTRCOztZQUVqRSw4QkFBTyxDQUFDLElBQUksQ0FBQztnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsUUFBUSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSTthQUN0QyxDQUFDLENBQUM7WUFFSCxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9CLDhCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBRUgsOEJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVkLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JDLDhCQUFPLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRztvQkFDMUIsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNiO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDbkQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGLENBQUE7QUF4QkM7SUFGQyxhQUFJLEVBQUU7SUFDTiw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9DQUF5QixFQUFFLENBQUM7SUFFaEQsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cUNBQWtDLG1DQUF3Qjs7c0RBc0JsRTtBQTFCVSxlQUFlO0lBRjNCLDJCQUFVLENBQUMsT0FBTyxDQUFDO0lBQ25CLG1CQUFVLENBQUMsT0FBTyxDQUFDO0dBQ1AsZUFBZSxDQTJCM0I7QUEzQlksMENBQWUifQ==