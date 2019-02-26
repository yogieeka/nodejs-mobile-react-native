"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const helpers_1 = require("./helpers");
exports.ApiOAuth2Auth = (scopes) => {
    return helpers_1.createMixedDecorator(constants_1.DECORATORS.API_OAUTH2, scopes ? scopes : []);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLW9hdXRoMi5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZXh0ZXJuYWwvbmVzdGpzLXN3YWdnZXIvZGVjb3JhdG9ycy9hcGktb2F1dGgyLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUEwQztBQUMxQyx1Q0FBaUQ7QUFFcEMsUUFBQSxhQUFhLEdBQUcsQ0FBQyxNQUFpQixFQUFFLEVBQUU7SUFDakQsT0FBTyw4QkFBb0IsQ0FBQyxzQkFBVSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0UsQ0FBQyxDQUFDIn0=