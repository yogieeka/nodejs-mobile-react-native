'use strict';
module.exports = (sequelize, DataTypes) => {
    const customer = sequelize.define('customer', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        address: DataTypes.STRING,
        company: DataTypes.STRING,
        dateOfBirth: DataTypes.DATE,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        firstName: DataTypes.STRING,
        gender: DataTypes.STRING,
        isSync: DataTypes.BOOLEAN,
        lastEdit: DataTypes.DATE,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        syncDate: DataTypes.DATE,
        createdByUserId: DataTypes.STRING,
        lastUpdatedByUserId: DataTypes.STRING,
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        defaultScope: {
            where: {
                deleted: false
            }
        }
    });
    customer.associate = function (models) {
        // associations can be defined here
    };
    return customer;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VxdWVsaXplL3RhYmxlcy9kYi1tYWluL2N1c3RvbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsVUFBVSxFQUNWO1FBQ0UsRUFBRSxFQUFFO1lBQ0YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELE9BQU8sRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN6QixPQUFPLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDekIsV0FBVyxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQzNCLFdBQVcsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUM3QixLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDdkIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQzNCLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN4QixNQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDekIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ3hCLFFBQVEsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUMxQixLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDdkIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ3hCLGVBQWUsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUNqQyxtQkFBbUIsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUNyQyxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsWUFBWSxFQUFFLEtBQUs7U0FDcEI7S0FDRixFQUNEO1FBQ0UsWUFBWSxFQUFFO1lBQ1osS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtLQUNGLENBQ0YsQ0FBQztJQUVGLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQ2xDLG1DQUFtQztJQUNyQyxDQUFDLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUMifQ==