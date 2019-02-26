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
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const base_vm_1 = require("../../shared/models/base.vm");
class UserVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UserVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UserVM.prototype, "firstName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UserVM.prototype, "lastName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UserVM.prototype, "fullName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], UserVM.prototype, "allowToPay", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], UserVM.prototype, "allowToCancel", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], UserVM.prototype, "allowToEdit", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UserVM.prototype, "pinNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UserVM.prototype, "pictureLocal", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], UserVM.prototype, "pictureUrl", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], UserVM.prototype, "deleted", void 0);
exports.UserVM = UserVM;
class UserUpdatePayloadVM {
}
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UserUpdatePayloadVM.prototype, "oldPinNumber", void 0);
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UserUpdatePayloadVM.prototype, "newPinNumber", void 0);
exports.UserUpdatePayloadVM = UserUpdatePayloadVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXIvdXNlci52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUEyRjtBQUMzRix5REFBbUU7QUFFbkUsTUFBYSxNQUFPLFNBQVEsOEJBQW9CO0NBa0MvQztBQWhDQztJQURDLHlDQUF3QixFQUFFOztrQ0FDVDtBQUdsQjtJQURDLHlDQUF3QixFQUFFOzt5Q0FDRjtBQUd6QjtJQURDLHlDQUF3QixFQUFFOzt3Q0FDSDtBQUd4QjtJQURDLHlDQUF3QixFQUFFOzt3Q0FDSDtBQUd4QjtJQURDLHlDQUF3QixFQUFFOzswQ0FDQTtBQUczQjtJQURDLHlDQUF3QixFQUFFOzs2Q0FDRztBQUc5QjtJQURDLHlDQUF3QixFQUFFOzsyQ0FDQztBQUc1QjtJQURDLHlDQUF3QixFQUFFOzt5Q0FDRjtBQUd6QjtJQURDLHlDQUF3QixFQUFFOzs0Q0FDQztBQUc1QjtJQURDLHlDQUF3QixFQUFFOzswQ0FDRDtBQUcxQjtJQURDLHlDQUF3QixFQUFFOzt1Q0FDSDtBQWhDMUIsd0JBa0NDO0FBRUQsTUFBYSxtQkFBbUI7Q0FNL0I7QUFKQztJQURDLGlDQUFnQixFQUFFOzt5REFDUztBQUc1QjtJQURDLGlDQUFnQixFQUFFOzt5REFDUztBQUw5QixrREFNQyJ9