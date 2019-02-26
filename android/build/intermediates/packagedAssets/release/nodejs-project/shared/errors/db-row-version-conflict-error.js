"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbRowVersionConflictError extends Error {
    constructor() {
        super("Data sudah diubah oleh user lain. Silahkan refresh terlebih dahulu");
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, DbRowVersionConflictError.prototype);
    }
}
exports.DbRowVersionConflictError = DbRowVersionConflictError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItcm93LXZlcnNpb24tY29uZmxpY3QtZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL2Vycm9ycy9kYi1yb3ctdmVyc2lvbi1jb25mbGljdC1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQWEseUJBQTBCLFNBQVEsS0FBSztJQUNsRDtRQUNJLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO1FBRTVFLGdDQUFnQztRQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7QUFQRCw4REFPQyJ9