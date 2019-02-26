"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decoratorQueue = [];
function DeferDecorator(fn) {
    return function (_a, _b) {
        decoratorQueue.push([fn, [...arguments]]);
    };
}
exports.DeferDecorator = DeferDecorator;
function applyDecorators() {
    while (decoratorQueue.length) {
        const [fn, args] = decoratorQueue.shift();
        const decorators = fn();
        for (const decorator of decorators) {
            decorator.apply(null, args);
        }
    }
}
exports.applyDecorators = applyDecorators;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXItZGVjb3JhdG9yLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvZGVjb3JhdG9yL2RlZmVyLWRlY29yYXRvci5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFFMUIsU0FBZ0IsY0FBYyxDQUFDLEVBQW9CO0lBQ2pELE9BQU8sVUFBUyxFQUFFLEVBQUUsRUFBRTtRQUNwQixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUpELHdDQUlDO0FBRUQsU0FBZ0IsZUFBZTtJQUM3QixPQUFPLGNBQWMsQ0FBQyxNQUFNLEVBQUU7UUFDNUIsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsTUFBTSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDeEIsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0I7S0FDRjtBQUNILENBQUM7QUFSRCwwQ0FRQyJ9