'use strict';
module.exports = (sequelize, DataTypes) => {
    const log = sequelize.define('log', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        userId: DataTypes.UUID,
        orderId: DataTypes.UUID,
        description: DataTypes.STRING,
        date: DataTypes.DATE
    });
    log.associate = function (models) {
        // associations can be defined here
    };
    return log;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS90YWJsZXMvZGItbWFpbi9sb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUN4QyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUMxQixLQUFLLEVBQ0w7UUFDRSxFQUFFLEVBQUU7WUFDRixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSTtRQUN2QixXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDN0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0tBQ3JCLENBQ0YsQ0FBQztJQUNGLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQzdCLG1DQUFtQztJQUNyQyxDQUFDLENBQUM7SUFDRixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyJ9