'use strict';
module.exports = (sequelize, DataTypes) => {
    const orderLineModifier = sequelize.define('orderLineModifier', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        orderId: {
            primaryKey: true,
            foreignKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        orderLineId: {
            primaryKey: true,
            foreignKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        modifierId: DataTypes.UUID,
        modifierItemId: DataTypes.UUID,
        modifierItemName: DataTypes.STRING,
        modifierItemProductId: DataTypes.UUID,
        modifierItemProductVariantId: DataTypes.UUID,
        description: DataTypes.STRING,
        qty: DataTypes.DECIMAL,
        price: DataTypes.DECIMAL,
        sortOrder: DataTypes.INTEGER
    });
    orderLineModifier.associate = models => {
        models.orderLineModifier.belongsTo(models.orderLine, {
            foreignKey: 'orderLineId',
            as: 'modifiers',
            constraints: false
        });
        models.orderLineModifier.belongsTo(models.modifier, {
            foreignKey: 'modifierId',
            constraints: false
        });
        models.orderLineModifier.belongsTo(models.modifierItem, {
            foreignKey: 'modifierItemId',
            constraints: false
        });
        models.orderLineModifier.belongsTo(models.product, {
            foreignKey: 'productId',
            constraints: false
        });
        models.orderLineModifier.belongsTo(models.productVariant, {
            foreignKey: 'productVariantId',
            constraints: false
        });
    };
    return orderLineModifier;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItbGluZS1tb2RpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vb3JkZXItbGluZS1tb2RpZmllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtRQUM5RCxFQUFFLEVBQUU7WUFDRixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELFdBQVcsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxVQUFVLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDMUIsY0FBYyxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQzlCLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ2xDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ3JDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQzVDLFdBQVcsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUM3QixHQUFHLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDdEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQ3hCLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTztLQUM3QixDQUFDLENBQUM7SUFFSCxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUU7UUFDckMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ25ELFVBQVUsRUFBRSxhQUFhO1lBQ3pCLEVBQUUsRUFBRSxXQUFXO1lBQ2YsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2xELFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN0RCxVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxVQUFVLEVBQUUsV0FBVztZQUN2QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFDeEQsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLGlCQUFpQixDQUFDO0FBQzNCLENBQUMsQ0FBQyJ9