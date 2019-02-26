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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const main_db_context_1 = require("../../shared/database/main-db-context");
const category_service_1 = require("./category.service");
const category_vm_1 = require("./category.vm");
function newCategoryService() {
    return new category_service_1.CategoryService(new main_db_context_1.MainDBContext());
}
let CategoryController = class CategoryController {
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield newCategoryService().getAllCategory();
            return categories;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [category_vm_1.CategoryWithProductCountVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategories", null);
CategoryController = __decorate([
    nestjs_swagger_1.ApiUseTags('Product - Category'),
    common_1.Controller('categories')
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLHlEQUFxRDtBQUNyRCwrQ0FBdUU7QUFFdkUsU0FBUyxrQkFBa0I7SUFDekIsT0FBTyxJQUFJLGtDQUFlLENBQUMsSUFBSSwrQkFBYSxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBSUQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFHaEIsYUFBYTs7WUFDeEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxrQkFBa0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRS9ELE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNGLENBQUE7QUFMQztJQUZDLFlBQUcsRUFBRTtJQUNMLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyx3Q0FBMEIsQ0FBQyxFQUFFLENBQUM7Ozs7dURBS3JEO0FBUFUsa0JBQWtCO0lBRjlCLDJCQUFVLENBQUMsb0JBQW9CLENBQUM7SUFDaEMsbUJBQVUsQ0FBQyxZQUFZLENBQUM7R0FDWixrQkFBa0IsQ0FROUI7QUFSWSxnREFBa0IifQ==