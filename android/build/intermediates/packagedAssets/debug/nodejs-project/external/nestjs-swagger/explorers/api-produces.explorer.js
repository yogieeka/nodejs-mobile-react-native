"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.exploreGlobalApiProducesMetadata = metatype => {
    const produces = Reflect.getMetadata(constants_1.DECORATORS.API_PRODUCES, metatype);
    return produces ? { produces } : undefined;
};
exports.exploreApiProducesMetadata = (_instance, _prototype, method) => {
    return Reflect.getMetadata(constants_1.DECORATORS.API_PRODUCES, method);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXByb2R1Y2VzLmV4cGxvcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2V4dGVybmFsL25lc3Rqcy1zd2FnZ2VyL2V4cGxvcmVycy9hcGktcHJvZHVjZXMuZXhwbG9yZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBMEM7QUFFN0IsUUFBQSxnQ0FBZ0MsR0FBRyxRQUFRLENBQUMsRUFBRTtJQUN6RCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLHNCQUFVLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBRVcsUUFBQSwwQkFBMEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDMUUsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLHNCQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyJ9