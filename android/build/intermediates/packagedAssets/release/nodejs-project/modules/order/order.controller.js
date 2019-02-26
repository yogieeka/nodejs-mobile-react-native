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
const sync_order_customer_service_1 = require("../sync/sync-order-customer.service");
const order_service_1 = require("./order.service");
const order_vm_1 = require("./order.vm");
function newOrderService() {
    return new order_service_1.OrderService(new main_db_context_1.MainDBContext());
}
function syncOrderCustomerService() {
    return new sync_order_customer_service_1.SyncOrderCustomerService(new main_db_context_1.MainDBContext());
}
let OrderController = class OrderController {
    //#region QUERY
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield newOrderService().getAllOrder();
            return orders;
        });
    }
    getActiveOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield newOrderService().getActiveOrder();
            return orders;
        });
    }
    getOrderHistories() {
        return __awaiter(this, void 0, void 0, function* () {
            const orderHistories = yield newOrderService().getOrderHistories();
            return orderHistories;
        });
    }
    searchActiveOrder({ query }) {
        return __awaiter(this, void 0, void 0, function* () {
            const ordersFound = yield newOrderService().searchActiveOrder(query);
            return ordersFound;
        });
    }
    searchHistoryOrder({ query }) {
        return __awaiter(this, void 0, void 0, function* () {
            const ordersFound = yield newOrderService().searchHistoryOrder(query);
            return ordersFound;
        });
    }
    getOrderById(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield newOrderService().getOrderById(orderId);
            return order;
        });
    }
    //#endregion
    //#region COMMAND
    syncOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const syncedOrders = yield syncOrderCustomerService().syncData();
            return syncedOrders;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [order_vm_1.OrderVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrders", null);
__decorate([
    common_1.Get('active'),
    nestjs_swagger_1.ApiOkResponse({ type: [order_vm_1.OrderVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getActiveOrders", null);
__decorate([
    common_1.Get('history'),
    nestjs_swagger_1.ApiOkResponse({ type: [order_vm_1.OrderVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderHistories", null);
__decorate([
    common_1.Get('active/search'),
    nestjs_swagger_1.ApiOkResponse({ type: [order_vm_1.OrderVM] }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_vm_1.OrderSearchVM]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "searchActiveOrder", null);
__decorate([
    common_1.Get('history/search'),
    nestjs_swagger_1.ApiOkResponse({ type: [order_vm_1.OrderVM] }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_vm_1.OrderSearchVM]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "searchHistoryOrder", null);
__decorate([
    common_1.Get(':id'),
    nestjs_swagger_1.ApiOkResponse({ type: order_vm_1.OrderVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderById", null);
__decorate([
    common_1.Post('sync'),
    nestjs_swagger_1.ApiOkResponse({ type: Boolean }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "syncOrders", null);
OrderController = __decorate([
    nestjs_swagger_1.ApiUseTags('Order'),
    common_1.Controller('orders')
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL29yZGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyRTtBQUMzRSxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLHFGQUErRTtBQUUvRSxtREFBK0M7QUFDL0MseUNBQW9EO0FBRXBELFNBQVMsZUFBZTtJQUN0QixPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLCtCQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxTQUFTLHdCQUF3QjtJQUMvQixPQUFPLElBQUksc0RBQXdCLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBSUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUUxQixlQUFlO0lBSUYsU0FBUzs7WUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFJWSxlQUFlOztZQUMxQixNQUFNLE1BQU0sR0FBRyxNQUFNLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUlZLGlCQUFpQjs7WUFDNUIsTUFBTSxjQUFjLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ25FLE9BQU8sY0FBYyxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUlZLGlCQUFpQixDQUNuQixFQUFDLEtBQUssRUFBZ0I7O1lBRS9CLE1BQU0sV0FBVyxHQUFHLE1BQU0sZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQzNELEtBQUssQ0FDTixDQUFDO1lBRUYsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBSVksa0JBQWtCLENBQ3BCLEVBQUMsS0FBSyxFQUFnQjs7WUFFL0IsTUFBTSxXQUFXLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDNUQsS0FBSyxDQUNOLENBQUM7WUFFRixPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFJWSxZQUFZLENBQWMsT0FBZTs7WUFDcEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFRCxZQUFZO0lBRVosaUJBQWlCO0lBSUosVUFBVTs7WUFDckIsTUFBTSxZQUFZLEdBQUcsTUFBTSx3QkFBd0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRWpFLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtDQUdGLENBQUE7QUEvREM7SUFGQyxZQUFHLEVBQUU7SUFDTCw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQU8sQ0FBQyxFQUFFLENBQUM7Ozs7Z0RBSWxDO0FBSUQ7SUFGQyxZQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2IsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGtCQUFPLENBQUMsRUFBRSxDQUFDOzs7O3NEQUlsQztBQUlEO0lBRkMsWUFBRyxDQUFDLFNBQVMsQ0FBQztJQUNkLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLEVBQUUsQ0FBQzs7Ozt3REFJbEM7QUFJRDtJQUZDLFlBQUcsQ0FBQyxlQUFlLENBQUM7SUFDcEIsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGtCQUFPLENBQUMsRUFBRSxDQUFDO0lBRWhDLFdBQUEsY0FBSyxFQUFFLENBQUE7O3FDQUFVLHdCQUFhOzt3REFPaEM7QUFJRDtJQUZDLFlBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNyQiw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQU8sQ0FBQyxFQUFFLENBQUM7SUFFaEMsV0FBQSxjQUFLLEVBQUUsQ0FBQTs7cUNBQVUsd0JBQWE7O3lEQU9oQztBQUlEO0lBRkMsWUFBRyxDQUFDLEtBQUssQ0FBQztJQUNWLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQU8sRUFBRSxDQUFDO0lBQ04sV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7bURBR3JDO0FBUUQ7SUFGQyxhQUFJLENBQUMsTUFBTSxDQUFDO0lBQ1osOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7OztpREFLaEM7QUFsRVUsZUFBZTtJQUYzQiwyQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUNuQixtQkFBVSxDQUFDLFFBQVEsQ0FBQztHQUNSLGVBQWUsQ0FxRTNCO0FBckVZLDBDQUFlIn0=