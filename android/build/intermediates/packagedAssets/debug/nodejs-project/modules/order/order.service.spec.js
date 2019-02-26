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
const ava_1 = __importDefault(require("ava"));
const main_db_context_1 = require("../../shared/database/main-db-context");
const order_service_1 = require("./order.service");
ava_1.default('Calculate Order Case 1', (t) => __awaiter(this, void 0, void 0, function* () {
    const orderService = new order_service_1.OrderService(new main_db_context_1.MainDBContext());
    const targetOrder = {
        createdAt: '2019-01-13T10:29:22.293Z',
        updatedAt: '2019-01-13T10:29:22.293Z',
        id: 'dcaff510-aac6-4307-a692-c21d84c0fd49',
        orderNumber: '130119-2',
        orderDate: '2019-01-13T00:00:00.000Z',
        orderDateTime: '2019-01-13T10:29:22.259Z',
        customer: null,
        customerId: null,
        customerName: null,
        customerEmail: null,
        customerMobile: null,
        salesType: null,
        salesTypeId: null,
        tableId: null,
        taxInclusive: false,
        lineCount: 1,
        lineTotalQty: 1,
        subTotal: 78000,
        serviceCharged: true,
        serviceChargeRate: 5,
        serviceChargeAmount: 3900,
        serviceChargeTaxId: '960b9591-7724-4753-a52d-ac0b98579676',
        serviceChargeTaxRate: 10,
        taxed: true,
        taxAmount: 0,
        adjustmentAmount: 0,
        total: 81900,
        tenderAmount: null,
        changeAmount: null,
        cashPaymentAccountId: null,
        cashPaymentMethodId: null,
        cashPaymentAmount: null,
        status: 'open',
        createdByUserId: '6d0f3034-42ea-443a-ae5c-4081c278ee34',
        createdDate: '2019-01-13T10:29:22.259Z',
        lastUpdateByUserId: null,
        lastUpdateDate: null,
        paidByUserId: null,
        paymentDate: null,
        cancelledByUserId: null,
        cancellationDate: null,
        cancellationReason: null,
        isSync: false,
        syncDate: null,
        table: null,
        lines: [
            {
                createdAt: '2019-01-13T10:29:22.322Z',
                updatedAt: '2019-01-13T10:29:22.322Z',
                id: '562dd80e-9eb1-4ddf-b5a8-8e3f62069f65',
                orderId: 'dcaff510-aac6-4307-a692-c21d84c0fd49',
                productId: 'a02f0616-2cd2-4fc2-a3ae-31ff1a5df70a',
                printerAreaId: null,
                productVariant: {
                    createdAt: '2019-01-13T10:11:11.815Z',
                    updatedAt: '2019-01-13T10:28:56.548Z',
                    id: 'b113eda5-31dd-456b-8c0e-a6bced299321',
                    productId: 'a02f0616-2cd2-4fc2-a3ae-31ff1a5df70a',
                    sku: '0002',
                    name: 'Ayam Lado Hijau',
                    variantName: null,
                    unitPrice: 78000,
                    isMaster: true,
                    attribute1Value: null,
                    attribute2Value: null,
                    attribute3Value: null,
                    sortOrder: 0,
                    deleted: false
                },
                productVariantId: 'b113eda5-31dd-456b-8c0e-a6bced299321',
                createdByUserId: '6d0f3034-42ea-443a-ae5c-4081c278ee34',
                description: 'Ayam Lado Hijau',
                qty: 1,
                unitPrice: 78000,
                total: 78000,
                serviceCharged: true,
                taxed: false,
                taxId: null,
                createdDate: '2019-01-13T00:00:00.000Z',
                cancellationReason: null,
                notes: null,
                modifierPrice: 0,
                customDiscount: null,
                discountPercent: null,
                discountAmount: null,
                lineType: 'item',
                cancelledByUserId: null,
                isCancelled: false
            }
        ]
    };
    yield orderService.calculateOrderTotals(targetOrder);
    t.true(targetOrder.total === 81900);
    t.true(targetOrder.subTotal === 78000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvb3JkZXIvb3JkZXIuc2VydmljZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBdUI7QUFDdkIsMkVBQXNFO0FBQ3RFLG1EQUErQztBQUUvQyxhQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBTSxDQUFDLEVBQUMsRUFBRTtJQUN2QyxNQUFNLFlBQVksR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztJQUUzRCxNQUFNLFdBQVcsR0FBUTtRQUN2QixTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFNBQVMsRUFBRSwwQkFBMEI7UUFDckMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxXQUFXLEVBQUUsVUFBVTtRQUN2QixTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7UUFDekMsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtRQUNsQixhQUFhLEVBQUUsSUFBSTtRQUNuQixjQUFjLEVBQUUsSUFBSTtRQUNwQixTQUFTLEVBQUUsSUFBSTtRQUNmLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLENBQUM7UUFDWixZQUFZLEVBQUUsQ0FBQztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsY0FBYyxFQUFFLElBQUk7UUFDcEIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGtCQUFrQixFQUFFLHNDQUFzQztRQUMxRCxvQkFBb0IsRUFBRSxFQUFFO1FBQ3hCLEtBQUssRUFBRSxJQUFJO1FBQ1gsU0FBUyxFQUFFLENBQUM7UUFDWixnQkFBZ0IsRUFBRSxDQUFDO1FBQ25CLEtBQUss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