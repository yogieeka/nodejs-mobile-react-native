'use strict';
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        sku: DataTypes.STRING,
        name: DataTypes.STRING,
        detailDescription: DataTypes.STRING,
        serviceCharged: DataTypes.BOOLEAN,
        salesTaxId: DataTypes.UUID,
        uom: DataTypes.STRING,
        hasVariants: DataTypes.BOOLEAN,
        variantCount: DataTypes.INTEGER,
        variantAttribute1: DataTypes.STRING,
        variantAttribute2: DataTypes.STRING,
        variantAttribute3: DataTypes.STRING,
        masterVariantId: DataTypes.UUID,
        pictureUrl: DataTypes.STRING,
        pictureLocal: DataTypes.STRING,
        printerAreaId: DataTypes.UUID,
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
    product.associate = function (models) {
        models.product.belongsTo(models.tax, {
            foreignKey: 'salesTaxId',
            constraints: false
        });
        models.product.hasMany(models.productVariant, {
            foreignKey: 'productId',
            constraints: false,
            as: 'productVariants'
        });
        models.product.belongsToMany(models.category, {
            through: models.productCategoryRelation,
            foreignKey: 'productId',
            constraints: false,
            as: 'categories'
        });
        models.product.belongsToMany(models.modifier, {
            through: models.productModifierRelation,
            foreignKey: 'productId',
            constraints: false,
            as: 'modifiers'
        });
        models.product.belongsTo(models.printerArea, {
            foreignKey: 'printerAreaId',
            constraints: false
        });
    };
    return product;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzlCLFNBQVMsRUFDVDtRQUNFLEVBQUUsRUFBRTtZQUNGLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxHQUFHLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDckIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3RCLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ25DLGNBQWMsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNqQyxVQUFVLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDMUIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3JCLFdBQVcsRUFBRSxTQUFTLENBQUMsT0FBTztRQUM5QixZQUFZLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDL0IsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDbkMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDbkMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDbkMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQy9CLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUM1QixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDOUIsYUFBYSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQzdCLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixZQUFZLEVBQUUsS0FBSztTQUNwQjtLQUNGLEVBQ0Q7UUFDRSxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLEtBQUs7YUFDZjtTQUNGO0tBQ0YsQ0FDRixDQUFDO0lBRUYsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLE1BQU07UUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNuQyxVQUFVLEVBQUUsWUFBWTtZQUN4QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQzVDLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLEVBQUUsRUFBRSxpQkFBaUI7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM1QyxPQUFPLEVBQUUsTUFBTSxDQUFDLHVCQUF1QjtZQUN2QyxVQUFVLEVBQUUsV0FBVztZQUN2QixXQUFXLEVBQUUsS0FBSztZQUNsQixFQUFFLEVBQUUsWUFBWTtTQUNqQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzVDLE9BQU8sRUFBRSxNQUFNLENBQUMsdUJBQXVCO1lBQ3ZDLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLEVBQUUsRUFBRSxXQUFXO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDM0MsVUFBVSxFQUFFLGVBQWU7WUFDM0IsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIn0=