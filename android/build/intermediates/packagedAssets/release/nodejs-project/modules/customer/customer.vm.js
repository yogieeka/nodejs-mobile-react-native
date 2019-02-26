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
class CustomerVM extends base_vm_1.BaseEntityResponseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "id", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "firstName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "lastName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "displayName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "address", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "company", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "phone", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "email", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerVM.prototype, "gender", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], CustomerVM.prototype, "dateOfBirth", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], CustomerVM.prototype, "isSync", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], CustomerVM.prototype, "syncDate", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], CustomerVM.prototype, "lastEdit", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", Boolean)
], CustomerVM.prototype, "deleted", void 0);
exports.CustomerVM = CustomerVM;
class CustomerBasePayloadVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerBasePayloadVM.prototype, "firstName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerBasePayloadVM.prototype, "lastName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerBasePayloadVM.prototype, "displayName", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerBasePayloadVM.prototype, "address", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerBasePayloadVM.prototype, "company", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerBasePayloadVM.prototype, "phone", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerBasePayloadVM.prototype, "email", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], CustomerBasePayloadVM.prototype, "gender", void 0);
exports.CustomerBasePayloadVM = CustomerBasePayloadVM;
class CustomerCreatePayloadVM extends CustomerBasePayloadVM {
}
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CustomerCreatePayloadVM.prototype, "createdByUserId", void 0);
exports.CustomerCreatePayloadVM = CustomerCreatePayloadVM;
class CustomerUpdatePayloadVM extends CustomerCreatePayloadVM {
}
__decorate([
    nestjs_swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CustomerUpdatePayloadVM.prototype, "lastUpdatedByUserId", void 0);
exports.CustomerUpdatePayloadVM = CustomerUpdatePayloadVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9jdXN0b21lci9jdXN0b21lci52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtFQUEyRjtBQUMzRix5REFBbUU7QUFFbkUsTUFBYSxVQUFXLFNBQVEsOEJBQW9CO0NBMkNuRDtBQXpDQztJQURDLHlDQUF3QixFQUFFOztzQ0FDVDtBQUdsQjtJQURDLHlDQUF3QixFQUFFOzs2Q0FDRjtBQUd6QjtJQURDLHlDQUF3QixFQUFFOzs0Q0FDSDtBQUd4QjtJQURDLHlDQUF3QixFQUFFOzsrQ0FDQTtBQUczQjtJQURDLHlDQUF3QixFQUFFOzsyQ0FDSjtBQUd2QjtJQURDLHlDQUF3QixFQUFFOzsyQ0FDSjtBQUd2QjtJQURDLHlDQUF3QixFQUFFOzt5Q0FDTjtBQUdyQjtJQURDLHlDQUF3QixFQUFFOzt5Q0FDTjtBQUdyQjtJQURDLHlDQUF3QixFQUFFOzswQ0FDTDtBQUd0QjtJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUM7OEJBQzdDLElBQUk7K0NBQUM7QUFHekI7SUFEQyx5Q0FBd0IsRUFBRTs7MENBQ0o7QUFHdkI7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDOzhCQUNoRCxJQUFJOzRDQUFDO0FBR3RCO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQzs4QkFDaEQsSUFBSTs0Q0FBQztBQUd0QjtJQURDLHlDQUF3QixFQUFFOzsyQ0FDSDtBQXpDMUIsZ0NBMkNDO0FBRUQsTUFBYSxxQkFBcUI7Q0F5QmpDO0FBdkJDO0lBREMseUNBQXdCLEVBQUU7O3dEQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7O3VEQUNIO0FBR3hCO0lBREMseUNBQXdCLEVBQUU7OzBEQUNBO0FBRzNCO0lBREMseUNBQXdCLEVBQUU7O3NEQUNKO0FBR3ZCO0lBREMseUNBQXdCLEVBQUU7O3NEQUNKO0FBR3ZCO0lBREMseUNBQXdCLEVBQUU7O29EQUNOO0FBR3JCO0lBREMseUNBQXdCLEVBQUU7O29EQUNOO0FBR3JCO0lBREMseUNBQXdCLEVBQUU7O3FEQUNMO0FBdkJ4QixzREF5QkM7QUFFRCxNQUFhLHVCQUF3QixTQUFRLHFCQUFxQjtDQUdqRTtBQURDO0lBREMsaUNBQWdCLEVBQUU7O2dFQUNZO0FBRmpDLDBEQUdDO0FBRUQsTUFBYSx1QkFBd0IsU0FBUSx1QkFBdUI7Q0FHbkU7QUFEQztJQURDLGlDQUFnQixFQUFFOztvRUFDZ0I7QUFGckMsMERBR0MifQ==