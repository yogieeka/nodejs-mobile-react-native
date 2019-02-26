"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Decimal = require('decimal.js');
exports.LDecimal = Decimal.clone({
    precision: 20,
    rounding: Decimal.ROUND_HALF_EVEN
});
exports.MathUtils = {
    roundToNearestHundred(val) {
        return exports.LDecimal(val || 0)
            .dividedBy(100)
            .toDP(0)
            .times(100)
            .toDP(0)
            .toNumber();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC91dGlscy9tYXRoLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFekIsUUFBQSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNwQyxTQUFTLEVBQUUsRUFBRTtJQUNiLFFBQVEsRUFBRSxPQUFPLENBQUMsZUFBZTtDQUNsQyxDQUFDLENBQUM7QUFFVSxRQUFBLFNBQVMsR0FBRztJQUN2QixxQkFBcUIsQ0FBQyxHQUFHO1FBQ3ZCLE9BQU8sZ0JBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1AsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDUCxRQUFRLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQyJ9