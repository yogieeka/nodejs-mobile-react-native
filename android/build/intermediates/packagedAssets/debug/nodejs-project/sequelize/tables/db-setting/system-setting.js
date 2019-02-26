'use strict';
module.exports = (sequelize, DataTypes) => {
    const systemSetting = sequelize.define('systemSetting', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        activeAccountId: DataTypes.UUID
    });
    systemSetting.associate = function (models) {
        models.systemSetting.belongsTo(models.account, {
            foreignKey: 'activeAccountId',
            constraints: false
        });
    };
    return systemSetting;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLXNldHRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VxdWVsaXplL3RhYmxlcy9kYi1zZXR0aW5nL3N5c3RlbS1zZXR0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7UUFDdEQsRUFBRSxFQUFFO1lBQ0YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3hCO1FBQ0QsZUFBZSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0tBQ2hDLENBQUMsQ0FBQztJQUVILGFBQWEsQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQ3ZDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDN0MsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUMifQ==