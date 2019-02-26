'use strict';
module.exports = (sequelize, DataTypes) => {
    const printerClient = sequelize.define('printerClient', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        deviceId: DataTypes.UUID,
        printerAreaId: DataTypes.UUID,
        type: DataTypes.STRING,
        ip: DataTypes.STRING,
        port: DataTypes.INTEGER,
        macAddress: DataTypes.STRING,
        name: DataTypes.STRING,
        paperSize: DataTypes.INTEGER
    });
    printerClient.associate = function (models) {
        models.printerClient.belongsTo(models.printerArea, {
            foreignKey: 'printerAreaId'
        });
    };
    return printerClient;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VxdWVsaXplL3RhYmxlcy9kYi1tYWluL3ByaW50ZXItY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7UUFDdEQsRUFBRSxFQUFFO1lBQ0YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSTtRQUN4QixhQUFhLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDN0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3RCLEVBQUUsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDdkIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQzVCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsU0FBUyxDQUFDLE9BQU87S0FDN0IsQ0FBQyxDQUFDO0lBQ0gsYUFBYSxDQUFDLFNBQVMsR0FBRyxVQUFTLE1BQU07UUFDdkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUNqRCxVQUFVLEVBQUUsZUFBZTtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUMifQ==