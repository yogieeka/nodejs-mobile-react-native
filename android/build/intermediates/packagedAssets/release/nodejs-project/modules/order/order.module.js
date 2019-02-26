"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const order_entry_controller_1 = require("./order-entry.controller");
const order_controller_1 = require("./order.controller");
const split_order_module_1 = require("./split/split-order.module");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    common_1.Module({
        imports: [
            split_order_module_1.SplitOrderModule
        ],
        controllers: [
            order_controller_1.OrderController,
            order_entry_controller_1.OrderEntryController,
        ],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvb3JkZXIvb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLHFFQUFnRTtBQUNoRSx5REFBcUQ7QUFDckQsbUVBQThEO0FBVzlELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRyxDQUFBO0FBQWQsV0FBVztJQVR2QixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCxxQ0FBZ0I7U0FDakI7UUFDRCxXQUFXLEVBQUU7WUFDWCxrQ0FBZTtZQUNmLDZDQUFvQjtTQUNyQjtLQUNGLENBQUM7R0FDVyxXQUFXLENBQUc7QUFBZCxrQ0FBVyJ9