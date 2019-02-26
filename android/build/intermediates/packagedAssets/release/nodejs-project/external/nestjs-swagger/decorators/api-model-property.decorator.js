"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
const helpers_1 = require("./helpers");
exports.ApiModelProperty = (metadata = {}, dtoDownOptions, dtoUpOptions) => {
    return (target, propertyKey) => {
        const dtopDownExposeDecorator = class_transformer_1.Expose(dtoDownOptions);
        dtopDownExposeDecorator(target, propertyKey);
        const dtoUpAllowDecorator = class_validator_1.Allow(dtoUpOptions);
        dtoUpAllowDecorator(target, propertyKey);
        const [type, isArray] = helpers_1.getTypeIsArrayTuple(metadata.type, metadata.isArray);
        const propertyDecorator = helpers_1.createPropertyDecorator(constants_1.DECORATORS.API_MODEL_PROPERTIES, Object.assign({}, metadata, { type,
            isArray }));
        propertyDecorator(target, propertyKey);
        if (type && lodash_1.isFunction(type)) {
            const dtoUpTypeDecorator = class_transformer_1.Type(() => type);
            dtoUpTypeDecorator(target, propertyKey);
        }
    };
};
exports.ApiModelPropertyOptional = (metadata = {}, exposeOptions) => exports.ApiModelProperty(Object.assign({}, metadata, { required: false }), exposeOptions);
exports.ApiResponseModelProperty = (metadata = {}) => exports.ApiModelProperty(Object.assign({}, metadata));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLW1vZGVsLXByb3BlcnR5LmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHRlcm5hbC9uZXN0anMtc3dhZ2dlci9kZWNvcmF0b3JzL2FwaS1tb2RlbC1wcm9wZXJ0eS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBOEY7QUFDOUYscURBQXlFO0FBQ3pFLG1DQUFvQztBQUNwQyw0Q0FBMEM7QUFFMUMsdUNBQXlFO0FBRTVELFFBQUEsZ0JBQWdCLEdBQUcsQ0FDOUIsV0EwQkksRUFBRSxFQUNOLGNBQThCLEVBQzlCLFlBQWdDLEVBQ2IsRUFBRTtJQUNyQixPQUFPLENBQUMsTUFBYyxFQUFFLFdBQW1CLEVBQUUsRUFBRTtRQUM3QyxNQUFNLHVCQUF1QixHQUFHLDBCQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUQsdUJBQXVCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sbUJBQW1CLEdBQUcsdUJBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyw2QkFBbUIsQ0FDekMsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLENBQUMsT0FBTyxDQUNqQixDQUFDO1FBQ0YsTUFBTSxpQkFBaUIsR0FBRyxpQ0FBdUIsQ0FDL0Msc0JBQVUsQ0FBQyxvQkFBb0Isb0JBRTFCLFFBQVEsSUFDWCxJQUFJO1lBQ0osT0FBTyxJQUVWLENBQUM7UUFDRixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFdkMsSUFBSSxJQUFJLElBQUksbUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixNQUFNLGtCQUFrQixHQUFHLHdCQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRVcsUUFBQSx3QkFBd0IsR0FBRyxDQUN0QyxXQXlCSSxFQUFFLEVBQ04sYUFBNkIsRUFDVixFQUFFLENBQ3JCLHdCQUFnQixtQkFFVCxRQUFRLElBQ1gsUUFBUSxFQUFFLEtBQUssS0FFakIsYUFBYSxDQUNkLENBQUM7QUFFUyxRQUFBLHdCQUF3QixHQUFHLENBQ3RDLFdBR0ksRUFBRSxFQUNhLEVBQUUsQ0FDckIsd0JBQWdCLG1CQUNYLFFBQVEsRUFDWCxDQUFDIn0=