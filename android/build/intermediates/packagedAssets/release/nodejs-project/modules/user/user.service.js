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
const internet_util_1 = require("../../shared/utils/internet.util");
const sync_rest_service_1 = require("../sync/sync-rest.service");
class UserService {
    constructor(mainDbContext) {
        this.dataSyncRestService = new sync_rest_service_1.SyncRestService();
        this._userRepo = mainDbContext.userRepo();
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._userRepo
                    .findAll()
                    .then(users => {
                    resolve(users);
                })
                    .catch(reject);
            });
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._userRepo
                    .findById(id)
                    .then(user => {
                    resolve(user);
                })
                    .catch(reject);
            });
        });
    }
    updateUser(oldPinNumber, pinNumber, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const online = yield internet_util_1.checkConnection();
                if (online === true) {
                    const user = yield this._userRepo.findById(userId);
                    const hashedOldPin = sha256_1.default(oldPinNumber);
                    if (hashedOldPin === user.pinNumber) {
                        const data = { userId: user.id, pinNumber };
                        const hashedPinNumber = sha256_1.default(pinNumber);
                        yield this.dataSyncRestService.updateUsers(data);
                        const result = user.updateAttributes({ pinNumber: hashedPinNumber });
                        return result;
                    }
                    else {
                        return Promise.reject('Old PIN is wrong');
                    }
                }
                else {
                    throw http_errors_1.default(401, 'No internet access');
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUFzQztBQUN0QyxvREFBNEI7QUFHNUIsb0VBQW1FO0FBQ25FLGlFQUE0RDtBQUc1RCxNQUFhLFdBQVc7SUFLdEIsWUFBWSxhQUE0QjtRQUpqQyx3QkFBbUIsR0FBRyxJQUFJLG1DQUFlLEVBQUUsQ0FBQztRQUtqRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRVksV0FBVzs7WUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLFNBQVM7cUJBQ1gsT0FBTyxFQUFFO3FCQUNULElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsRUFBRTs7WUFDekIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLFNBQVM7cUJBQ1gsUUFBUSxDQUFDLEVBQUUsQ0FBQztxQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTTs7WUFDckQsSUFBSTtnQkFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLCtCQUFlLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNuQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuRCxNQUFNLFlBQVksR0FBRyxnQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQyxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNuQyxNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO3dCQUM1QyxNQUFNLGVBQWUsR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMxQyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQyxDQUFDO3dCQUNuRSxPQUFPLE1BQU0sQ0FBQztxQkFDZjt5QkFBTTt3QkFDTCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztxQkFDM0M7aUJBQ0Y7cUJBQU07b0JBQ0wsTUFBTSxxQkFBVyxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsTUFBTSxLQUFLLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtDQUNGO0FBckRELGtDQXFEQyJ9