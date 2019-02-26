"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_db_repository_1 = require("../../shared/database/main-db-repository");
class OutletSettingRepository extends main_db_repository_1.MainDBRepository {
    getDefaultOutletSetting() {
        return this.findById(1);
    }
}
exports.OutletSettingRepository = OutletSettingRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXNldHRpbmcucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL291dGxldC1zZXR0aW5nL291dGxldC1zZXR0aW5nLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRkFBNEU7QUFHNUUsTUFBYSx1QkFBd0IsU0FBUSxxQ0FFNUM7SUFDUSx1QkFBdUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQU5ELDBEQU1DIn0=