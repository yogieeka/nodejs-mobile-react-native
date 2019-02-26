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
const sequelize_1 = __importDefault(require("sequelize"));
class CustomerService {
    constructor(mainDbContext) {
        this._mainDbContext = mainDbContext;
        this._customerRepo = mainDbContext.customerRepo();
    }
    getAllCustomer(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._customerRepo
                    .findAll(options)
                    .then(customers => {
                    resolve(customers);
                })
                    .catch(reject);
            });
        });
    }
    searchCustomers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._customerRepo
                    .findAll({
                    order: [['displayName', 'ASC']],
                    where: {
                        [sequelize_1.default.Op.or]: {
                            displayName: { [sequelize_1.default.Op.like]: `%${query}%` },
                            firstName: { [sequelize_1.default.Op.like]: `%${query}%` },
                            lastName: { [sequelize_1.default.Op.like]: `%${query}%` },
                        }
                    }
                })
                    .then(customers => {
                    resolve(customers);
                })
                    .catch(reject);
            });
        });
    }
    getCustomerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._customerRepo
                    .findById(id)
                    .then(table => {
                    resolve(table);
                })
                    .catch(reject);
            });
        });
    }
    addCustomerClient(payloadCustomer) {
        return __awaiter(this, void 0, void 0, function* () {
            const createDate = new Date();
            return new Promise((resolve, reject) => {
                this._customerRepo
                    .add(payloadCustomer)
                    .then(customer => {
                    customer
                        .updateAttributes({ isSync: false, lastEdit: createDate })
                        .then(resolve)
                        .catch(reject);
                })
                    .catch(reject);
            });
        });
    }
    updateCustomerClient(customerObj, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date();
            return new Promise((resolve, reject) => {
                this._customerRepo
                    .findById(customerId)
                    .then(customer => {
                    customer
                        .updateAttributes(Object.assign({}, customerObj, { isSync: false, lastEdit: date }))
                        .then(resolve)
                        .catch(reject);
                })
                    .catch(reject);
            });
        });
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1c3RvbWVyL2N1c3RvbWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFrQztBQUtsQyxNQUFhLGVBQWU7SUFJMUIsWUFBWSxhQUE0QjtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRVksY0FBYyxDQUFDLE9BQU8sR0FBRyxFQUFFOztZQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsYUFBYTtxQkFDZixPQUFPLENBQUMsT0FBTyxDQUFDO3FCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ2hCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxLQUFhOztZQUN4QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsYUFBYTtxQkFDZixPQUFPLENBQUM7b0JBQ1AsS0FBSyxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQy9CLEtBQUssRUFBRTt3QkFDTCxDQUFDLG1CQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUNqQixXQUFXLEVBQUUsRUFBRSxDQUFDLG1CQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxHQUFHLEVBQUU7NEJBQ2xELFNBQVMsRUFBRSxFQUFFLENBQUMsbUJBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLEdBQUcsRUFBRTs0QkFDaEQsUUFBUSxFQUFFLEVBQUUsQ0FBQyxtQkFBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEtBQUssR0FBRyxFQUFFO3lCQUNoRDtxQkFDRjtpQkFDRixDQUFDO3FCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDaEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyQixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRVksZUFBZSxDQUFDLEVBQUU7O1lBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhO3FCQUNmLFFBQVEsQ0FBQyxFQUFFLENBQUM7cUJBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVZLGlCQUFpQixDQUFDLGVBQWU7O1lBQzVDLE1BQU0sVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLGFBQWE7cUJBQ2YsR0FBRyxDQUFDLGVBQWUsQ0FBQztxQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNmLFFBQVE7eUJBQ0wsZ0JBQWdCLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQzt5QkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDYixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFWSxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsVUFBVTs7WUFDdkQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN4QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsYUFBYTtxQkFDZixRQUFRLENBQUMsVUFBVSxDQUFDO3FCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2YsUUFBUTt5QkFDTCxnQkFBZ0IsbUJBQ1osV0FBVyxJQUNkLE1BQU0sRUFBRSxLQUFLLEVBQ2IsUUFBUSxFQUFFLElBQUksSUFDZDt5QkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBcEZELDBDQW9GQyJ9