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
const nestjs_swagger_1 = require("../../../external/nestjs-swagger");
const main_db_context_1 = require("../../../shared/database/main-db-context");
const order_vm_1 = require("../order.vm");
const split_order_service_1 = require("./split-order.service");
const split_order_vm_1 = require("./split-order.vm");
function newSplitOrderService() {
    return new split_order_service_1.SplitOrderService(new main_db_context_1.MainDBContext());
}
let SplitOrderController = class SplitOrderController {
    init(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const manipulatedSplitOrder = yield newSplitOrderService().init(order);
            return manipulatedSplitOrder;
        });
    }
    add(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const manipulatedSplitOrder = yield newSplitOrderService().add(payload);
            return manipulatedSplitOrder;
        });
    }
    delete({ order, splitOrders, splitOrderIndex }) {
        return __awaiter(this, void 0, void 0, function* () {
            const manipulatedSplitOrder = yield newSplitOrderService().delete(order, splitOrders, splitOrderIndex);
            return manipulatedSplitOrder;
        });
    }
    moveToSplit({ order, splitOrders, lineId, splitOrderIndex }) {
        return __awaiter(this, void 0, void 0, function* () {
            const manipulatedSplitOrder = yield newSplitOrderService().moveTo('split', order, splitOrders, lineId, splitOrderIndex);
            return manipulatedSplitOrder;
        });
    }
    moveToMain({ order, splitOrders, lineId, splitOrderIndex }) {
        return __awaiter(this, void 0, void 0, function* () {
            const manipulatedSplitOrder = yield newSplitOrderService().moveTo('main', order, splitOrders, lineId, splitOrderIndex);
            return manipulatedSplitOrder;
        });
    }
    submit({ order, splitOrders }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield newSplitOrderService().submit(order, splitOrders);
            return result;
        });
    }
};
__decorate([
    common_1.Post('init'),
    nestjs_swagger_1.ApiOkResponse({ type: split_order_vm_1.SplitOrderVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_vm_1.OrderVM]),
    __metadata("design:returntype", Promise)
], SplitOrderController.prototype, "init", null);
__decorate([
    common_1.Post('add'),
    nestjs_swagger_1.ApiOkResponse({ type: split_order_vm_1.SplitOrderVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [split_order_vm_1.SplitOrderVM]),
    __metadata("design:returntype", Promise)
], SplitOrderController.prototype, "add", null);
__decorate([
    common_1.Post('delete'),
    nestjs_swagger_1.ApiOkResponse({ type: split_order_vm_1.SplitOrderVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [split_order_vm_1.SplitOrderDeleteLineVM]),
    __metadata("design:returntype", Promise)
], SplitOrderController.prototype, "delete", null);
__decorate([
    common_1.Post('move-to-split'),
    nestjs_swagger_1.ApiOkResponse({ type: split_order_vm_1.SplitOrderVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [split_order_vm_1.SplitOrderMoveLineVM]),
    __metadata("design:returntype", Promise)
], SplitOrderController.prototype, "moveToSplit", null);
__decorate([
    common_1.Post('move-to-main'),
    nestjs_swagger_1.ApiOkResponse({ type: split_order_vm_1.SplitOrderVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [split_order_vm_1.SplitOrderMoveLineVM]),
    __metadata("design:returntype", Promise)
], SplitOrderController.prototype, "moveToMain", null);
__decorate([
    common_1.Post('submit'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [split_order_vm_1.SplitOrderVM]),
    __metadata("design:returntype", Promise)
], SplitOrderController.prototype, "submit", null);
SplitOrderController = __decorate([
    nestjs_swagger_1.ApiUseTags('Order - Split'),
    common_1.Controller('orders/split')
], SplitOrderController);
exports.SplitOrderController = SplitOrderController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtb3JkZXIuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL3NwbGl0L3NwbGl0LW9yZGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUF3RDtBQUN4RCxxRUFBNkU7QUFDN0UsOEVBQXlFO0FBQ3pFLDBDQUFzQztBQUN0QywrREFBMEQ7QUFDMUQscURBQThGO0FBRTlGLFNBQVMsb0JBQW9CO0lBQzNCLE9BQU8sSUFBSSx1Q0FBaUIsQ0FBQyxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFJRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUdsQixJQUFJLENBQ1AsS0FBYzs7WUFFdEIsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8scUJBQXFCLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBSVksR0FBRyxDQUNOLE9BQXFCOztZQUU3QixNQUFNLHFCQUFxQixHQUFHLE1BQU0sb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEUsT0FBTyxxQkFBcUIsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFJWSxNQUFNLENBQ1QsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBeUI7O1lBRXJFLE1BQU0scUJBQXFCLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3hHLE9BQU8scUJBQXFCLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBSVksV0FBVyxDQUNkLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUF1Qjs7WUFFM0UsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLG9CQUFvQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN4SCxPQUFPLHFCQUFxQixDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUlZLFVBQVUsQ0FDYixFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBdUI7O1lBRTNFLE1BQU0scUJBQXFCLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDdkgsT0FBTyxxQkFBcUIsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFHWSxNQUFNLENBQ1QsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFlOztZQUUxQyxNQUFNLE1BQU0sR0FBRyxNQUFNLG9CQUFvQixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN2RSxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FFRixDQUFBO0FBbkRDO0lBRkMsYUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNaLDhCQUFhLENBQUMsRUFBQyxJQUFJLEVBQUUsNkJBQVksRUFBQyxDQUFDO0lBRWpDLFdBQUEsYUFBSSxFQUFFLENBQUE7O3FDQUFRLGtCQUFPOztnREFJdkI7QUFJRDtJQUZDLGFBQUksQ0FBQyxLQUFLLENBQUM7SUFDWCw4QkFBYSxDQUFDLEVBQUMsSUFBSSxFQUFFLDZCQUFZLEVBQUMsQ0FBQztJQUVqQyxXQUFBLGFBQUksRUFBRSxDQUFBOztxQ0FBVSw2QkFBWTs7K0NBSTlCO0FBSUQ7SUFGQyxhQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2QsOEJBQWEsQ0FBQyxFQUFDLElBQUksRUFBRSw2QkFBWSxFQUFDLENBQUM7SUFFakMsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cUNBQXdDLHVDQUFzQjs7a0RBSXRFO0FBSUQ7SUFGQyxhQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3JCLDhCQUFhLENBQUMsRUFBQyxJQUFJLEVBQUUsNkJBQVksRUFBQyxDQUFDO0lBRWpDLFdBQUEsYUFBSSxFQUFFLENBQUE7O3FDQUFnRCxxQ0FBb0I7O3VEQUk1RTtBQUlEO0lBRkMsYUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNwQiw4QkFBYSxDQUFDLEVBQUMsSUFBSSxFQUFFLDZCQUFZLEVBQUMsQ0FBQztJQUVqQyxXQUFBLGFBQUksRUFBRSxDQUFBOztxQ0FBZ0QscUNBQW9COztzREFJNUU7QUFHRDtJQURDLGFBQUksQ0FBQyxRQUFRLENBQUM7SUFFWixXQUFBLGFBQUksRUFBRSxDQUFBOztxQ0FBdUIsNkJBQVk7O2tEQUkzQztBQXBEVSxvQkFBb0I7SUFGaEMsMkJBQVUsQ0FBQyxlQUFlLENBQUM7SUFDM0IsbUJBQVUsQ0FBQyxjQUFjLENBQUM7R0FDZCxvQkFBb0IsQ0FzRGhDO0FBdERZLG9EQUFvQiJ9