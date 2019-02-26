"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
let packageJSON = {};
if (fs_1.default.existsSync(__dirname + '/../package.json')) {
    packageJSON = require(__dirname + '/../package.json'); // production build
}
else if (fs_1.default.existsSync(__dirname + '/../../package.json')) {
    packageJSON = require(__dirname + '/../../package.json'); // dev
}
const env = 'dev';
const APP_CONSTANT = {
    APP_VERSION: packageJSON.version,
    LUNA_MAIN_API: `https://luna-${env}-api-main.azurewebsites.net`,
    LUNA_POS_API: `https://luna-${env}-api-pos.azurewebsites.net`,
    LUNA_AUTH_API: `https://luna-${env}-api-auth.azurewebsites.net`
};
module.exports = APP_CONSTANT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbnN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0Q0FBb0I7QUFFcEIsSUFBSSxXQUFXLEdBQVEsRUFBRSxDQUFDO0FBQzFCLElBQUksWUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsRUFBRTtJQUNqRCxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO0NBQzNFO0tBQU0sSUFBSSxZQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxFQUFFO0lBQzNELFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxNQUFNO0NBQ2pFO0FBRUQsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBRWxCLE1BQU0sWUFBWSxHQUFHO0lBQ25CLFdBQVcsRUFBRSxXQUFXLENBQUMsT0FBTztJQUNoQyxhQUFhLEVBQUUsZ0JBQWdCLEdBQUcsNkJBQTZCO0lBQy9ELFlBQVksRUFBRSxnQkFBZ0IsR0FBRyw0QkFBNEI7SUFDN0QsYUFBYSxFQUFFLGdCQUFnQixHQUFHLDZCQUE2QjtDQUNoRSxDQUFDO0FBRUYsaUJBQVMsWUFBWSxDQUFDIn0=