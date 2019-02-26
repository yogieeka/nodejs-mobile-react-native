'use strict';
module.exports = (sequelize, DataTypes) => {
    const area = sequelize.define('area', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: DataTypes.STRING,
        sortOrder: DataTypes.INTEGER,
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
    area.associate = function (models) {
        models.area.hasMany(models.table, {
            foreignKey: 'areaId',
            constraints: false
        });
    };
    return area;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vYXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzNCLE1BQU0sRUFDTjtRQUNFLEVBQUUsRUFBRTtZQUNGLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDNUIsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFlBQVksRUFBRTtZQUNaLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7S0FDRixDQUNGLENBQUM7SUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVMsTUFBTTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIn0=