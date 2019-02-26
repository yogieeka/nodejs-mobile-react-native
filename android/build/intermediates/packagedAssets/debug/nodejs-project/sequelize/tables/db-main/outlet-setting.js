'use strict';
module.exports = (sequelize, DataTypes) => {
    const outletSetting = sequelize.define('outletSetting', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        lastLoginUseId: DataTypes.UUID,
        lastOrderNumberCount: DataTypes.INTEGER,
        lastOrderNumberDate: DataTypes.DATE,
        serviceCharged: DataTypes.BOOLEAN,
        serviceChargeRate: DataTypes.DECIMAL,
        serviceChargeTaxId: DataTypes.UUID,
        serviceChargeTaxRate: DataTypes.DECIMAL,
        taxed: DataTypes.BOOLEAN,
        taxInclusive: DataTypes.BOOLEAN,
        taxOnSales: DataTypes.BOOLEAN,
        lastSyncTime: DataTypes.DATE,
    });
    outletSetting.associate = function (models) {
        // associations can be defined here
    };
    return outletSetting;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXNldHRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VxdWVsaXplL3RhYmxlcy9kYi1tYWluL291dGxldC1zZXR0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDcEMsZUFBZSxFQUNmO1FBQ0UsRUFBRSxFQUFFO1lBQ0YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3hCO1FBQ0QsY0FBYyxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQzlCLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQ3ZDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ25DLGNBQWMsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNqQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNwQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsSUFBSTtRQUNsQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsT0FBTztRQUN2QyxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDeEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQy9CLFVBQVUsRUFBRSxTQUFTLENBQUMsT0FBTztRQUM3QixZQUFZLEVBQUUsU0FBUyxDQUFDLElBQUk7S0FDN0IsQ0FDRixDQUFDO0lBQ0YsYUFBYSxDQUFDLFNBQVMsR0FBRyxVQUFTLE1BQU07UUFDdkMsbUNBQW1DO0lBQ3JDLENBQUMsQ0FBQztJQUNGLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyJ9