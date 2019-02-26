'use strict';
module.exports = (sequelize, DataTypes) => {
    const orderLine = sequelize.define('orderLine', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        orderId: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.UUID
        },
        productId: {
            allowNull: false,
            foreignKey: true,
            type: DataTypes.UUID
        },
        productVariantId: {
            foreignKey: true,
            type: DataTypes.UUID
        },
        description: DataTypes.STRING,
        qty: DataTypes.DECIMAL,
        unitPrice: DataTypes.DECIMAL,
        modifierPrice: DataTypes.DECIMAL,
        customDiscount: DataTypes.BOOLEAN,
        discountPercent: DataTypes.DECIMAL,
        discountAmount: DataTypes.DECIMAL,
        total: DataTypes.DECIMAL,
        serviceCharged: DataTypes.BOOLEAN,
        taxed: DataTypes.BOOLEAN,
        taxId: DataTypes.UUID,
        notes: DataTypes.STRING,
        sortOrder: DataTypes.INTEGER,
        createdByUserId: DataTypes.UUID,
        createdDate: DataTypes.DATE,
        lastUpdateByUserId: DataTypes.UUID,
        lastUpdateDate: DataTypes.DATE,
        cancelledByUserId: DataTypes.UUID,
        cancellationDate: DataTypes.DATE,
        cancelled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        cancellationReason: DataTypes.STRING,
        lineType: {
            defaultValue: 'item',
            type: DataTypes.STRING,
            allowNull: false
        },
        itemType: {
            defaultValue: 'item',
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    orderLine.associate = models => {
        models.orderLine.belongsTo(models.order, {
            foreignKey: 'orderId',
            as: 'lines',
            constraints: false
        });
        models.orderLine.belongsTo(models.product, {
            foreignKey: 'productId',
            constraints: false
        });
        models.orderLine.belongsTo(models.productVariant, {
            foreignKey: 'productVariantId',
            constraints: false
        });
        models.orderLine.belongsTo(models.tax, {
            foreignKey: 'taxId',
            constraints: false
        });
        models.orderLine.belongsTo(models.user, {
            foreignKey: 'createdByUserId',
            constraints: false
        });
        models.orderLine.belongsTo(models.user, {
            foreignKey: 'lastUpdateByUserId',
            constraints: false
        });
        models.orderLine.belongsTo(models.user, {
            foreignKey: 'cancelledByUserId',
            constraints: false
        });
        models.orderLine.hasMany(models.orderLineModifier, {
            foreignKey: 'orderLineId',
            constraints: false,
            as: 'modifiers',
        });
    };
    return orderLine;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vb3JkZXItbGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQzlDLEVBQUUsRUFBRTtZQUNGLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxTQUFTLEVBQUU7WUFDVCxTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDN0IsR0FBRyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQ3RCLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTztRQUM1QixhQUFhLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDaEMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQ2pDLGVBQWUsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNsQyxjQUFjLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDakMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQ3hCLGNBQWMsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNqQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDeEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ3JCLEtBQUssRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN2QixTQUFTLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDNUIsZUFBZSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQy9CLFdBQVcsRUFBRSxTQUFTLENBQUMsSUFBSTtRQUMzQixrQkFBa0IsRUFBRSxTQUFTLENBQUMsSUFBSTtRQUNsQyxjQUFjLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDOUIsaUJBQWlCLEVBQUcsU0FBUyxDQUFDLElBQUk7UUFDbEMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDaEMsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO1FBQ0Qsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDcEMsUUFBUSxFQUFFO1lBQ1IsWUFBWSxFQUFFLE1BQU07WUFDcEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsWUFBWSxFQUFFLE1BQU07WUFDcEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRTtRQUM3QixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3ZDLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLEVBQUUsRUFBRSxPQUFPO1lBQ1gsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxVQUFVLEVBQUUsV0FBVztZQUN2QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQ2hELFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNyQyxVQUFVLEVBQUUsT0FBTztZQUNuQixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3RDLFVBQVUsRUFBRSxpQkFBaUI7WUFDN0IsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN0QyxVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDdEMsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7WUFDakQsVUFBVSxFQUFFLGFBQWE7WUFDekIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsRUFBRSxFQUFFLFdBQVc7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDIn0=