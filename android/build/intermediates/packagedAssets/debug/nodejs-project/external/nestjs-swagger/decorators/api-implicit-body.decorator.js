"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const helpers_1 = require("./helpers");
const initialMetadata = {
    name: '',
    required: true,
    type: String
};
exports.ApiImplicitBody = (metadata) => {
    const [type, isArray] = helpers_1.getTypeIsArrayTuple(metadata.type, metadata.isArray);
    const param = {
        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,
        in: 'body',
        description: metadata.description,
        required: metadata.required,
        type,
        isArray
    };
    return helpers_1.createParamDecorator(param, initialMetadata);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWltcGxpY2l0LWJvZHkuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2V4dGVybmFsL25lc3Rqcy1zd2FnZ2VyL2RlY29yYXRvcnMvYXBpLWltcGxpY2l0LWJvZHkuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQStCO0FBQy9CLHVDQUFzRTtBQUV0RSxNQUFNLGVBQWUsR0FBRztJQUN0QixJQUFJLEVBQUUsRUFBRTtJQUNSLFFBQVEsRUFBRSxJQUFJO0lBQ2QsSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDO0FBRVcsUUFBQSxlQUFlLEdBQUcsQ0FBQyxRQU0vQixFQUFtQixFQUFFO0lBQ3BCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsNkJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0UsTUFBTSxLQUFLLEdBQUc7UUFDWixJQUFJLEVBQUUsY0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDakUsRUFBRSxFQUFFLE1BQU07UUFDVixXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7UUFDakMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1FBQzNCLElBQUk7UUFDSixPQUFPO0tBQ1IsQ0FBQztJQUNGLE9BQU8sOEJBQW9CLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyJ9