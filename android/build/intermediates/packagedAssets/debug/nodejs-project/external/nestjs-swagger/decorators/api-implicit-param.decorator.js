"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const helpers_1 = require("./helpers");
const initialMetadata = {
    name: '',
    required: true
};
exports.ApiImplicitParam = (metadata) => {
    const param = {
        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,
        in: 'path',
        description: metadata.description,
        required: metadata.required,
        type: metadata.type
    };
    return helpers_1.createParamDecorator(param, initialMetadata);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWltcGxpY2l0LXBhcmFtLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHRlcm5hbC9uZXN0anMtc3dhZ2dlci9kZWNvcmF0b3JzL2FwaS1pbXBsaWNpdC1wYXJhbS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBK0I7QUFDL0IsdUNBQWlEO0FBRWpELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLElBQUksRUFBRSxFQUFFO0lBQ1IsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBRVcsUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLFFBS2hDLEVBQW1CLEVBQUU7SUFDcEIsTUFBTSxLQUFLLEdBQUc7UUFDWixJQUFJLEVBQUUsY0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDakUsRUFBRSxFQUFFLE1BQU07UUFDVixXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7UUFDakMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1FBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtLQUNwQixDQUFDO0lBQ0YsT0FBTyw4QkFBb0IsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDIn0=