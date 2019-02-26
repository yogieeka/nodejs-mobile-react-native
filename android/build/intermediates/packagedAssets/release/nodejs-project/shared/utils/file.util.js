"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.scanDir = (directoryPath, existingFileList = []) => {
    const files = fs_1.default.readdirSync(directoryPath);
    files.forEach(function (file) {
        const targetPath = path_1.default.join(directoryPath, file);
        if (fs_1.default.statSync(targetPath).isDirectory()) {
            existingFileList = exports.scanDir(targetPath, existingFileList);
        }
        else {
            existingFileList.push(targetPath);
        }
    });
    return existingFileList;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC91dGlscy9maWxlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0Q0FBb0I7QUFDcEIsZ0RBQXdCO0FBRVgsUUFBQSxPQUFPLEdBQUcsQ0FBQyxhQUFxQixFQUFFLG1CQUE2QixFQUFFLEVBQUUsRUFBRTtJQUNoRixNQUFNLEtBQUssR0FBRyxZQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTVDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFJO1FBQ3pCLE1BQU0sVUFBVSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksWUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN6QyxnQkFBZ0IsR0FBRyxlQUFPLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUNMLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxnQkFBZ0IsQ0FBQztBQUMxQixDQUFDLENBQUMifQ==