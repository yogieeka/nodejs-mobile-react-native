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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const http_1 = require("http");
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const image_service_1 = require("./image.service");
const newImageService = () => {
    return new image_service_1.ImageService();
};
let ImageController = class ImageController {
    getImage(response, imageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield newImageService().getImage(imageId);
            const ext = imageId.split('.')[1];
            response.setHeader('content-type', `image/${ext}`);
            response.writeHead(200, { 'Content-type': `image/${ext}` });
            response.end(image);
        });
    }
};
__decorate([
    common_1.Get(':id'),
    nestjs_swagger_1.ApiOkResponse({ type: 'string', format: 'binary' }),
    __param(0, common_1.Response()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [http_1.ServerResponse, String]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "getImage", null);
ImageController = __decorate([
    nestjs_swagger_1.ApiUseTags('Image'),
    common_1.Controller('images')
], ImageController);
exports.ImageController = ImageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2ltYWdlL2ltYWdlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFrRTtBQUNsRSwrQkFBc0M7QUFDdEMsa0VBQTBFO0FBQzFFLG1EQUErQztBQUUvQyxNQUFNLGVBQWUsR0FBRyxHQUFHLEVBQUU7SUFDM0IsT0FBTyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztBQUM1QixDQUFDLENBQUM7QUFJRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBR2IsUUFBUSxDQUNQLFFBQXdCLEVBQ3ZCLE9BQWU7O1lBRTVCLE1BQU0sS0FBSyxHQUFHLE1BQU0sZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXhELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzVELFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQVhDO0lBRkMsWUFBRyxDQUFDLEtBQUssQ0FBQztJQUNWLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUVqRCxXQUFBLGlCQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOztxQ0FEVSxxQkFBYzs7K0NBU3JDO0FBYlUsZUFBZTtJQUYzQiwyQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUNuQixtQkFBVSxDQUFDLFFBQVEsQ0FBQztHQUNSLGVBQWUsQ0FjM0I7QUFkWSwwQ0FBZSJ9