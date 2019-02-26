"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luna_1 = __importDefault(require("../../luna"));
const outlet_setting_repository_1 = require("../../modules/outlet-setting/outlet-setting.repository");
const main_db_repository_1 = require("./main-db-repository");
class MainDBContext {
    constructor() {
        this._props = {
            areaRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.area),
            categoryRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.category),
            customerRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.customer),
            logsRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.log),
            modifierItemRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.modifierItem),
            modifierRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.modifier),
            orderLineModifierRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.orderLineModifier),
            orderLineRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.orderLine),
            orderRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.order),
            orderPaymentRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.orderPayment),
            orderTaxRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.orderTax),
            outletSettingRepo: new outlet_setting_repository_1.OutletSettingRepository(luna_1.default.mainDB.models.outletSetting),
            paymentMethodRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.paymentMethod),
            printerAreaRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.printerArea),
            printerClientRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.printerClient),
            productRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.product),
            productToModifierRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.productModifierRelation),
            productToCategoryRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.productCategoryRelation),
            productVariantRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.productVariant),
            salesTypeRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.salesType),
            tableRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.table),
            taxRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.tax),
            userRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.user),
            pricelistRepo: new main_db_repository_1.MainDBRepository(luna_1.default.mainDB.models.pricelist)
        };
    }
    areaRepo() {
        return this._props.areaRepo;
    }
    categoryRepo() {
        return this._props.categoryRepo;
    }
    customerRepo() {
        return this._props.customerRepo;
    }
    logsRepo() {
        return this._props.logsRepo;
    }
    modifierItemRepo() {
        return this._props.modifierItemRepo;
    }
    modifierRepo() {
        return this._props.modifierRepo;
    }
    orderRepo() {
        return this._props.orderRepo;
    }
    orderLineModifierRepo() {
        return this._props.orderLineModifierRepo;
    }
    orderLineRepo() {
        return this._props.orderLineRepo;
    }
    orderPaymentRepo() {
        return this._props.orderPaymentRepo;
    }
    orderTaxRepo() {
        return this._props.orderTaxRepo;
    }
    outletSettingRepo() {
        return this._props.outletSettingRepo;
    }
    paymentMethodRepo() {
        return this._props.paymentMethodRepo;
    }
    printerAreaRepo() {
        return this._props.printerAreaRepo;
    }
    printerClientRepo() {
        return this._props.printerClientRepo;
    }
    productRepo() {
        return this._props.productRepo;
    }
    productToModifierRepo() {
        return this._props.productToModifierRepo;
    }
    productToCategoryRepo() {
        return this._props.productToCategoryRepo;
    }
    productVariantRepo() {
        return this._props.productVariantRepo;
    }
    salesTypeRepo() {
        return this._props.salesTypeRepo;
    }
    tableRepo() {
        return this._props.tableRepo;
    }
    taxRepo() {
        return this._props.taxRepo;
    }
    userRepo() {
        return this._props.userRepo;
    }
    pricelistRepo() {
        return this._props.pricelistRepo;
    }
}
exports.MainDBContext = MainDBContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1kYi1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC9kYXRhYmFzZS9tYWluLWRiLWNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFVOUIsc0dBQWlHO0FBZWpHLDZEQUF3RDtBQUV4RCxNQUFhLGFBQWE7SUFBMUI7UUFDUyxXQUFNLEdBQUc7WUFDZCxRQUFRLEVBQUUsSUFBSSxxQ0FBZ0IsQ0FBYyxjQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEUsWUFBWSxFQUFFLElBQUkscUNBQWdCLENBQ2hDLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDNUI7WUFDRCxZQUFZLEVBQUUsSUFBSSxxQ0FBZ0IsQ0FDaEMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUM1QjtZQUNELFFBQVEsRUFBRSxJQUFJLHFDQUFnQixDQUFhLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNsRSxnQkFBZ0IsRUFBRSxJQUFJLHFDQUFnQixDQUNwQyxjQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQ2hDO1lBQ0QsWUFBWSxFQUFFLElBQUkscUNBQWdCLENBQ2hDLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDNUI7WUFDRCxxQkFBcUIsRUFBRSxJQUFJLHFDQUFnQixDQUN6QyxjQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FDckM7WUFDRCxhQUFhLEVBQUUsSUFBSSxxQ0FBZ0IsQ0FDakMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUM3QjtZQUNELFNBQVMsRUFBRSxJQUFJLHFDQUFnQixDQUFlLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN2RSxnQkFB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