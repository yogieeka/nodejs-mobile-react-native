"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const sha256_1 = __importDefault(require("sha256"));
class LoginService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._userRepo = mainDbContext.userRepo();
    }
    loginUser(id, pin) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._userRepo.findById(id).then(user => {
                    if (user !== null) {
                        const hashedPinNumber = sha256_1.default(pin);
                        if (user.pinNumber.toLowerCase() === hashedPinNumber) {
                            resolve(user);
                        }
                        else {
                            reject(http_errors_1.default(400, 'Invalid PIN'));
                        }
                    }
                    else {
                        reject(http_errors_1.default(400, 'User Not Found'));
                    }
                });
            });
        });
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2F1dGgvbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXNDO0FBQ3RDLG9EQUE0QjtBQUs1QixNQUFhLFlBQVk7SUFJdkIsWUFBWSxhQUE0QjtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRVksU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHOztZQUM1QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTt3QkFDakIsTUFBTSxlQUFlLEdBQUcsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLGVBQWUsRUFBRTs0QkFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmOzZCQUFNOzRCQUNMLE1BQU0sQ0FBQyxxQkFBVyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO3lCQUN6QztxQkFDRjt5QkFBTTt3QkFDTCxNQUFNLENBQUMscUJBQVcsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3FCQUM1QztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0Y7QUF6QkQsb0NBeUJDIn0=