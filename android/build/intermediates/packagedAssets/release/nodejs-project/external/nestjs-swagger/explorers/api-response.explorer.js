"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const constants_1 = require("@nestjs/common/constants");
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const lodash_1 = require("lodash");
const constants_2 = require("../constants");
const api_parameters_explorer_1 = require("./api-parameters.explorer");
exports.exploreGlobalApiResponseMetadata = (definitions, metatype) => {
    const responses = Reflect.getMetadata(constants_2.DECORATORS.API_RESPONSE, metatype);
    return responses
        ? {
            responses: mapResponsesToSwaggerResponses(responses, definitions)
        }
        : undefined;
};
exports.exploreApiResponseMetadata = (definitions, _instance, _prototype, method) => {
    const responses = Reflect.getMetadata(constants_2.DECORATORS.API_RESPONSE, method);
    if (responses) {
        return mapResponsesToSwaggerResponses(responses, definitions);
    }
    // Add default statuses (or these set by @HttpCode())
    const status = getStatusCode(method);
    if (status) {
        return { [status]: { description: '' } };
    }
    return undefined;
};
const getStatusCode = method => {
    const status = Reflect.getMetadata(constants_1.HTTP_CODE_METADATA, method);
    if (status) {
        return status;
    }
    const requestMethod = Reflect.getMetadata(constants_1.METHOD_METADATA, method);
    switch (requestMethod) {
        case common_1.RequestMethod.POST:
            return common_1.HttpStatus.CREATED;
        default:
            return common_1.HttpStatus.OK;
    }
};
const omitParamType = param => lodash_1.omit(param, 'type');
const mapResponsesToSwaggerResponses = (responses, definitions) => lodash_1.mapValues(lodash_1.mapValues(responses, response => {
    const { type, isArray } = response;
    response = lodash_1.omit(response, ['isArray']);
    if (!type) {
        return response;
    }
    const defaultTypes = [String, Boolean, Number, Object, Array];
    if (!(shared_utils_1.isFunction(type) &&
        !defaultTypes.some(defaultType => defaultType === type))) {
        const metatype = type && shared_utils_1.isFunction(type) ? type.name : type;
        const swaggerType = api_parameters_explorer_1.mapTypesToSwaggerTypes(metatype);
        if (isArray) {
            return Object.assign({}, response, { schema: {
                    type: 'array',
                    items: {
                        type: swaggerType
                    }
                } });
        }
        return Object.assign({}, response, { schema: {
                type: swaggerType
            } });
    }
    const name = api_parameters_explorer_1.exploreModelDefinition(type, definitions);
    if (isArray) {
        return exports.toArrayResponseWithDefinition(response, name);
    }
    return exports.toResponseWithDefinition(response, name);
}), omitParamType);
exports.toArrayResponseWithDefinition = (response, name) => (Object.assign({}, response, { schema: {
        type: 'array',
        items: {
            $ref: `#/definitions/${name}`
        }
    } }));
exports.toResponseWithDefinition = (response, name) => (Object.assign({}, response, { schema: {
        $ref: `#/definitions/${name}`
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXJlc3BvbnNlLmV4cGxvcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2V4dGVybmFsL25lc3Rqcy1zd2FnZ2VyL2V4cGxvcmVycy9hcGktcmVzcG9uc2UuZXhwbG9yZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkQ7QUFDM0Qsd0RBQStFO0FBQy9FLG9FQUErRDtBQUMvRCxtQ0FBeUM7QUFDekMsNENBQTBDO0FBQzFDLHVFQUdtQztBQUV0QixRQUFBLGdDQUFnQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFO0lBQ3hFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsc0JBQVUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsT0FBTyxTQUFTO1FBQ2QsQ0FBQyxDQUFDO1lBQ0UsU0FBUyxFQUFFLDhCQUE4QixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7U0FDbEU7UUFDSCxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVXLFFBQUEsMEJBQTBCLEdBQUcsQ0FDeEMsV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEVBQUU7SUFDRixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLHNCQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZFLElBQUksU0FBUyxFQUFFO1FBQ2IsT0FBTyw4QkFBOEIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxxREFBcUQ7SUFDckQsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLElBQUksTUFBTSxFQUFFO1FBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUMxQztJQUNELE9BQU8sU0FB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