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
const nestjs_swagger_1 = require("../../external/nestjs-swagger");
const main_db_context_1 = require("../../shared/database/main-db-context");
const response_serializer_interceptor_1 = require("../../shared/interceptor/response-serializer.interceptor");
const customer_service_1 = require("./customer.service");
const customer_vm_1 = require("./customer.vm");
function newCustomerService() {
    return new customer_service_1.CustomerService(new main_db_context_1.MainDBContext());
}
let CustomerController = class CustomerController {
    getCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield newCustomerService().getAllCustomer({ order: [['displayName', 'ASC']] });
            return customers;
        });
    }
    searchCustomers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const customersFound = yield newCustomerService().searchCustomers(query);
            return customersFound;
        });
    }
    getCustomerById(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield newCustomerService().getCustomerById(customerId);
            return customer;
        });
    }
    createCustomer(customerToCreate) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdCustomer = yield newCustomerService().addCustomerClient(customerToCreate);
            return createdCustomer;
        });
    }
    updateCustomer(customerId, customerToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCustomer = yield newCustomerService().updateCustomerClient(customerToUpdate, customerId);
            return updatedCustomer;
        });
    }
};
__decorate([
    common_1.Get(),
    nestjs_swagger_1.ApiOkResponse({ type: [customer_vm_1.CustomerVM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomers", null);
__decorate([
    common_1.Get('search'),
    nestjs_swagger_1.ApiOkResponse({ type: [customer_vm_1.CustomerVM] }),
    __param(0, common_1.Query('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "searchCustomers", null);
__decorate([
    common_1.Get(':id'),
    nestjs_swagger_1.ApiOkResponse({ type: customer_vm_1.CustomerVM }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getCustomerById", null);
__decorate([
    common_1.Post('create'),
    nestjs_swagger_1.ApiOkResponse({ type: customer_vm_1.CustomerVM }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_vm_1.CustomerCreatePayloadVM]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createCustomer", null);
__decorate([
    common_1.Put(':id/update'),
    nestjs_swagger_1.ApiOkResponse({ type: customer_vm_1.CustomerVM }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, customer_vm_1.CustomerUpdatePayloadVM]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "updateCustomer", null);
CustomerController = __decorate([
    nestjs_swagger_1.ApiUseTags('Customer'),
    common_1.Controller('customers'),
    common_1.UseInterceptors(response_serializer_interceptor_1.ResponseSerializerInterceptor)
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2N1c3RvbWVyL2N1c3RvbWVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFpRztBQUNqRyxrRUFBMEU7QUFDMUUsMkVBQXNFO0FBQ3RFLDhHQUF5RztBQUN6Ryx5REFBcUQ7QUFDckQsK0NBQTZGO0FBRTdGLFNBQVMsa0JBQWtCO0lBQ3pCLE9BQU8sSUFBSSxrQ0FBZSxDQUFDLElBQUksK0JBQWEsRUFBRSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUtELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBR2hCLFlBQVk7O1lBQ3ZCLE1BQU0sU0FBUyxHQUFHLE1BQU0sa0JBQWtCLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUUvRixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFJWSxlQUFlLENBQ1YsS0FBYTs7WUFFN0IsTUFBTSxjQUFjLEdBQUcsTUFBTSxrQkFBa0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV6RSxPQUFPLGNBQWMsQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFJWSxlQUFlLENBQ2IsVUFBa0I7O1lBRS9CLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQWtCLEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEUsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBSVksY0FBYyxDQUNqQixnQkFBeUM7O1lBRWpELE1BQU0sZUFBZSxHQUFHLE1BQU0sa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FDbEUsZ0JBQWdCLENBQ2pCLENBQUM7WUFFRixPQUFPLGVBQWUsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFJWSxjQUFjLENBQ1osVUFBa0IsRUFDdkIsZ0JBQXlDOztZQUVqRCxNQUFNLGVBQWUsR0FBRyxNQUFNLGtCQUFrQixFQUFFLENBQUMsb0JBQW9CLENBQ3JFLGdCQUFnQixFQUNoQixVQUFVLENBQ1gsQ0FBQztZQUVGLE9BQU8sZUFBZSxDQUFDO1FBQ3pCLENBQUM7S0FBQTtDQUNGLENBQUE7QUFuREM7SUFGQyxZQUFHLEVBQUU7SUFDTCw4QkFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsd0JBQVUsQ0FBQyxFQUFFLENBQUM7Ozs7c0RBS3JDO0FBSUQ7SUFGQyxZQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2IsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLHdCQUFVLENBQUMsRUFBRSxDQUFDO0lBRW5DLFdBQUEsY0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7O3lEQUtoQjtBQUlEO0lBRkMsWUFBRyxDQUFDLEtBQUssQ0FBQztJQUNWLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQVUsRUFBRSxDQUFDO0lBRWpDLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O3lEQUtiO0FBSUQ7SUFGQyxhQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2QsOEJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSx3QkFBVSxFQUFFLENBQUM7SUFFakMsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cUNBQW1CLHFDQUF1Qjs7d0RBT2xEO0FBSUQ7SUFGQyxZQUFHLENBQUMsWUFBWSxDQUFDO0lBQ2pCLDhCQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQVUsRUFBRSxDQUFDO0lBRWpDLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7NkNBQW1CLHFDQUF1Qjs7d0RBUWxEO0FBckRVLGtCQUFrQjtJQUg5QiwyQkFBVSxDQUFDLFVBQVUsQ0FBQztJQUN0QixtQkFBVSxDQUFDLFdBQVcsQ0FBQztJQUN2Qix3QkFBZSxDQUFDLCtEQUE2QixDQUFDO0dBQ2xDLGtCQUFrQixDQXNEOUI7QUF0RFksZ0RBQWtCIn0=