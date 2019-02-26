'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        fullName: DataTypes.STRING,
        pinNumber: DataTypes.STRING,
        allowToPay: DataTypes.BOOLEAN,
        allowToCancel: DataTypes.BOOLEAN,
        allowToEdit: DataTypes.BOOLEAN,
        pictureUrl: DataTypes.STRING,
        pictureLocal: DataTypes.STRING,
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
    user.associate = function (models) {
        // associations can be defined here
    };
    return user;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vdXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzNCLE1BQU0sRUFDTjtRQUNFLEVBQUUsRUFBRTtZQUNGLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDM0IsUUFBUSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQzFCLFFBQVEsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUMxQixTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDM0IsVUFBVSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQzdCLGFBQWEsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNoQyxXQUFXLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDOUIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQzVCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUM5QixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsWUFBWSxFQUFFLEtBQUs7U0FDcEI7S0FDRixFQUNEO1FBQ0UsWUFBWSxFQUFFO1lBQ1osS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtLQUNGLENBQ0YsQ0FBQztJQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQzlCLG1DQUFtQztJQUNyQyxDQUFDLENBQUM7SUFDRixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyJ9