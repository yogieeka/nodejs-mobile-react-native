"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
exports.getConfig = () => {
    const configPath = __dirname + '/config/config';
    const configs = require(configPath);
    const args = require('yargs').argv;
    const env = args.env || 'development';
    const config = configs[env];
    return config;
};
exports.getAppDataPath = (subfolder = null) => {
    let pathArray = ['.'];
    try {
        const path = require('rn-bridge').app.datadir();
        pathArray = [path];
    }
    catch (e) { }
    pathArray.push('LunaData');
    subfolder && pathArray.push(subfolder);
    const dir = pathArray.join('/');
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir);
    }
    return dir;
};
exports.getRnBridge = () => {
    let rnBridge = null;
    try {
        rnBridge = require('rn-bridge');
    }
    catch (error) { }
    return rnBridge;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNENBQW9CO0FBRVAsUUFBQSxTQUFTLEdBQUcsR0FBRyxFQUFFO0lBQzVCLE1BQU0sVUFBVSxHQUFHLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNoRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNuQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQztJQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLEVBQUU7SUFDakQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoRCxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQjtJQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNCLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdkIsWUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztJQUNwQixJQUFJO1FBQ0YsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNqQztJQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7SUFFbEIsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDIn0=