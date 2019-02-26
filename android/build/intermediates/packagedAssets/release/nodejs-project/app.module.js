"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const area_module_1 = require("./modules/area/area.module");
const auth_module_1 = require("./modules/auth/auth.module");
const category_module_1 = require("./modules/category/category.module");
const common_module_1 = require("./modules/common/common.module");
const customer_module_1 = require("./modules/customer/customer.module");
const image_module_1 = require("./modules/image/image.module");
const order_module_1 = require("./modules/order/order.module");
const outlet_module_1 = require("./modules/outlet/outlet.module");
const payment_method_module_1 = require("./modules/payment-method/payment-method.module");
const print_module_1 = require("./modules/print/print.module");
const printer_area_module_1 = require("./modules/printer-area/printer-area.module");
const printer_client_module_1 = require("./modules/printer-client/printer-client.module");
const product_module_1 = require("./modules/product/product.module");
const sales_type_module_1 = require("./modules/sales-type/sales-type.module");
const sync_module_1 = require("./modules/sync/sync.module");
const table_module_1 = require("./modules/table/table.module");
const user_module_1 = require("./modules/user/user.module");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            area_module_1.AreaModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            common_module_1.CommonModule,
            customer_module_1.CustomerModule,
            image_module_1.ImageModule,
            order_module_1.OrderModule,
            outlet_module_1.OutletModule,
            payment_method_module_1.PaymentMethodModule,
            printer_area_module_1.PrinterAreaModule,
            printer_client_module_1.PrinterClientModule,
            print_module_1.PrintModule,
            product_module_1.ProductModule,
            sales_type_module_1.SalesTypeModule,
            sync_module_1.SyncModule,
            table_module_1.TableModule,
            user_module_1.UserModule,
        ]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLDREQUF3RDtBQUN4RCw0REFBd0Q7QUFDeEQsd0VBQW9FO0FBQ3BFLGtFQUE4RDtBQUM5RCx3RUFBb0U7QUFDcEUsK0RBQTJEO0FBQzNELCtEQUEyRDtBQUMzRCxrRUFBOEQ7QUFDOUQsMEZBQXFGO0FBQ3JGLCtEQUEyRDtBQUMzRCxvRkFBK0U7QUFDL0UsMEZBQXFGO0FBQ3JGLHFFQUFpRTtBQUNqRSw4RUFBeUU7QUFDekUsNERBQXdEO0FBQ3hELCtEQUEyRDtBQUMzRCw0REFBd0Q7QUF1QnhELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBQUcsQ0FBQTtBQUFwQixpQkFBaUI7SUFyQjdCLGVBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNQLHdCQUFVO1lBQ1Ysd0JBQVU7WUFDVixnQ0FBYztZQUNkLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCwwQkFBVztZQUNYLDBCQUFXO1lBQ1gsNEJBQVk7WUFDWiwyQ0FBbUI7WUFDbkIsdUNBQWlCO1lBQ2pCLDJDQUFtQjtZQUNuQiwwQkFBVztZQUNYLDhCQUFhO1lBQ2IsbUNBQWU7WUFDZix3QkFBVTtZQUNWLDBCQUFXO1lBQ1gsd0JBQVU7U0FDWDtLQUNGLENBQUM7R0FDVyxpQkFBaUIsQ0FBRztBQUFwQiw4Q0FBaUIifQ==