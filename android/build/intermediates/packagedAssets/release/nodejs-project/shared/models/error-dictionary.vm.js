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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const defer_decorator_decorator_1 = require("../decorator/defer-decorator.decorator");
const base_vm_1 = require("./base.vm");
class ErrorDictionaryItemVM extends base_vm_1.BaseVM {
}
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ErrorDictionaryItemVM.prototype, "errorCode", void 0);
__decorate([
    nestjs_swagger_1.ApiModelPropertyOptional(),
    __metadata("design:type", String)
], ErrorDictionaryItemVM.prototype, "errorMessage", void 0);
exports.ErrorDictionaryItemVM = ErrorDictionaryItemVM;
class ErrorDictionaryVM extends base_vm_1.BaseVM {
    constructor() {
        super(...arguments);
        this.errors = [];
    }
    addError(errorMessage, errorCode = null) {
        this.errors.push(new ErrorDictionaryItemVM({ errorCode, errorMessage }));
        return this;
    }
    clearErrors() {
        this.errors.splice(0, this.errors.length);
        return this;
    }
    count() {
        return this.errors.length;
    }
    getErrorMessageText() {
        if (this.errors.length > 0) {
            return lodash_1.default.map(this.errors, 'errorMessage').join('. ');
        }
        return null;
    }
}
__decorate([
    defer_decorator_decorator_1.DeferDecorator(() => [nestjs_swagger_1.ApiModelPropertyOptional({ type: ErrorDictionaryItemVM })]),
    __metadata("design:type", Array)
], ErrorDictionaryVM.prototype, "errors", void 0);
exports.ErrorDictionaryVM = ErrorDictionaryVM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGljdGlvbmFyeS52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvbW9kZWxzL2Vycm9yLWRpY3Rpb25hcnkudm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBdUI7QUFDdkIsa0VBQXlFO0FBQ3pFLHNGQUF3RTtBQUN4RSx1Q0FBbUM7QUFFbkMsTUFBYSxxQkFBc0IsU0FBUSxnQkFBTTtDQU1oRDtBQUpDO0lBREMseUNBQXdCLEVBQUU7O3dEQUNGO0FBR3pCO0lBREMseUNBQXdCLEVBQUU7OzJEQUNDO0FBTDlCLHNEQU1DO0FBRUQsTUFBYSxpQkFBa0IsU0FBUSxnQkFBTTtJQUE3Qzs7UUFFUyxXQUFNLEdBQTRCLEVBQUUsQ0FBQztJQXVCOUMsQ0FBQztJQXJCUSxRQUFRLENBQUMsWUFBWSxFQUFFLFNBQVMsR0FBRyxJQUFJO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQXFCLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVNLG1CQUFtQjtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPLGdCQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUF2QkM7SUFEQywwQ0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXdCLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2lEQUN0QztBQUY5Qyw4Q0F5QkMifQ==