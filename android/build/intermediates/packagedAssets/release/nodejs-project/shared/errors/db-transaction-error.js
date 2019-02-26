"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbTransactionError extends Error {
    constructor(dbError) {
        super(dbError.message);
        this.dbError = dbError;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, DbTransactionError.prototype);
    }
}
exports.DbTransactionError = DbTransactionError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItdHJhbnNhY3Rpb24tZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL2Vycm9ycy9kYi10cmFuc2FjdGlvbi1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQWEsa0JBQW1CLFNBQVEsS0FBSztJQUczQyxZQUFZLE9BQU87UUFDZixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLGdDQUFnQztRQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0Y7QUFWRCxnREFVQyJ9