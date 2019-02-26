"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const db_transaction_error_1 = require("../errors/db-transaction-error");
const validation_error_1 = require("../errors/validation-error");
exports.HttpUtils = {
    generateHttpErrorResponse(error) {
        if (error instanceof validation_error_1.ValidationError) {
            const errorMessage = error.errorDictionary.getErrorMessageText();
            return new common_1.HttpException(errorMessage, common_1.HttpStatus.BAD_REQUEST);
        }
        else if (error instanceof db_transaction_error_1.DbTransactionError) {
            const errorMessage = 'Gagal memproses data. Error: ' + error.dbError.message;
            return new common_1.HttpException(errorMessage, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else {
            const errorMessage = 'Telah terjadi kesalahan pada server. Maaf atas ketidaknyamanan. Silahkan kontak customer support kami. Error: ' + error.message;
            return new common_1.HttpException(errorMessage, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC91dGlscy9odHRwLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkQ7QUFDM0QseUVBQW9FO0FBQ3BFLGlFQUE2RDtBQUVoRCxRQUFBLFNBQVMsR0FBRztJQUN2Qix5QkFBeUIsQ0FBQyxLQUFLO1FBQzdCLElBQUksS0FBSyxZQUFZLGtDQUFlLEVBQUU7WUFDcEMsTUFBTSxZQUFZLEdBQXFCLEtBQU0sQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNwRixPQUFPLElBQUksc0JBQWEsQ0FBQyxZQUFZLEVBQUUsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRTthQUFNLElBQUksS0FBSyxZQUFZLHlDQUFrQixFQUFFO1lBQzlDLE1BQU0sWUFBWSxHQUFHLCtCQUErQixHQUF3QixLQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuRyxPQUFPLElBQUksc0JBQWEsQ0FBQyxZQUFZLEVBQUUsbUJBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxNQUFNLFlBQVksR0FBRyxnSEFBZ0gsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3RKLE9BQU8sSUFBSSxzQkFBYSxDQUFDLFlBQVksRUFBRSxtQkFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0NBQ0YsQ0FBQyJ9