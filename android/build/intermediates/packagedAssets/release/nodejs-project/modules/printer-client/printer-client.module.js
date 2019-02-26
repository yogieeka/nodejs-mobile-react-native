"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const printer_client_controller_1 = require("./printer-client.controller");
let PrinterClientModule = class PrinterClientModule {
};
PrinterClientModule = __decorate([
    common_1.Module({
        controllers: [
            printer_client_controller_1.PrinterClientController,
        ],
    })
], PrinterClientModule);
exports.PrinterClientModule = PrinterClientModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1jbGllbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJpbnRlci1jbGllbnQvcHJpbnRlci1jbGllbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLDJFQUFzRTtBQU90RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUFHLENBQUE7QUFBdEIsbUJBQW1CO0lBTC9CLGVBQU0sQ0FBQztRQUNOLFdBQVcsRUFBRTtZQUNYLG1EQUF1QjtTQUN4QjtLQUNGLENBQUM7R0FDVyxtQkFBbUIsQ0FBRztBQUF0QixrREFBbUIifQ==