'use strict';
module.exports = (sequelize, DataTypes) => {
    const productModifierRelation = sequelize.define('productModifierRelation', {
        productId: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        modifierId: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        sortOrder: DataTypes.INTEGER
    });
    productModifierRelation.associate = function (models) {
        models.modifier.belongsTo(models.modifier, {
            foreignKey: 'modifierId',
            constraints: false
        });
        models.modifier.belongsTo(models.product, {
            foreignKey: 'productId',
            constraints: false
        });
        models.productModifierRelation.belongsTo(models.modifier, {
            foreignKey: 'modifierId'
        });
    };
    return productModifierRelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1tb2RpZmllci1yZWxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vcHJvZHVjdC1tb2RpZmllci1yZWxhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sdUJBQXVCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDOUMseUJBQXlCLEVBQ3pCO1FBQ0UsU0FBUyxFQUFFO1lBQ1QsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELFVBQVUsRUFBRTtZQUNWLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxTQUFTLEVBQUUsU0FBUyxDQUFDLE9BQU87S0FDN0IsQ0FDRixDQUFDO0lBR0YsdUJBQXVCLENBQUMsU0FBUyxHQUFHLFVBQVMsTUFBTTtRQUNqRCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3pDLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDeEMsVUFBVSxFQUFFLFdBQVc7WUFDdkIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3hELFVBQVUsRUFBRSxZQUFZO1NBQ3pCLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQztJQUVGLE9BQU8sdUJBQXVCLENBQUM7QUFDakMsQ0FBQyxDQUFDIn0=