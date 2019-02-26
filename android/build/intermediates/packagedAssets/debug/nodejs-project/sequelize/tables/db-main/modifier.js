'use strict';
module.exports = (sequelize, DataTypes) => {
    const modifier = sequelize.define('modifier', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        name: DataTypes.STRING,
        required: DataTypes.BOOLEAN,
        allowMultiple: DataTypes.BOOLEAN,
        maximumAllowed: DataTypes.INTEGER,
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
    modifier.associate = function (models) {
        models.modifier.hasMany(models.modifierItem, {
            foreignKey: 'modifierId',
            as: 'items',
            constraints: false
        });
        models.modifier.belongsToMany(models.product, {
            through: models.productModifierRelation,
            foreignKey: 'modifierId',
            constraints: false
        });
    };
    return modifier;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VxdWVsaXplL3RhYmxlcy9kYi1tYWluL21vZGlmaWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsVUFBVSxFQUNWO1FBQ0UsRUFBRSxFQUFFO1lBQ0YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixRQUFRLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDM0IsYUFBYSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQ2hDLGNBQWMsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNqQyxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsWUFBWSxFQUFFLEtBQUs7U0FDcEI7S0FDRixFQUNEO1FBQ0UsWUFBWSxFQUFFO1lBQ1osS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtLQUNGLENBQ0YsQ0FBQztJQUVGLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDM0MsVUFBVSxFQUFFLFlBQVk7WUFDeEIsRUFBRSxFQUFFLE9BQU87WUFDWCxXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzVDLE9BQU8sRUFBRSxNQUFNLENBQUMsdUJBQXVCO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyJ9