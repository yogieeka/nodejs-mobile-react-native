"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const helpers_1 = require("./helpers");
const initialMetadata = {
    name: '',
    required: true
};
exports.ApiImplicitFile = (metadata) => {
    const param = {
        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,
        in: 'formData',
        description: metadata.description || '',
        required: metadata.required || false,
        type: 'file'
    };
    return helpers_1.createParamDecorator(param, initialMetadata);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWltcGxpY2l0LWZpbGUuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2V4dGVybmFsL25lc3Rqcy1zd2FnZ2VyL2RlY29yYXRvcnMvYXBpLWltcGxpY2l0LWZpbGUuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQStCO0FBQy9CLHVDQUFpRDtBQUVqRCxNQUFNLGVBQWUsR0FBRztJQUN0QixJQUFJLEVBQUUsRUFBRTtJQUNSLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHLENBQUMsUUFJL0IsRUFBbUIsRUFBRTtJQUNwQixNQUFNLEtBQUssR0FBRztRQUNaLElBQUksRUFBRSxjQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUNqRSxFQUFFLEVBQUUsVUFBVTtRQUNkLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxJQUFJLEVBQUU7UUFDdkMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLElBQUksS0FBSztRQUNwQyxJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7SUFDRixPQUFPLDhCQUFvQixDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMifQ==