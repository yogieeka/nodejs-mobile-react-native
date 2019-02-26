"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.exploreGlobalApiUseTagsMetadata = metatype => {
    const tags = Reflect.getMetadata(constants_1.DECORATORS.API_USE_TAGS, metatype);
    return tags ? { tags } : undefined;
};
exports.exploreApiUseTagsMetadata = (_instance, _prototype, method) => {
    return Reflect.getMetadata(constants_1.DECORATORS.API_USE_TAGS, method);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXVzZS10YWdzLmV4cGxvcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2V4dGVybmFsL25lc3Rqcy1zd2FnZ2VyL2V4cGxvcmVycy9hcGktdXNlLXRhZ3MuZXhwbG9yZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBMEM7QUFFN0IsUUFBQSwrQkFBK0IsR0FBRyxRQUFRLENBQUMsRUFBRTtJQUN4RCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLHNCQUFVLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRVcsUUFBQSx5QkFBeUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDekUsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLHNCQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyJ9