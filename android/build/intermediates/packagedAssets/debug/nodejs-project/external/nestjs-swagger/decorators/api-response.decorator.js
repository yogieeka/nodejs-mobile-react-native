"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_enum_1 = require("@nestjs/common/enums/http-status.enum");
const lodash_1 = require("lodash");
const response_serializer_options_decorator_1 = require("../../../shared/decorator/response-serializer-options.decorator");
const constants_1 = require("../constants");
const helpers_1 = require("./helpers");
exports.ApiResponse = (metadata) => {
    const [type, isArray] = helpers_1.getTypeIsArrayTuple(metadata.type, metadata.isArray);
    metadata.type = type;
    metadata.isArray = isArray;
    metadata.description = metadata.description ? metadata.description : '';
    const groupedMetadata = { [metadata.status]: lodash_1.omit(metadata, ['status', 'typeSerialize']) };
    return (target, key, descriptor) => {
        if (type && lodash_1.isFunction(type) && metadata.typeSerialize !== false) {
            const responseTypeSerializeDecorator = response_serializer_options_decorator_1.ResponseSerializerOptions({ type: metadata.type });
            responseTypeSerializeDecorator(target, key, descriptor);
        }
        let responses;
        if (descriptor) {
            responses =
                Reflect.getMetadata(constants_1.DECORATORS.API_RESPONSE, descriptor.value) || {};
            Reflect.defineMetadata(constants_1.DECORATORS.API_RESPONSE, Object.assign({}, responses, groupedMetadata), descriptor.value);
            return descriptor;
        }
        responses =
            Reflect.getMetadata(constants_1.DECORATORS.API_RESPONSE, target) || {};
        Reflect.defineMetadata(constants_1.DECORATORS.API_RESPONSE, Object.assign({}, responses, groupedMetadata), target);
        return target;
    };
};
exports.ApiOkResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.OK }));
exports.ApiCreatedResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.CREATED }));
exports.ApiAcceptedResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.ACCEPTED }));
exports.ApiNoContentResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.NO_CONTENT }));
exports.ApiMovedPermanentlyResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.MOVED_PERMANENTLY }));
exports.ApiBadRequestResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.BAD_REQUEST }));
exports.ApiUnauthorizedResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.UNAUTHORIZED }));
exports.ApiTooManyRequestsResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.TOO_MANY_REQUESTS }));
exports.ApiNotFoundResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.NOT_FOUND }));
exports.ApiInternalServerErrorResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR }));
exports.ApiBadGatewayResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.BAD_GATEWAY }));
exports.ApiConflictResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.CONFLICT }));
exports.ApiForbiddenResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.FORBIDDEN }));
exports.ApiGatewayTimeoutResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.GATEWAY_TIMEOUT }));
exports.ApiGoneResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.GONE }));
exports.ApiMethodNotAllowedResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.METHOD_NOT_ALLOWED }));
exports.ApiNotAcceptableResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.NOT_ACCEPTABLE }));
exports.ApiNotImplementedResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.NOT_IMPLEMENTED }));
exports.ApiPayloadTooLargeResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.PAYLOAD_TOO_LARGE }));
exports.ApiRequestTimeoutResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.REQUEST_TIMEOUT }));
exports.ApiServiceUnavailableResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.SERVICE_UNAVAILABLE }));
exports.ApiUnprocessableEntityResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.UNPROCESSABLE_ENTITY }));
exports.ApiUnsupportedMediaTypeResponse = (metadata) => exports.ApiResponse(Object.assign({}, metadata, { status: http_status_enum_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXJlc3BvbnNlLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHRlcm5hbC9uZXN0anMtc3dhZ2dlci9kZWNvcmF0b3JzL2FwaS1yZXNwb25zZS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBbUU7QUFDbkUsbUNBQTBDO0FBQzFDLDJIQUE0RztBQUM1Ryw0Q0FBMEM7QUFDMUMsdUNBQWdEO0FBVW5DLFFBQUEsV0FBVyxHQUFHLENBQ3pCLFFBR29CLEVBQ3BCLEVBQUU7SUFDRixNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLDZCQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRXhFLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsYUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0YsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFJLEVBQUUsVUFBK0IsRUFBRSxFQUFFO1FBQ3ZELElBQUksSUFBSSxJQUFJLG1CQUFVLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7WUFDaEUsTUFBTSw4QkFBOEIsR0FBRyxpRUFBeUIsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxRiw4QkFBOEIsQ0FBQyxNQUFN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