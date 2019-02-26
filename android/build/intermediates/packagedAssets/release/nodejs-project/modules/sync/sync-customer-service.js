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
class SyncCustomerService {
    constructor(mainDbContext) {
        this._customerRepo = mainDbContext.customerRepo();
    }
    syncCustomerData() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._customerRepo
                    .findAll({
                    where: {
                        isSync: { [sequelize_1.default.Op.or]: [null, false] }
                    }
                })
                    .then(customerList => {
                    const customerListMapped = customerList.map(customer => {
                        return {
                            customerId: customer.id,
                            displayName: customer.displayName,
                            firstName: customer.firstName,
                            lastName: customer.lastName,
                            company: customer.company,
                            phone: customer.phone,
                            email: customer.email,
                            gender: customer.gender
                        };
                    });
                    resolve(customerListMapped);
                })
                    .catch(reject);
            });
        });
    }
}
exports.SyncCustomerService = SyncCustomerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1jdXN0b21lci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvc3luYy9zeW5jLWN1c3RvbWVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFrQztBQUtsQyxNQUFhLG1CQUFtQjtJQUc5QixZQUFZLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFWSxnQkFBZ0I7O1lBQzNCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhO3FCQUNmLE9BQU8sQ0FBQztvQkFDUCxLQUFLLEVBQUU7d0JBQ0wsTUFBTSxFQUFFLEVBQUUsQ0FBQyxtQkFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTtxQkFDN0M7aUJBQ0YsQ0FBQztxQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ25CLE1BQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDckQsT0FBTzs0QkFDTCxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQUU7NEJBQ3ZCLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVzs0QkFDakMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTOzRCQUM3QixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7NEJBQzNCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTzs0QkFDekIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLOzRCQUNyQixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7NEJBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTt5QkFDeEIsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztvQkFDSCxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBakNELGtEQWlDQyJ9