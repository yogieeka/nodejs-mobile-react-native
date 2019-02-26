"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sales_type_controller_1 = require("./sales-type.controller");
let SalesTypeModule = class SalesTypeModule {
};
SalesTypeModule = __decorate([
    common_1.Module({
        controllers: [
            sales_type_controller_1.SalesTypeController,
        ],
    })
], SalesTypeModule);
exports.SalesTypeModule = SalesTypeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMtdHlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9zYWxlcy10eXBlL3NhbGVzLXR5cGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLG1FQUE4RDtBQU85RCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUcsQ0FBQTtBQUFsQixlQUFlO0lBTDNCLGVBQU0sQ0FBQztRQUNOLFdBQVcsRUFBRTtZQUNYLDJDQUFtQjtTQUNwQjtLQUNGLENBQUM7R0FDVyxlQUFlLENBQUc7QUFBbEIsMENBQWUifQ==