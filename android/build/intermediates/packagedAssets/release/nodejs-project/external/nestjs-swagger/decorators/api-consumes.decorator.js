"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const helpers_1 = require("./helpers");
exports.ApiConsumes = (...mimeTypes) => {
    return helpers_1.createMixedDecorator(constants_1.DECORATORS.API_CONSUMES, mimeTypes);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWNvbnN1bWVzLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHRlcm5hbC9uZXN0anMtc3dhZ2dlci9kZWNvcmF0b3JzL2FwaS1jb25zdW1lcy5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBMEM7QUFDMUMsdUNBQWlEO0FBRXBDLFFBQUEsV0FBVyxHQUFHLENBQUMsR0FBRyxTQUFtQixFQUFFLEVBQUU7SUFDcEQsT0FBTyw4QkFBb0IsQ0FBQyxzQkFBVSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUMifQ==