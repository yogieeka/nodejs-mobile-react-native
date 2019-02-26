"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("@nestjs/common/constants");
const lodash_1 = require("lodash");
const swagger_explorer_1 = require("./swagger-explorer");
const swagger_transformer_1 = require("./swagger-transformer");
class SwaggerScanner {
    constructor() {
        this.explorer = new swagger_explorer_1.SwaggerExplorer();
        this.transfomer = new swagger_transformer_1.SwaggerTransformer();
    }
    scanApplication(app, includedModules) {
        const { container } = app;
        const modules = this.getModules(container.getModules(), includedModules);
        const denormalizedPaths = lodash_1.map(modules, ({ routes, metatype }) => {
            // Note: nest-router
            // Get the module path (if any), to prefix it for all the module controllers.
            const path = metatype
                ? Reflect.getMetadata(constants_1.MODULE_PATH, metatype)
                : undefined;
            return this.scanModuleRoutes(routes, path);
        });
        return Object.assign({}, this.transfomer.normalizePaths(lodash_1.flatten(denormalizedPaths)), { definitions: lodash_1.reduce(this.explorer.getModelsDefinitons(), lodash_1.extend) });
    }
    scanModuleRoutes(routes, modulePath) {
        const denormalizedArray = [...routes.values()].map(ctrl => this.explorer.exploreController(ctrl, modulePath));
        return lodash_1.flatten(denormalizedArray);
    }
    getModules(modulesContainer, include) {
        if (!include || lodash_1.isEmpty(include)) {
            return [...modulesContainer.values()];
        }
        return [...modulesContainer.values()].filter(({ metatype }) => include.some(item => item === metatype));
    }
}
exports.SwaggerScanner = SwaggerScanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci1zY2FubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2V4dGVybmFsL25lc3Rqcy1zd2FnZ2VyL3N3YWdnZXItc2Nhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUF1RDtBQUN2RCxtQ0FBK0Q7QUFFL0QseURBQXFEO0FBQ3JELCtEQUEyRDtBQUUzRCxNQUFhLGNBQWM7SUFBM0I7UUFDbUIsYUFBUSxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLHdDQUFrQixFQUFFLENBQUM7SUFxQ3pELENBQUM7SUFuQ1EsZUFBZSxDQUFDLEdBQUcsRUFBRSxlQUE0QjtRQUN0RCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0saUJBQWlCLEdBQUcsWUFBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7WUFDOUQsb0JBQW9CO1lBQ3BCLDZFQUE2RTtZQUM3RSxNQUFNLElBQUksR0FBRyxRQUFRO2dCQUNuQixDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyx1QkFBVyxFQUFFLFFBQVEsQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNILHlCQUNLLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGdCQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUM3RCxXQUFXLEVBQUUsZUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxlQUFNLENBQUMsSUFDaEU7SUFDSixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQVU7UUFDeEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUNsRCxDQUFDO1FBQ0YsT0FBTyxnQkFBTyxDQUFDLGlCQUFpQixDQUFRLENBQUM7SUFDM0MsQ0FBQztJQUVNLFVBQVUsQ0FDZixnQkFBK0IsRUFDL0IsT0FBbUI7UUFFbkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUM1RCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUN4QyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBdkNELHdDQXVDQyJ9