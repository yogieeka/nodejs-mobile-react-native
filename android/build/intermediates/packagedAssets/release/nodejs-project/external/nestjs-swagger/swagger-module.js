"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const load_package_util_1 = require("@nestjs/common/utils/load-package.util");
const core_1 = require("@nestjs/core");
const swaggerUi = __importStar(require("swagger-ui-express"));
const swagger_scanner_1 = require("./swagger-scanner");
class SwaggerModule {
    static createDocument(app, config, options = {}) {
        const document = this.swaggerScanner.scanApplication(app, options.include || []);
        return Object.assign({}, config, document, { swagger: '2.0' });
    }
    static setup(path, app, document, options) {
        const validatePath = (pathToValidate) => pathToValidate.charAt(0) !== '/' ? '/' + pathToValidate : pathToValidate;
        const httpServer = app.getHttpServer();
        if (httpServer instanceof core_1.FastifyAdapter) {
            return this.setupFastify(path, httpServer, document);
        }
        const finalPath = validatePath(path);
        const swaggerHtml = swaggerUi.generateHTML(document, options);
        app.use(finalPath, swaggerUi.serveFiles(document, options));
        app.use(finalPath, (_req, res) => res.send(swaggerHtml));
        app.use(finalPath + '-json', (_req, res) => res.json(document));
    }
    static setupFastify(path, httpServer, document) {
        httpServer.register(load_package_util_1.loadPackage('fastify-swagger', 'SwaggerModule'), {
            swagger: document,
            exposeRoute: true,
            routePrefix: path,
            mode: 'static',
            specification: {
                document
            }
        });
    }
}
SwaggerModule.swaggerScanner = new swagger_scanner_1.SwaggerScanner();
exports.SwaggerModule = SwaggerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXh0ZXJuYWwvbmVzdGpzLXN3YWdnZXIvc3dhZ2dlci1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsOEVBQXFFO0FBQ3JFLHVDQUE4QztBQUM5Qyw4REFBZ0Q7QUFPaEQsdURBQW1EO0FBRW5ELE1BQWEsYUFBYTtJQUVqQixNQUFNLENBQUMsY0FBYyxDQUMxQixHQUFxQixFQUNyQixNQUF5QixFQUN6QixVQUFrQyxFQUFFO1FBRXBDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUNsRCxHQUFHLEVBQ0gsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQ3RCLENBQUM7UUFDRix5QkFDSyxNQUFNLEVBQ04sUUFBUSxJQUNYLE9BQU8sRUFBRSxLQUFLLElBQ2Q7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQUssQ0FDakIsSUFBWSxFQUNaLEdBQXFCLEVBQ3JCLFFBQXlCLEVBQ3pCLE9BQThCO1FBRTlCLE1BQU0sWUFBWSxHQUFHLENBQUMsY0FBYyxFQUFVLEVBQUUsQ0FDOUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUUzRSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxVQUFVLFlBQVkscUJBQWMsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RDtRQUNELE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBR08sTUFBTSxDQUFDLFlBQVksQ0FDekIsSUFBWSxFQUNaLFVBQTBCLEVBQzFCLFFBQXlCO1FBRXpCLFVBQVUsQ0FBQyxRQUFRLENBQUMsK0JBQVcsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsRUFBRTtZQUNuRSxPQUFPLEVBQUUsUUFBUTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixJQUFJLEVBQUUsUUFBUTtZQUNkLGFBQWEsRUFBRTtnQkFDYixRQUFRO2FBQ1Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztBQWhCdUIsNEJBQWMsR0FBRyxJQUFJLGdDQUFjLEVBQUUsQ0FBQztBQXRDaEUsc0NBdURDIn0=