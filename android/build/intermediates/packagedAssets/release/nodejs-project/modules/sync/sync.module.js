"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sync_controller_1 = require("./sync.controller");
let SyncModule = class SyncModule {
};
SyncModule = __decorate([
    common_1.Module({
        controllers: [
            sync_controller_1.SyncController,
        ],
    })
], SyncModule);
exports.SyncModule = SyncModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9zeW5jL3N5bmMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLHVEQUFtRDtBQU9uRCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUcsQ0FBQTtBQUFiLFVBQVU7SUFMdEIsZUFBTSxDQUFDO1FBQ04sV0FBVyxFQUFFO1lBQ1gsZ0NBQWM7U0FDZjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUc7QUFBYixnQ0FBVSJ9