"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("@nestjs/common/constants");
const route_paramtypes_enum_1 = require("@nestjs/common/enums/route-paramtypes.enum");
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const lodash_1 = require("lodash");
const constants_2 = require("../constants");
exports.exploreApiParametersMetadata = (definitions, instance, prototype, method) => {
    const implicitParameters = Reflect.getMetadata(constants_2.DECORATORS.API_PARAMETERS, method);
    const reflectedParameters = exploreApiReflectedParametersMetadata(instance, prototype, method);
    const noAnyImplicit = lodash_1.isNil(implicitParameters);
    if (noAnyImplicit && lodash_1.isNil(reflectedParameters)) {
        return undefined;
    }
    const allReflectedParameters = transformModelToProperties(reflectedParameters || []);
    const mergedParameters = noAnyImplicit
        ? allReflectedParameters
        : lodash_1.map(allReflectedParameters, item => lodash_1.assign(item, lodash_1.find(implicitParameters, ['name', item.name])));
    const unionParameters = noAnyImplicit
        ? mergedParameters
        : lodash_1.unionWith(mergedParameters, implicitParameters, (arrVal, othVal) => {
            return arrVal.name === othVal.name && arrVal.in === othVal.in;
        });
    const paramsWithDefinitions = mapModelsToDefinitons(unionParameters, definitions);
    const parameters = mapParametersTypes(paramsWithDefinitions);
    return parameters ? { parameters } : undefined;
};
const DEFAULT_PARAM_TOKEN = '_';
const exploreApiReflectedParametersMetadata = (instance, _prototype, method) => {
    const types = Reflect.getMetadata(constants_1.PARAMTYPES_METADATA, instance, method.name);
    const parametersMetadata = Reflect.getMetadata(constants_1.ROUTE_ARGS_METADATA, instance.constructor, method.name) || {};
    const parametersWithType = lodash_1.mapValues(parametersMetadata, param => ({
        type: types[param.index],
        name: param.data,
        required: true
    }));
    const parameters = lodash_1.omitBy(lodash_1.mapValues(parametersWithType, (val, key) => (Object.assign({}, val, { in: mapParamType(key) }))), val => val.in === DEFAULT_PARAM_TOKEN || (val.name && val.in === 'body'));
    return !lodash_1.isEmpty(parameters) ? parameters : undefined;
};
const exploreModelProperties = prototype => {
    const props = Reflect.getMetadata(constants_2.DECORATORS.API_MODEL_PROPERTIES_ARRAY, prototype) || [];
    return props
        .filter(lodash_1.isString)
        .filter(prop => prop.charAt(0) === ':' && !shared_utils_1.isFunction(prototype[prop]))
        .map(prop => prop.slice(1));
};
const isBodyParameter = param => param.in === 'body';
const transformModelToProperties = reflectedParameters => {
    return lodash_1.flatMap(reflectedParameters, (param) => {
        if (!param || param.type === Object) {
            return undefined;
        }
        const { prototype } = param.type;
        if (param.name) {
            return param;
        }
        if (isBodyParameter(param)) {
            const name = param.type && shared_utils_1.isFunction(param.type) ? param.type.name : param.type;
            return Object.assign({}, param, { name });
        }
        const modelProperties = exploreModelProperties(prototype);
        return modelProperties.map(key => {
            const reflectedParam = Reflect.getMetadata(constants_2.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||
                {};
            return Object.assign({}, param, reflectedParam, { name: key });
        });
    }).filter(lodash_1.identity);
};
const transformToArrayModelProperty = (metadata, key, type) => {
    const model = Object.assign({}, metadata, { name: key, type: 'array', items: Object.assign({}, type) });
    if (metadata.enum !== undefined) {
        delete model.enum;
        model.items = Object.assign({}, model.items, { enum: metadata.enum });
    }
    return model;
};
exports.exploreModelDefinition = (type, definitions, existingNestedModelNames = []) => {
    const { prototype } = type;
    const modelProperties = exploreModelProperties(prototype);
    const propertiesWithType = modelProperties.map(key => {
        const metadata = Reflect.getMetadata(constants_2.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||
            {};
        const defaultTypes = [String, Boolean, Number, Object, Array];
        if (metadata.enum !== undefined) {
            metadata.enum = getEnumValues(metadata.enum);
        }
        const isNotDefaultType = shared_utils_1.isFunction(metadata.type) &&
            !defaultTypes.find(defaultType => defaultType === metadata.type);
        if (isNotDefaultType) {
            if (!existingNestedModelNames.includes(metadata.type.name)) {
                existingNestedModelNames.push(metadata.type.name);
                exports.exploreModelDefinition(metadata.type, definitions, existingNestedModelNames);
            }
            const $ref = getDefinitionPath(metadata.type.name);
            if (metadata.isArray) {
                return transformToArrayModelProperty(metadata, key, { $ref });
            }
            const strippedMetadata = lodash_1.omit(metadata, [
                'type',
                'isArray',
                'collectionFormat',
                'required'
            ]);
            if (Object.keys(strippedMetadata).length === 0) {
                return { name: key, required: metadata.required, $ref };
            }
            return {
                name: key,
                required: metadata.required,
                title: type.name,
                allOf: [{ $ref }, strippedMetadata]
            };
        }
        const metatype = metadata.type && shared_utils_1.isFunction(metadata.type)
            ? metadata.type.name
            : metadata.type;
        const swaggerType = exports.mapTypesToSwaggerTypes(metatype);
        const itemType = metadata.enum ? getEnumType(metadata.enum) : swaggerType;
        if (metadata.isArray) {
            return transformToArrayModelProperty(metadata, key, { type: itemType });
        }
        else if (swaggerType === 'array') {
            const defaultOnArray = 'string';
            return transformToArrayModelProperty(metadata, key, {
                type: defaultOnArray
            });
        }
        else {
            return Object.assign({}, metadata, { name: key, type: itemType });
        }
    });
    const typeDefinition = {
        type: 'object',
        properties: lodash_1.mapValues(lodash_1.keyBy(propertiesWithType, 'name'), property => lodash_1.omit(property, ['name', 'isArray', 'required']))
    };
    const typeDefinitionRequiredFields = propertiesWithType
        .filter(property => property.required !== false)
        .map(property => property.name);
    if (typeDefinitionRequiredFields.length > 0) {
        typeDefinition['required'] = typeDefinitionRequiredFields;
    }
    definitions.push({
        [type.name]: typeDefinition
    });
    return type.name;
};
const formDataModelTransformation = type => {
    const { prototype } = type;
    if (!prototype) {
        return {};
    }
    const modelProperties = exploreModelProperties(prototype);
    const data = modelProperties.map(key => {
        const metadata = Reflect.getMetadata(constants_2.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||
            {};
        const defaultTypes = [String, Boolean, Number];
        if (defaultTypes.indexOf(metadata.type.name)) {
            return {
                name: key,
                type: metadata.type.name.toLowerCase(),
                required: metadata.required,
                in: 'formData'
            };
        }
        return undefined;
    });
    return data;
};
const getEnumValues = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    if (typeof e !== 'object') {
        return [];
    }
    const values = [];
    const uniqueValues = {};
    for (const key in e) {
        const value = e[key];
        // Filter out cases where enum key also becomes its value (A: B, B: A)
        if (!uniqueValues.hasOwnProperty(value) &&
            !uniqueValues.hasOwnProperty(key)) {
            values.push(value);
            uniqueValues[value] = value;
        }
    }
    return values;
};
const getEnumType = (values) => {
    const hasString = values.filter(lodash_1.isString).length > 0;
    return hasString ? 'string' : 'number';
};
const mapParamType = (key) => {
    const keyPair = key.split(':');
    switch (Number(keyPair[0])) {
        case route_paramtypes_enum_1.RouteParamtypes.BODY:
            return 'body';
        case route_paramtypes_enum_1.RouteParamtypes.PARAM:
            return 'path';
        case route_paramtypes_enum_1.RouteParamtypes.QUERY:
            return 'query';
        case route_paramtypes_enum_1.RouteParamtypes.HEADERS:
            return 'header';
        default:
            return DEFAULT_PARAM_TOKEN;
    }
};
const hasSchemaDefinition = param => param.schema;
const omitParamType = param => lodash_1.omit(param, 'type');
const mapParametersTypes = parameters => parameters.map(param => {
    if (hasSchemaDefinition(param)) {
        return omitParamType(param);
    }
    const { type } = param;
    const paramWithStringType = lodash_1.pickBy(Object.assign({}, param, { type: type && shared_utils_1.isFunction(type)
            ? exports.mapTypesToSwaggerTypes(type.name)
            : exports.mapTypesToSwaggerTypes(type) }), lodash_1.negate(shared_utils_1.isUndefined));
    if (paramWithStringType.isArray) {
        return Object.assign({}, paramWithStringType, { type: 'array', items: {
                type: exports.mapTypesToSwaggerTypes(paramWithStringType.type)
            } });
    }
    return paramWithStringType;
});
exports.mapTypesToSwaggerTypes = (type) => {
    if (!(type && type.charAt)) {
        return '';
    }
    return type.charAt(0).toLowerCase() + type.slice(1);
};
const getDefinitionPath = modelName => `#/definitions/${modelName}`;
const mapModelsToDefinitons = (parameters, definitions) => {
    return parameters.map(param => {
        if (!isBodyParameter(param)) {
            return param;
        }
        const isFormData = param.in === 'formData';
        if (isFormData) {
            return formDataModelTransformation(param.type);
        }
        const defaultTypes = [String, Boolean, Number];
        if (shared_utils_1.isFunction(param.type) &&
            defaultTypes.some(defaultType => defaultType === param.type)) {
            return param;
        }
        const modelName = exports.exploreModelDefinition(param.type, definitions);
        const name = param.name ? param.name : modelName;
        const schema = {
            $ref: getDefinitionPath(modelName)
        };
        if (param.isArray) {
            return Object.assign({}, param, { name, schema: {
                    type: 'array',
                    items: schema
                } });
        }
        return Object.assign({}, param, { name,
            schema });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXBhcmFtZXRlcnMuZXhwbG9yZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZXh0ZXJuYWwvbmVzdGpzLXN3YWdnZXIvZXhwbG9yZXJzL2FwaS1wYXJhbWV0ZXJzLmV4cGxvcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBR2tDO0FBQ2xDLHNGQUE2RTtBQUM3RSxvRUFBNEU7QUFDNUUsbUNBZ0JnQjtBQUNoQiw0Q0FBMEM7QUFHN0IsUUFBQSw0QkFBNEIsR0FBRyxDQUMxQyxXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sRUFBRTtJQUNGLE1BQU0sa0JBQWtCLEdBQVUsT0FBTyxDQUFDLFdBQVcsQ0FDbkQsc0JBQVUsQ0FBQyxjQUFjLEVBQ3pCLE1BQU0sQ0FDUCxDQUFDO0lBQ0YsTUFBTSxtQkFBbUIsR0FBRyxxQ0FBcUMsQ0FDL0QsUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLENBQ1AsQ0FBQztJQUNGLE1BQU0sYUFBYSxHQUFHLGNBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hELElBQUksYUFBYSxJQUFJLGNBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQy9DLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBRUQsTUFBTSxzQkFBc0IsR0FBRywwQkFBMEIsQ0FDdkQsbUJBQW1CLElBQUksRUFBRSxDQUMxQixDQUFDO0lBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxhQUFhO1FBQ3BDLENBQUMsQ0FBQyxzQkFBc0I7UUFDeEIsQ0FBQyxDQUFDLFlBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUNqQyxlQUFNLENBQUMsSUFBSSxFQUFFLGFBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUM1RCxDQUFDO0lBRU4sTUFBTSxlQUFlLEdBQUcsYUFBYTtRQUNuQyxDQUFDLENB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