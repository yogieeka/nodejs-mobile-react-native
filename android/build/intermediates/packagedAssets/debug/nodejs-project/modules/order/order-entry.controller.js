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
const order_entry_payload_vm_1 = require("./order-entry-payload.vm");
const order_entry_response_vm_1 = require("./order-entry-response.vm");
const order_entry_service_1 = require("./order-entry.service");
const order_entry_vm_1 = require("./order-entry.vm");
function newOrderEntryService() {
    return new order_entry_service_1.OrderEntryService(new main_db_context_1.MainDBContext());
}
let OrderEntryController = class OrderEntryController {
    newOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const newOrder = yield newOrderEntryService().getNewOrderAsync();
            return newOrder;
        });
    }
    getExistingOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield newOrderEntryService().getOrderByIdAsync(orderId);
            return order;
        });
    }
    newOrderLine(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order, productId } = data;
            const result = yield newOrderEntryService().getNewOrderLineAsync(order, productId);
            return result;
        });
    }
    getExistingOrderLine(orderLineId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order } = data;
            const result = yield newOrderEntryService().getOrderLineByIdAsync(order, orderLineId);
            return result;
        });
    }
    updateCustomer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield newOrderEntryService().updateCustomerAsync(data.order, data.customerId);
            return result;
        });
    }
    updateSalesType(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield newOrderEntryService().updateSalesTypeAsync(data.order, data.salesTypeId);
            return result;
        });
    }
    updateTable(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield newOrderEntryService().updateTableAsync(data.order, data.tableId);
            return result;
        });
    }
    updateOrderLine(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order, orderLine, modifiers } = data;
            const result = yield newOrderEntryService().updateOrderLineAsync(order, orderLine, modifiers);
            return result;
        });
    }
    saveOrder(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order, userId } = data;
            const result = yield newOrderEntryService().saveOrderAsync(order, userId);
            return result;
        });
    }
    saveOrderAndPay(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order, userId, payments } = data;
            const result = yield newOrderEntryService().saveOrderAndPayAsync(order, userId, payments);
            return result;
        });
    }
    cancelOrder(orderId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, reason } = data;
            const result = yield newOrderEntryService().cancelOrderAsync(orderId, reason, userId);
            return result;
        });
    }
    mergeOrder(orderId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { targetOrderId, userId } = data;
            const result = yield newOrderEntryService().mergeOrderAsync(orderId, targetOrderId, userId);
            return result;
        });
    }
};
__decorate([
    common_1.Post('new-order'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_response_vm_1.OrderEntryWithRelatedDataResponseVM }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "newOrder", null);
__decorate([
    common_1.Post('existing-order/:id'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_response_vm_1.OrderEntryWithRelatedDataResponseVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "getExistingOrder", null);
__decorate([
    common_1.Post('new-order-line'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_response_vm_1.OrderLineEntryWithRelatedDataResponseVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entry_payload_vm_1.NewOrderLinePayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "newOrderLine", null);
__decorate([
    common_1.Post('existing-order-line/:orderLineId'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_response_vm_1.OrderLineEntryWithRelatedDataResponseVM }),
    __param(0, common_1.Param('orderLineId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, order_entry_payload_vm_1.ExistingOrderLinePayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "getExistingOrderLine", null);
__decorate([
    common_1.Post('update-customer'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_vm_1.OrderEntryVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entry_payload_vm_1.UpdateOrderEntryCustomerPayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "updateCustomer", null);
__decorate([
    common_1.Post('update-sales-type'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_vm_1.OrderEntryVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entry_payload_vm_1.UpdateOrderEntrySalesTypePayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "updateSalesType", null);
__decorate([
    common_1.Post('update-table'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_vm_1.OrderEntryVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entry_payload_vm_1.UpdateOrderEntryTablePayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "updateTable", null);
__decorate([
    common_1.Post('update-order-line'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_vm_1.OrderEntryVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entry_payload_vm_1.UpdateOrderLineEntryPayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "updateOrderLine", null);
__decorate([
    common_1.Post('save-order'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_response_vm_1.SaveOrderEntryResponseVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entry_payload_vm_1.SaveOrderEntryPayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "saveOrder", null);
__decorate([
    common_1.Post('save-order-and-pay'),
    nestjs_swagger_1.ApiOkResponse({ type: order_entry_response_vm_1.SaveOrderEntryResponseVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entry_payload_vm_1.SaveOrderAndPayEntryPayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "saveOrderAndPay", null);
__decorate([
    common_1.Post('cancel-order/:orderId'),
    nestjs_swagger_1.ApiOkResponse({ type: Boolean }),
    __param(0, common_1.Param('orderId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, order_entry_payload_vm_1.CancelOrderEntryPayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "cancelOrder", null);
__decorate([
    common_1.Post('merge-order/:orderId'),
    nestjs_swagger_1.ApiOkResponse({ type: Boolean }),
    __param(0, common_1.Param('orderId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, order_entry_payload_vm_1.MergeOrderEntryPayloadVM]),
    __metadata("design:returntype", Promise)
], OrderEntryController.prototype, "mergeOrder", null);
OrderEntryController = __decorate([
    nestjs_swagger_1.ApiUseTags('Order Entry'),
    common_1.Controller('order-entry')
], OrderEntryController);
exports.OrderEntryController = OrderEntryController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZW50cnkuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL29yZGVyLWVudHJ5LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErRDtBQUMvRCxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLHFFQUFnVjtBQUNoVix1RUFBNEs7QUFDNUssK0RBQTBEO0FBQzFELHFEQUFnRDtBQUVoRCxTQUFTLG9CQUFvQjtJQUMzQixPQUFPLElBQUksdUNBQWlCLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBSUQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFHbEIsUUFBUTs7WUFDbkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDakUsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBSVksZ0JBQWdCLENBQWMsT0FBZTs7WUFDeEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBSVksWUFBWSxDQUFTLElBQTJCOztZQUMzRCxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNsQyxNQUFNLE1BQU0sR0FBRyxNQUFNLG9CQUFvQixFQUFFLENBQUMsb0JBQW9CLENBQzlELEtBQUssRUFDTCxTQUFTLENBQ1YsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUlZLG9CQUFvQixDQUNULFdBQW1CLEVBQ2pDLElBQWdDOztZQUV4QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE1BQU0s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