"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
const helpers_1 = require("./helpers");
const initialMetadata = {
    summary: ''
};
exports.ApiOperation = (metadata) => {
    return helpers_1.createMethodDecorator(constants_1.DECORATORS.API_OPERATION, lodash_1.pickBy(Object.assign({}, initialMetadata, { summary: lodash_1.isNil(metadata.title)
            ? initialMetadata.summary
            : metadata.title, description: metadata.description, operationId: metadata.operationId, deprecated: metadata.deprecated }), lodash_1.negate(lodash_1.isUndefined)));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLW9wZXJhdGlvbi5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZXh0ZXJuYWwvbmVzdGpzLXN3YWdnZXIvZGVjb3JhdG9ycy9hcGktb3BlcmF0aW9uLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE0RDtBQUM1RCw0Q0FBMEM7QUFDMUMsdUNBQWtEO0FBRWxELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLE9BQU8sRUFBRSxFQUFFO0NBQ1osQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHLENBQUMsUUFLNUIsRUFBbUIsRUFBRTtJQUNwQixPQUFPLCtCQUFxQixDQUMxQixzQkFBVSxDQUFDLGFBQWEsRUFDeEIsZUFBTSxtQkFFQyxlQUFlLElBQ2xCLE9BQU8sRUFBRSxjQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM1QixDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU87WUFDekIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQ2xCLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUNqQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFDakMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEtBRWpDLGVBQU0sQ0FBQyxvQkFBVyxDQUFDLENBQ3BCLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9