"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const axios_logger_1 = __importDefault(require("axios-logger"));
const lodash_1 = __importDefault(require("lodash"));
const luna_1 = __importDefault(require("../../luna"));
module.exports = class HttpRequestAxiosService {
    constructor() {
        this.axios = axios_1.default.create();
        const config = luna_1.default.config.getConfig();
        if (config.axios.logging) {
            this.axios.interceptors.request.use(axios_logger_1.default.requestLogger, axios_logger_1.default.errorLogger);
            this.axios.interceptors.response.use(axios_logger_1.default.responseLogger, axios_logger_1.default.errorLogger);
        }
        this.cancelToken = axios_1.default.CancelToken;
        ['delete', 'get', 'head', 'options'].forEach(method => {
            this.axios[method] = (url, config = {}) => {
                const cancelSource = this.cancelToken.source();
                config.cancelToken = cancelSource.token;
                if (method === 'delete') {
                    lodash_1.default.set(config, 'headers["Content-Type"]', 'application/json');
                }
                return this.axios.request(Object.assign({}, config, {
                    method,
                    url
                }));
            };
        });
        ['post', 'put', 'patch'].forEach(method => {
            this.axios[method] = (url, data, config = {}) => {
                const cancelSource = this.cancelToken.source();
                config.cancelToken = cancelSource.token;
                return this.axios.request(Object.assign({}, config, {
                    method,
                    url,
                    data,
                }));
            };
        });
    }
    post(url = '', data, config = {}) {
        return this.axios.post(url, data, config).then(response => response.data);
    }
    put(url = '', data, config = {}) {
        return this.axios
            .put(url, data, config)
            .then(response => response.data)
            .catch(err => err.response.data);
    }
    get(url = '', config = {}) {
        return this.axios
            .get(url, config)
            .then(response => response.data)
            .catch(err => err.response.data);
    }
    delete(url = '', config = {}) {
        return this.axios
            .delete(url, config)
            .then(response => response.data)
            .catch(err => err.response.data);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LWF4aW9zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3NlcnZpY2VzL2h0dHAtcmVxdWVzdC1heGlvcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrREFBMEI7QUFDMUIsZ0VBQXVDO0FBQ3ZDLG9EQUF1QjtBQUN2QixzREFBOEI7QUFFOUIsaUJBQVMsTUFBTSx1QkFBdUI7SUFJcEM7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU1QixNQUFNLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXZDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBVyxDQUFDLGFBQWEsRUFBRSxzQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsc0JBQVcsQ0FBQyxjQUFjLEVBQUUsc0JBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzRjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQztRQUVyQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQWMsRUFBRSxFQUFFLEVBQUU7Z0JBQzdDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxXQUFXLEdBQUcsWUFBWSxD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