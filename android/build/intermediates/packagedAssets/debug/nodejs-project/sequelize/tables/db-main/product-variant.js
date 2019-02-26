'use strict';
module.exports = (sequelize, DataTypes) => {
    const productVariant = sequelize.define('productVariant', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        productId: {
            primaryKey: true,
            foreignKey: true,
            type: DataTypes.UUID
        },
        sku: DataTypes.STRING,
        name: DataTypes.STRING,
        variantName: DataTypes.STRING,
        unitPrice: DataTypes.DECIMAL,
        isMaster: DataTypes.BOOLEAN,
        attribute1Value: DataTypes.STRING,
        attribute2Value: DataTypes.STRING,
        attribute3Value: DataTypes.STRING,
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
    productVariant.associate = function (models) {
        models.productVariant.belongsTo(models.product, { constraints: false });
        models.productVariant.hasMany(models.pricelist, {
            foreignKey: 'productVariantId',
            constraints: false,
            as: 'prices'
        });
    };
    return productVariant;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS90YWJsZXMvZGItbWFpbi9wcm9kdWN0LXZhcmlhbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUN4QyxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNyQyxnQkFBZ0IsRUFDaEI7UUFDRSxFQUFFLEVBQUU7WUFDRixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3JCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDN0IsU0FBUyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQzVCLFFBQVEsRUFBRSxTQUFTLENBQUMsT0FBTztRQUMzQixlQUFlLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDakMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ2pDLGVBQWUsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUNqQyxTQUFTLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDNUIsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFlBQVksRUFBRTtZQUNaLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7S0FDRixDQUNGLENBQUM7SUFFRixjQUFjLENBQUMsU0FBUyxHQUFHLFVBQVMsTUFBTTtRQUN4QyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFeEUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUM5QyxVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLEVBQUUsRUFBRSxRQUFRO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQyxDQUFDIn0=