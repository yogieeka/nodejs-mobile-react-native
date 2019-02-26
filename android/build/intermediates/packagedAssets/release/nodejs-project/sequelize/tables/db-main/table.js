'use strict';
module.exports = (sequelize, DataTypes) => {
    const table = sequelize.define('table', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: DataTypes.STRING,
        areaId: DataTypes.STRING,
        inUsed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
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
    table.associate = function (models) {
        models.table.belongsTo(models.area, {
            foreignKey: 'areaId',
            constraints: false
        });
        models.table.hasMany(models.order, {
            foreignKey: 'tableId',
            constraints: false
        });
    };
    return table;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VxdWVsaXplL3RhYmxlcy9kYi1tYWluL3RhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDNUIsT0FBTyxFQUNQO1FBQ0UsRUFBRSxFQUFFO1lBQ0YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3RCLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN4QixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsWUFBWSxFQUFFLEtBQUs7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsWUFBWSxFQUFFLEtBQUs7U0FDcEI7S0FDRixFQUNEO1FBQ0UsWUFBWSxFQUFFO1lBQ1osS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtLQUNGLENBQ0YsQ0FBQztJQUVGLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbEMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNqQyxVQUFVLEVBQUUsU0FBUztZQUNyQixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQyJ9