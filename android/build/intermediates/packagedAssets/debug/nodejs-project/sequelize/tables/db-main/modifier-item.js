'use strict';
module.exports = (sequelize, DataTypes) => {
    const modifierItem = sequelize.define('modifierItem', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        modifierId: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.UUID
        },
        name: DataTypes.STRING,
        productId: DataTypes.UUID,
        productVariantId: DataTypes.UUID,
        useCustomPrice: DataTypes.BOOLEAN,
        price: DataTypes.DECIMAL,
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
    modifierItem.associate = function (models) {
        models.modifierItem.belongsTo(models.modifier, {
            foreignKey: 'modifierId',
            constraints: false
        });
        models.modifierItem.belongsTo(models.product, {
            foreignKey: 'productId',
            constraints: false
        });
        models.modifierItem.belongsTo(models.productVariant, {
            foreignKey: 'productVariantId',
            constraints: false
        });
        models.modifierItem.hasMany(models.pricelist, {
            foreignKey: 'productVariantId',
            constraints: false,
            as: 'prices'
        });
    };
    return modifierItem;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vbW9kaWZpZXItaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQ25DLGNBQWMsRUFDZDtRQUNFLEVBQUUsRUFBRTtZQUNGLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxVQUFVLEVBQUU7WUFDVixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ3pCLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ2hDLGNBQWMsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNqQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDeEIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQzVCLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixZQUFZLEVBQUUsS0FBSztTQUNwQjtLQUNGLEVBQ0Q7UUFDRSxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7YUFDZjtTQUNGO0tBQ0YsQ0FDRixDQUFDO0lBRUYsWUFBWSxDQUFDLFNBQVMsR0FBRyxVQUFTLE1BQU07UUFDdEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM3QyxVQUFVLEVBQUUsWUFBWTtZQUN4QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzVDLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFDbkQsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzVDLFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsRUFBRSxFQUFFLFFBQVE7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRixPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUMifQ==