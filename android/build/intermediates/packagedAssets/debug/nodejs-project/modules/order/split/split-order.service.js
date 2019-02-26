"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const v4_1 = __importDefault(require("uuid/v4"));
const order_service_1 = require("../order.service");
class SplitOrderService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
    }
    init(order) {
        return new Promise(resolve => {
            const newOrderObj = this.createBaseSplitOrder(order);
            const data = {
                order,
                splitOrders: [newOrderObj]
            };
            resolve(data);
        });
    }
    add(payload) {
        return new Promise(resolve => {
            const newOrderObj = this.createBaseSplitOrder(payload.order);
            const splitOrders = payload.splitOrders;
            splitOrders.push(newOrderObj);
            const data = {
                order: payload.order,
                splitOrders
            };
            resolve(data);
        });
    }
    moveTo(type, order, splitOrders, lineId, splitOrderIndex) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const originOrder = type === 'split' ? order : splitOrders[splitOrderIndex];
            const destinationOrder = type === 'split' ? splitOrders[splitOrderIndex] : order;
            const line = _.cloneDeep(_.find(originOrder.lines, { id: lineId }));
            const isExist = _.find(destinationOrder.lines, { id: lineId });
            if (isExist) {
                const lineIndex = _.findIndex(destinationOrder.lines, { id: lineId });
                destinationOrder.lines[lineIndex].qty += 1;
            }
            else {
                destinationOrder.lines.push(_.assign(_.cloneDeep(line), { qty: 1 }));
            }
            if (line.qty > 1) {
                const lineIndex = _.findIndex(originOrder.lines, { id: lineId });
                originOrder.lines[lineIndex].qty -= 1;
            }
            else {
                originOrder.lines = originOrder.lines.filter((l) => l.id !== lineId);
            }
            yield this.orderService().calculateOrderTotals(originOrder);
            yield this.orderService().calculateOrderTotals(destinationOrder);
            resolve({ order, splitOrders });
        }));
    }
    delete(order, splitOrders, splitOrderIndex) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const splitOrder = splitOrders[splitOrderIndex];
            if (splitOrder.lines) {
                splitOrder.lines.forEach(line => {
                    const isExist = _.find(order.lines, { id: line.id });
                    if (isExist) {
                        const lineIndex = _.findIndex(order.lines, { id: line.id });
                        order.lines[lineIndex].qty += line.qty;
                    }
                    else {
                        order.lines.push(line);
                    }
                });
            }
            yield this.orderService().calculateOrderTotals(order);
            resolve({
                order,
                splitOrders: _.filter(splitOrders, (_val, index) => index !== splitOrderIndex)
            });
        }));
    }
    submit(order, splitOrders) {
        return new Promise((resolve, reject) => {
            const promises = [this.orderService().updateOrder(order, order.id)];
            this.regenerateLineIdOfsplitOrders(splitOrders, order.orderNumber);
            splitOrders.forEach(splitOrder => {
                promises.push(this.orderService().addOrder(splitOrder, true));
            });
            Promise.all(promises).then(() => {
                resolve(true);
            }).catch(reject);
        });
    }
    regenerateLineIdOfsplitOrders(splitOrders, mainOrderNumber) {
        splitOrders.forEach((order, index) => {
            order.id = v4_1.default();
            order.orderNumber = `${mainOrderNumber}-${index + 2}`;
            order.lines &&
                order.lines.forEach(line => {
                    line.id = v4_1.default();
                    line.modifiers &&
                        line.modifiers.map(modifier => {
                            modifier.id = v4_1.default();
                        });
                });
        });
        return splitOrders;
    }
    createBaseSplitOrder(mainOder) {
        const relatedData = _.pick(mainOder, [
            'tableId',
            'salesTypeId',
            'serviceChargeRate',
            'serviceChargeTaxId',
            'serviceChargeTaxRate',
            'serviceCharged',
            'taxInclusive',
            'taxOnSales',
            'taxed',
            'cashPaymentAccountId',
            'cashPaymentMethodId'
        ]);
        const newOrder = _.assign({ lines: [] }, relatedData);
        return newOrder;
    }
    orderService() {
        return new order_service_1.OrderService(this._mainDbContext);
    }
}
exports.SplitOrderService = SplitOrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL3NwbGl0L3NwbGl0LW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEI7QUFDNUIsaURBQTJCO0FBRTNCLG9EQUFnRDtBQUVoRCxNQUFhLGlCQUFpQjtJQUc1QixZQUFZLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxJQUFJLENBQUMsS0FBSztRQUNmLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELE1BQU0sSUFBSSxHQUFHO2dCQUNYLEtBQUs7Z0JBQ0wsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQzNCLENBQUM7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sR0FBRyxDQUFDLE9BQU87UUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDeEMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QixNQUFNLElBQUksR0FBRztnQkFDWCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLFdBQVc7YUFDWixDQUFDO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVN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