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
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_swagger_1 = require("../../../external/nestjs-swagger");
const defer_decorator_decorator_1 = require("../../../shared/decorator/defer-decorator.decorator");
const base_vm_1 = require("../../../shared/models/base.vm");
const product_vm_1 = require("../../product/product.vm");
const product_variant_vm_1 = require("../../product/variant/product-variant.vm");
const tax_vm_1 = require("../../tax/tax.vm");
const user_vm_1 = require("../../user/user.vm");
const order_vm_1 = require("../order.vm");
const order_line_modifier_vm_1 = require("./modifier/order-line-modifier.vm");
class OrderLineVM extends base_vm_1.BaseEntityResponseVM {
    constructor() {
        super(...arguments);
        this.qty = 0;
        this.unitPrice = 0;
        this.modifierPrice = 0;
        this.customDiscount = false;
        this.discountAmount = 0;
        this.total = 0;
        this.serviceCharged = false;
        this.taxed = false;
        this.lineType = 'item';
        this.itemType = 'item';
        // navigations
        this.modifiers = [];
    }
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "orderId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "productId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "productVariantId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "description", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineVM.prototype, "qty", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineVM.prototype, "unitPrice", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineVM.prototype, "modifierPrice", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineVM.prototype, "customDiscount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineVM.prototype, "discountPercent", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineVM.prototype, "discountAmount", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineVM.prototype, "total", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineVM.prototype, "serviceCharged", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineVM.prototype, "taxed", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "taxId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "notes", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Number)
], OrderLineVM.prototype, "sortOrder", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "createdByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderLineVM.prototype, "createdDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "lastUpdateByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date' }),
    __metadata("design:type", Date)
], OrderLineVM.prototype, "lastUpdateDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "cancelledByUserId", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], OrderLineVM.prototype, "cancelled", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], OrderLineVM.prototype, "cancellationReason", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ enum: ['item'] }),
    __metadata("design:type", String)
], OrderLineVM.prototype, "lineType", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ enum: ['item', 'discount'] }),
    __metadata("design:type", String)
], OrderLineVM.prototype, "itemType", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [
        nestjs_swagger_1.ApiModelPropertyOptional({ type: [order_line_modifier_vm_1.OrderLineModifierVM] })
    ]),
    __metadata("design:type", Array)
], OrderLineVM.prototype, "modifiers", void 0);
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: order_vm_1.OrderVM })]),
    __metadata("design:type", order_vm_1.OrderVM)
], OrderLineVM.prototype, "order", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: product_vm_1.ProductVM }),
    __metadata("design:type", product_vm_1.ProductVM)
], OrderLineVM.prototype, "product", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: product_variant_vm_1.ProductVariantVM }),
    __metadata("design:type", product_variant_vm_1.ProductVariantVM)
], OrderLineVM.prototype, "productVariant", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: tax_vm_1.TaxVM }),
    __metadata("design:type", tax_vm_1.TaxVM)
], OrderLineVM.prototype, "tax", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", user_vm_1.UserVM)
], OrderLineVM.prototype, "createdByUser", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", String)
], OrderLineVM.prototype, "lastUpdateByUser", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: user_vm_1.UserVM }),
    __metadata("design:type", String)
], OrderLineVM.prototype, "cancelledByUser", void 0);
exports.OrderLineVM = OrderLineVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItbGluZS52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZGVyL2xpbmUvb3JkZXItbGluZS52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFFQUE0RTtBQUM1RSxtR0FBcUY7QUFDckYsNERBQXNFO0FBQ3RFLHlEQUFxRDtBQUNyRCxpRkFBNEU7QUFDNUUsNkNBQXlDO0FBQ3pDLGdEQUE0QztBQUM1QywwQ0FBc0M7QUFDdEMsOEVBQXdFO0FBRXhFLE1BQWEsV0FBWSxTQUFRLDhCQUFvQjtJQUFyRDs7UUFpQlMsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUdoQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR3RCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRzFCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBTWhDLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRzNCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFHaEMsVUFBSyxHQUFZLEtBQUssQ0FBQztRQWlDdkIsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUcxQixhQUFRLEdBQVcsTUFBTSxDQUFDO1FBRWpDLGNBQWM7UUFJUCxjQUFTLEdBQTBCLEVBQUUsQ0FBQztJQXNCL0MsQ0FBQztDQUFBO0FBdkdDO0lBREMseUNBQXdCLEVBQUU7O3VDQUNUO0FBR2xCO0lBREMseUNBQXdCLEVBQUU7OzRDQUNKO0FBR3ZCO0lBREMseUNBQXdCLEVBQUU7OzhDQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7O3FEQUNLO0FBR2hDO0lBREMseUNBQXdCLEVBQUU7O2dEQUNBO0FBRzNCO0lBREMseUNBQXdCLEVBQUU7O3dDQUNKO0FBR3ZCO0lBREMseUNBQXdCLEVBQUU7OzhDQUNFO0FBRzdCO0lBREMseUNBQXdCLEVBQUU7O2tEQUNNO0FBR2pDO0lBREMseUNBQXdCLEVBQUU7O21EQUNZO0FBR3ZDO0lBREMseUNBQXdCLEVBQUU7O29EQUNJO0FBRy9CO0lBREMseUNBQXdCLEVBQUU7O21EQUNPO0FBR2xDO0lBREMseUNBQXdCLEVBQUU7OzBDQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7O21EQUNZO0FBR3ZDO0lBREMseUNBQXdCLEVBQUU7OzBDQUNHO0FBRzlCO0lBREMseUNBQXdCLEVBQUU7OzBDQUNOO0FBR3JCO0lBREMseUNBQXdCLEVBQUU7OzBDQUNOO0FBR3JCO0lBREMseUNBQXdCLEVBQUU7OzhDQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7O29EQUNJO0FBRy9CO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzs4QkFDekMsSUFBSTtnREFBQztBQUd6QjtJQURDLHlDQUF3QixFQUFFOzt1REFDTztBQUdsQztJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7OEJBQ3RDLElBQUk7bURBQUM7QUFHNUI7SUFEQyx5Q0FBd0IsRUFBRTs7c0RBQ007QUFHakM7SUFEQyx5Q0FBd0IsRUFBRTs7OENBQ0Q7QUFHMUI7SUFEQyx5Q0FBd0IsRUFBRTs7dURBQ087QUFHbEM7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7OzZDQUNaO0FBR2pDO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQzs7NkNBQ3hCO0FBTWpDO0lBSEMsMENBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQix5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLDRDQUFtQixDQUFDLEVBQUUsQ0FBQztLQUMxRCxDQUFDOzs4Q0FDMkM7QUFHN0M7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs4QkFDdEQsa0JBQU87MENBQUM7QUFHdEI7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxzQkFBUyxFQUFFLENBQUM7OEJBQzlCLHNCQUFTOzRDQUFDO0FBRzFCO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUscUNBQWdCLEVBQUUsQ0FBQzs4QkFDOUIscUNBQWdCO21EQUFDO0FBR3hDO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBSyxFQUFFLENBQUM7OEJBQzlCLGNBQUs7d0NBQUM7QUFHbEI7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBTSxFQUFFLENBQUM7OEJBQ3JCLGdCQUFNO2tEQUFDO0FBRzdCO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQU0sRUFBRSxDQUFDOztxREFDWDtBQUdoQztJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFNLEVBQUUsQ0FBQzs7b0RBQ1o7QUF4R2pDLGtDQXlHQyJ9