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
class BaseVM {
    constructor(data = {}) {
        Object.assign(this, data);
    }
}
exports.BaseVM = BaseVM;
class BaseEntityResponseVM extends BaseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], BaseEntityResponseVM.prototype, "createdAt", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], BaseEntityResponseVM.prototype, "updatedAt", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional({ type: 'string', format: 'date-time' }),
    __metadata("design:type", Date)
], BaseEntityResponseVM.prototype, "deletedAt", void 0);
exports.BaseEntityResponseVM = BaseEntityResponseVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvbW9kZWxzL2Jhc2Uudm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrRUFBeUU7QUFFekUsTUFBYSxNQUFNO0lBQ2pCLFlBQVksSUFBSSxHQUFHLEVBQUU7UUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBSkQsd0JBSUM7QUFFRCxNQUFhLG9CQUFxQixTQUFRLE1BQU07Q0FTL0M7QUFQQztJQURDLHlDQUF3QixDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUM7OEJBQ2hELElBQUk7dURBQUM7QUFHdkI7SUFEQyx5Q0FBd0IsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDOzhCQUNoRCxJQUFJO3VEQUFDO0FBR3ZCO0lBREMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQzs4QkFDaEQsSUFBSTt1REFBQztBQVJ6QixvREFTQyJ9