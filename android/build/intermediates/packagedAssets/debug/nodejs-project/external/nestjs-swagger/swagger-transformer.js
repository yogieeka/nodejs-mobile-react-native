"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class SwaggerTransformer {
    normalizePaths(denormalizedDoc) {
        const doc = lodash_1.filter(denormalizedDoc, r => r.root);
        const groupedByPath = lodash_1.groupBy(doc, ({ root }) => root.path);
        const paths = lodash_1.mapValues(groupedByPath, routes => {
            const keyByMethod = lodash_1.keyBy(routes, ({ root }) => root.method);
            return lodash_1.mapValues(keyByMethod, (route) => {
                return Object.assign({}, lodash_1.omit(route.root, ['method', 'path']), lodash_1.omit(route, 'root'));
            });
        });
        return {
            paths,
        };
    }
}
exports.SwaggerTransformer = SwaggerTransformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci10cmFuc2Zvcm1lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHRlcm5hbC9uZXN0anMtc3dhZ2dlci9zd2FnZ2VyLXRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQWlFO0FBRWpFLE1BQWEsa0JBQWtCO0lBQ3RCLGNBQWMsQ0FBQyxlQUFlO1FBQ25DLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsTUFBTSxhQUFhLEdBQUcsZ0JBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsTUFBTSxLQUFLLEdBQUcsa0JBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDOUMsTUFBTSxXQUFXLEdBQUcsY0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRSxPQUFPLGtCQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQzNDLHlCQUNLLGFBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQ3BDLGFBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQ3RCO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLO1NBQ04sQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWpCRCxnREFpQkMifQ==