'use strict';
module.exports = (sequelize, DataTypes) => {
    const productCategoryRelation = sequelize.define('productCategoryRelation', {
        productId: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        categoryId: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        }
    });
    productCategoryRelation.associate = function (models) {
        models.category.belongsTo(models.product, {
            through: models.productCategoryRelation,
            foreignKey: 'categoryId',
            constraints: false
        });
    };
    return productCategoryRelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXRlZ29yeS1yZWxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vcHJvZHVjdC1jYXRlZ29yeS1yZWxhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sdUJBQXVCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDOUMseUJBQXlCLEVBQ3pCO1FBQ0UsU0FBUyxFQUFFO1lBQ1QsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELFVBQVUsRUFBRTtZQUNWLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7S0FDRixDQUNGLENBQUM7SUFDRix1QkFBdUIsQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQ2pELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDeEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyx1QkFBdUI7WUFDdkMsVUFBVSxFQUFFLFlBQVk7WUFDeEIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsT0FBTyx1QkFBdUIsQ0FBQztBQUNqQyxDQUFDLENBQUMifQ==