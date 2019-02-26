"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const helpers_1 = require("./helpers");
const initialMetadata = {
    name: '',
    required: true
};
exports.ApiImplicitQuery = (metadata) => {
    const param = {
        name: lodash_1.isNil(metadata.name) ? initialMetadata.name : metadata.name,
        in: 'query',
        description: metadata.description,
        required: metadata.required,
        type: metadata.type,
        enum: undefined,
        items: undefined,
        collectionFormat: undefined
    };
    if (metadata.enum) {
        param.type = String;
        param.enum = metadata.enum;
    }
    if (metadata.isArray) {
        param.type = Array;
        if (metadata.enum) {
            param.items = {
                type: 'String',
                enum: metadata.enum
            };
            param.collectionFormat = 'multi';
            param.enum = undefined;
        }
        else {
            param.items = {
                type: metadata.type
            };
            param.collectionFormat = lodash_1.isNil(metadata.collectionFormat)
                ? 'csv'
                : metadata.collectionFormat;
        }
    }
    return helpers_1.createParamDecorator(param, initialMetadata);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWltcGxpY2l0LXF1ZXJ5LmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHRlcm5hbC9uZXN0anMtc3dhZ2dlci9kZWNvcmF0b3JzL2FwaS1pbXBsaWNpdC1xdWVyeS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBK0I7QUFFL0IsdUNBQWlEO0FBRWpELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLElBQUksRUFBRSxFQUFFO0lBQ1IsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBRVcsUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLFFBUWhDLEVBQW1CLEVBQUU7SUFDcEIsTUFBTSxLQUFLLEdBQUc7UUFDWixJQUFJLEVBQUUsY0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDakUsRUFBRSxFQUFFLE9BQU87UUFDWCxXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7UUFDakMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1FBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtRQUNuQixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxTQUFTO1FBQ2hCLGdCQUFnQixFQUFFLFNBQVM7S0FDNUIsQ0FBQztJQUVGLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtRQUNqQixLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNwQixLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDNUI7SUFFRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7UUFDcEIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxLQUFLLEdBQUc7Z0JBQ1osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2FBQ3BCLENBQUM7WUFDRixLQUFLLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxLQUFLLENBQUMsS0FBSyxHQUFHO2dCQUNaLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTthQUNwQixDQUFDO1lBQ0YsS0FBSyxDQUFDLGdCQUFnQixHQUFHLGNBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxLQUFLO2dCQUNQLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7U0FDL0I7S0FDRjtJQUNELE9BQU8sOEJBQW9CLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyJ9