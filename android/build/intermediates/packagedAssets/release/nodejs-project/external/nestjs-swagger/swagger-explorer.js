"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const constants_1 = require("@nestjs/common/constants");
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const lodash_1 = require("lodash");
const pathToRegexp = __importStar(require("path-to-regexp"));
const api_consumes_explorer_1 = require("./explorers/api-consumes.explorer");
const api_exclude_endpoint_explorer_1 = require("./explorers/api-exclude-endpoint.explorer");
const api_operation_explorer_1 = require("./explorers/api-operation.explorer");
const api_parameters_explorer_1 = require("./explorers/api-parameters.explorer");
const api_produces_explorer_1 = require("./explorers/api-produces.explorer");
const api_response_explorer_1 = require("./explorers/api-response.explorer");
const api_security_explorer_1 = require("./explorers/api-security.explorer");
const api_use_tags_explorer_1 = require("./explorers/api-use-tags.explorer");
class SwaggerExplorer {
    constructor() {
        this.metadataScanner = new metadata_scanner_1.MetadataScanner();
        this.modelsDefinitions = [];
    }
    exploreController({ instance, metatype }, modulePath) {
        const prototype = Object.getPrototypeOf(instance);
        const explorersSchema = {
            root: [
                this.exploreRoutePathAndMethod,
                api_operation_explorer_1.exploreApiOperationMetadata,
                api_parameters_explorer_1.exploreApiParametersMetadata.bind(null, this.modelsDefinitions)
            ],
            produces: [api_produces_explorer_1.exploreApiProducesMetadata],
            consumes: [api_consumes_explorer_1.exploreApiConsumesMetadata],
            security: [api_security_explorer_1.exploreApiSecurityMetadata],
            tags: [api_use_tags_explorer_1.exploreApiUseTagsMetadata],
            responses: [api_response_explorer_1.exploreApiResponseMetadata.bind(null, this.modelsDefinitions)]
        };
        return this.generateDenormalizedDocument(metatype, prototype, instance, explorersSchema, modulePath);
    }
    getModelsDefinitons() {
        return this.modelsDefinitions;
    }
    generateDenormalizedDocument(metatype, prototype, instance, explorersSchema, modulePath) {
        let path = this.validateRoutePath(this.reflectControllerPath(metatype));
        if (modulePath) {
            path = modulePath + path;
        }
        const self = this;
        const globalMetadata = this.exploreGlobalMetadata(metatype);
        const denormalizedPaths = this.metadataScanner.scanFromPrototype(instance, prototype, name => {
            const targetCallback = prototype[name];
            const excludeEndpoint = api_exclude_endpoint_explorer_1.exploreApiExcludeEndpointMetadata(instance, prototype, targetCallback);
            if (excludeEndpoint && excludeEndpoint.disable) {
                return;
            }
            const methodMetadata = lodash_1.mapValues(explorersSchema, (explorers) => explorers.reduce((metadata, fn) => {
                const exploredMetadata = fn.call(self, instance, prototype, targetCallback, path);
                if (!exploredMetadata) {
                    return metadata;
                }
                if (!lodash_1.isArray(exploredMetadata)) {
                    return Object.assign({}, metadata, exploredMetadata);
                }
                return lodash_1.isArray(metadata)
                    ? [...metadata, ...exploredMetadata]
                    : exploredMetadata;
            }, {}));
            const mergedMethodMetadata = this.mergeMetadata(globalMetadata, lodash_1.omitBy(methodMetadata, lodash_1.isEmpty));
            this.assignDefaultMimeType(mergedMethodMetadata, 'produces');
            this.assignDefaultMimeType(mergedMethodMetadata, 'consumes');
            return Object.assign({ responses: {} }, globalMetadata, mergedMethodMetadata);
        });
        return denormalizedPaths;
    }
    exploreGlobalMetadata(metatype) {
        const globalExplorers = [
            api_produces_explorer_1.exploreGlobalApiProducesMetadata,
            api_use_tags_explorer_1.exploreGlobalApiUseTagsMetadata,
            api_consumes_explorer_1.exploreGlobalApiConsumesMetadata,
            api_security_explorer_1.exploreGlobalApiSecurityMetadata,
            api_response_explorer_1.exploreGlobalApiResponseMetadata.bind(null, this.modelsDefinitions)
        ];
        const globalMetadata = globalExplorers
            .map(explorer => explorer.call(explorer, metatype))
            .filter(val => !shared_utils_1.isUndefined(val))
            .reduce((curr, next) => (Object.assign({}, curr, next)), {});
        return globalMetadata;
    }
    exploreRoutePathAndMethod(_instance, _prototype, method, globalPath) {
        const routePath = Reflect.getMetadata(constants_1.PATH_METADATA, method);
        if (shared_utils_1.isUndefined(routePath)) {
            return undefined;
        }
        const requestMethod = Reflect.getMetadata(constants_1.METHOD_METADATA, method);
        const fullPath = globalPath + this.validateRoutePath(routePath);
        return {
            method: common_1.RequestMethod[requestMethod].toLowerCase(),
            path: fullPath === '' ? '/' : fullPath
        };
    }
    reflectControllerPath(metatype) {
        return Reflect.getMetadata(constants_1.PATH_METADATA, metatype);
    }
    validateRoutePath(path) {
        if (shared_utils_1.isUndefined(path)) {
            return '';
        }
        let pathWithParams = '';
        for (const item of pathToRegexp.parse(path)) {
            if (shared_utils_1.isString(item)) {
                pathWithParams += item;
            }
            else {
                pathWithParams += `${item.prefix}{${item.name}}`;
            }
        }
        return pathWithParams === '/' ? '' : shared_utils_1.validatePath(pathWithParams);
    }
    mergeMetadata(globalMetadata, methodMetadata) {
        return lodash_1.mapValues(methodMetadata, (value, key) => {
            if (!globalMetadata[key]) {
                return value;
            }
            const globalValue = globalMetadata[key];
            if (!lodash_1.isArray(globalValue)) {
                return Object.assign({}, globalValue, value);
            }
            return [...globalValue, ...value];
        });
    }
    assignDefaultMimeType(metadata, key) {
        if (metadata[key]) {
            return undefined;
        }
        const defaultMimeType = 'application/json';
        metadata[key] = [defaultMimeType];
    }
}
exports.SwaggerExplorer = SwaggerExplorer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci1leHBsb3Jlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHRlcm5hbC9uZXN0anMtc3dhZ2dlci9zd2FnZ2VyLWV4cGxvcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQyx3REFBMEU7QUFFMUUsb0VBSTJDO0FBRTNDLG9FQUFnRTtBQUNoRSxtQ0FBNkQ7QUFDN0QsNkRBQStDO0FBQy9DLDZFQUcyQztBQUMzQyw2RkFBOEY7QUFDOUYsK0VBQWlGO0FBQ2pGLGlGQUFtRjtBQUNuRiw2RUFHMkM7QUFDM0MsNkVBRzJDO0FBQzNDLDZFQUcyQztBQUMzQyw2RUFHMkM7QUFFM0MsTUFBYSxlQUFlO0lBQTVCO1FBQ21CLG9CQUFlLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO0lBcUsxQyxDQUFDO0lBbktRLGlCQUFpQixDQUN0QixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQStCLEVBQ25ELFVBQWtCO1FBRWxCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsTUFBTSxlQUFlLEdBQUc7WUFDdEIsSUFBSSxFQUFFO2dCQUNKLElBQUksQ0FBQyx5QkFBeUI7Z0JBQzlCLG9EQUEyQjtnQkFDM0Isc0RBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDaEU7WUFDRCxRQUFRLEVBQUUsQ0FBQyxrREFBMEIsQ0FBQztZQUN0QyxRQUFRLEVBQUUsQ0FBQyxrREFBMEIsQ0FBQztZQUN0QyxRQUFRLEVBQUUsQ0FBQyxrREFBMEIsQ0FBQztZQUN0QyxJQUFJLEVBQUUsQ0FBQyxpREFBeUIsQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBQyxrREFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FB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