"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const helpers_1 = require("./helpers");
const initialMetadata = {
    name: '',
    required: true
};
exports.ApiImplicitHeader = (metadata) => {
    const param = {
        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,
        in: 'header',
        description: metadata.description,
        required: metadata.required,
        type: String
    };
    return helpers_1.createParamDecorator(param, initialMetadata);
};
exports.ApiImplicitHeaders = (headers) => {
    const multiMetadata = headers.map(metadata => ({
        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,
        in: 'header',
        description: metadata.description,
        required: metadata.required,
        type: String
    }));
    return helpers_1.createMultipleParamDecorator(multiMetadata, initialMetadata);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWltcGxpY2l0LWhlYWRlci5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZXh0ZXJuYWwvbmVzdGpzLXN3YWdnZXIvZGVjb3JhdG9ycy9hcGktaW1wbGljaXQtaGVhZGVyLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUErQjtBQUMvQix1Q0FBK0U7QUFFL0UsTUFBTSxlQUFlLEdBQUc7SUFDdEIsSUFBSSxFQUFFLEVBQUU7SUFDUixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFVyxRQUFBLGlCQUFpQixHQUFHLENBQUMsUUFJakMsRUFBbUIsRUFBRTtJQUNwQixNQUFNLEtBQUssR0FBRztRQUNaLElBQUksRUFBRSxjQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUNqRSxFQUFFLEVBQUUsUUFBUTtRQUNaLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVztRQUNqQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7UUFDM0IsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0lBQ0YsT0FBTyw4QkFBb0IsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxrQkFBa0IsR0FBRyxDQUNoQyxPQUlFLEVBQ2UsRUFBRTtJQUNuQixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLEVBQUUsY0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDakUsRUFBRSxFQUFFLFFBQVE7UUFDWixXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7UUFDakMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1FBQzNCLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDSixPQUFPLHNDQUE0QixDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUMifQ==