"use strict";
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
const core_1 = require("@nestjs/core");
require("reflect-metadata");
const app_config_1 = require("./app.config");
const app_module_1 = require("./app.module");
const nestjs_swagger_1 = require("./external/nestjs-swagger");
const defer_decorator_decorator_1 = require("./shared/decorator/defer-decorator.decorator");
const error_handler_interceptor_1 = require("./shared/interceptor/error-handler.interceptor");
const response_serializer_interceptor_1 = require("./shared/interceptor/response-serializer.interceptor");
const bootstrap_service_1 = require("./shared/services/bootstrap.service");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        process.on('unhandledRejection', error => {
            console.error(error);
        });
        yield new bootstrap_service_1.BootstrapService().boot();
        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);
        app.useGlobalInterceptors(new error_handler_interceptor_1.ErrorHandlerInterceptor(), new response_serializer_interceptor_1.ResponseSerializerInterceptor());
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            transform: true
        }));
        defer_decorator_decorator_1.applyDecorators();
        // todo: disable swagger on production environment
        const options = new nestjs_swagger_1.DocumentBuilder()
            .setTitle('Luna Middle Backend')
            .setDescription('Forward luna-mobile to luna-backend')
            .setVersion('1.0')
            .build();
        const document = nestjs_swagger_1.SwaggerModule.createDocument(app, options);
        nestjs_swagger_1.SwaggerModule.setup('api', app, document);
        yield app.listen(3000);
        const rnBridge = app_config_1.getRnBridge();
        if (rnBridge) {
            rnBridge.channel.send('INITIALIZED');
        }
    });
}
exports.bootstrap = bootstrap;
if (process.env.NODE_ENV !== 'test') {
    bootstrap();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnRDtBQUNoRCx1Q0FBMkM7QUFDM0MsNEJBQTBCO0FBQzFCLDZDQUEyQztBQUMzQyw2Q0FBaUQ7QUFDakQsOERBQTJFO0FBQzNFLDRGQUErRTtBQUMvRSw4RkFBeUY7QUFDekYsMEdBQXFHO0FBQ3JHLDJFQUF1RTtBQUV2RSxTQUFzQixTQUFTOztRQUM3QixPQUFPLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksb0NBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsTUFBTSxDQUFDLDhCQUFpQixDQUFDLENBQUM7UUFDeEQsR0FBRyxDQUFDLHFCQUFxQixDQUN2QixJQUFJLG1EQUF1QixFQUFFLEVBQzdCLElBQUksK0RBQTZCLEVBQUUsQ0FDcEMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxjQUFjLENBQ2hCLElBQUksdUJBQWMsQ0FBQztZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FDSCxDQUFDO1FBRUYsMkNBQWUsRUFBRSxDQUFDO1FBRWxCLGtEQUFrRDtRQUNsRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGdDQUFlLEVBQUU7YUFDbEMsUUFBUSxDQUFDLHFCQUFxQixDQUFDO2FBQy9CLGNBQWMsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ2pCLEtBQUssRUFBRSxDQUFDO1FBQ1gsTUFBTSxRQUFRLEdBQUcsOEJBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVELDhCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFMUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLE1BQU0sUUFBUSxHQUFHLHdCQUFXLEVBQUUsQ0FBQztRQUMvQixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUFBO0FBcENELDhCQW9DQztBQUVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO0lBQ25DLFNBQVMsRUFBRSxDQUFDO0NBQ2IifQ==