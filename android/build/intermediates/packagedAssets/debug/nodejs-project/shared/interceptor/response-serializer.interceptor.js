"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const lodash_1 = __importDefault(require("lodash"));
const operators_1 = require("rxjs/operators");
const response_serializer_options_decorator_1 = require("../decorator/response-serializer-options.decorator");
let ResponseSerializerInterceptor = class ResponseSerializerInterceptor {
    intercept(context, call$) {
        return call$.pipe(operators_1.map((res) => this.serialize(res, context)));
    }
    serialize(response, context) {
        const serializeOptions = this.getSerializeHandlerOptions(context.getHandler());
        const isArray = Array.isArray(response);
        if (!lodash_1.default.isObject(response) && !isArray) {
            return response;
        }
        return isArray
            ? response.map(item => this.transformToPlain(item, serializeOptions))
            : this.transformToPlain(response, serializeOptions);
    }
    transformToPlain(plainOrClass, serializeOptions) {
        if (plainOrClass && plainOrClass.toJSON) {
            plainOrClass = plainOrClass.toJSON();
        }
        let targetObject = plainOrClass;
        if (serializeOptions && serializeOptions.type) {
            targetObject = new serializeOptions.type();
            Object.assign(targetObject, plainOrClass);
        }
        if (!lodash_1.default.isPlainObject(targetObject)) {
            return class_transformer_1.classToPlain(targetObject, {
                strategy: 'excludeAll'
            });
        }
        else {
            return targetObject;
        }
    }
    getSerializeHandlerOptions(handler) {
        return Reflect.getMetadata(response_serializer_options_decorator_1.ResponseSerializerOptionsDecoratorMetadataId, handler);
    }
};
ResponseSerializerInterceptor = __decorate([
    common_1.Injectable()
], ResponseSerializerInterceptor);
exports.ResponseSerializerInterceptor = ResponseSerializerInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2Utc2VyaWFsaXplci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvaW50ZXJjZXB0b3IvcmVzcG9uc2Utc2VyaWFsaXplci5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtRztBQUNuRyx5REFBaUQ7QUFDakQsb0RBQXVCO0FBRXZCLDhDQUFxQztBQUNyQyw4R0FBOEk7QUFHOUksSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFDakMsU0FBUyxDQUNkLE9BQXlCLEVBQ3pCLEtBQXNCO1FBRXRCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDZixlQUFHLENBQUMsQ0FBQyxHQUE4QyxFQUFFLEVBQUUsQ0FDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQzdCLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxTQUFTLENBQ2QsUUFBbUQsRUFDbkQsT0FBeUI7UUFFekIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQ3RELE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FDckIsQ0FBQztRQUNGLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JDLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxPQUFPO1lBQ1osQ0FBQyxDQUFFLFFBQWlDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FDOUM7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxnQkFBZ0IsQ0FDckIsWUFBWSxFQUNaLGdCQUE0QztRQUU1QyxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdEM7UUFFRCxJQUFJLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFaEMsSUFBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7WUFDN0MsWUFBWSxHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsZ0JBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxnQ0FBWSxDQUFDLFlBQVksRUFBRTtnQkFDaEMsUUFBUSxFQUFFLFlBQVk7YUFDdkIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVNLDBCQUEwQixDQUFDLE9BQU87UUFDdkMsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUN4QixvRkFBNEMsRUFDNUMsT0FBTyxDQUNSLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTVEWSw2QkFBNkI7SUFEekMsbUJBQVUsRUFBRTtHQUNBLDZCQUE2QixDQTREekM7QUE1RFksc0VBQTZCIn0=