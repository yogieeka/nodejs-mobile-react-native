"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const request_1 = __importDefault(require("request"));
const v4_1 = __importDefault(require("uuid/v4"));
const luna_1 = __importDefault(require("../../luna"));
class DownloadService {
    downloadImage(uri) {
        return new Promise((resolve, reject) => {
            const pictureId = v4_1.default();
            const filename = `${pictureId}`;
            let ext;
            request_1.default(uri)
                .on('error', e => reject(e))
                .on('response', res => {
                ext = res.headers['content-type'].split('/')[1];
                // Do download image
                res.pipe(fs_1.default.createWriteStream(`${luna_1.default.config.getAppDataPath('images')}/${filename}.${ext}`));
                const fileName = pictureId + '.' + ext;
                resolve(fileName);
            });
        });
    }
}
exports.DownloadService = DownloadService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvc2VydmljZXMvZG93bmxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUFvQjtBQUNwQixzREFBOEI7QUFDOUIsaURBQTZCO0FBQzdCLHNEQUE4QjtBQUU5QixNQUFhLGVBQWU7SUFDbkIsYUFBYSxDQUFDLEdBQUc7UUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLFNBQVMsR0FBRyxZQUFNLEVBQUUsQ0FBQztZQUMzQixNQUFNLFFBQVEsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLElBQUksR0FBRyxDQUFDO1lBQ1IsaUJBQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ1QsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0IsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDcEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxvQkFBb0I7Z0JBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQ04sWUFBRSxDQUFDLGlCQUFpQixDQUNsQixHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLEVBQUUsQ0FDN0QsQ0FDRixDQUFDO2dCQUVGLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXRCRCwwQ0FzQkMifQ==