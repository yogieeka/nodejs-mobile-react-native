'use strict';
module.exports = (sequelize, DataTypes) => {
    const orderTax = sequelize.define('orderTax', {
        orderId: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        taxId: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        taxRate: DataTypes.DECIMAL,
        baseAmount: DataTypes.DECIMAL,
        taxAmount: DataTypes.DECIMAL,
    });
    orderTax.associate = function (models) {
        models.orderTax.belongsTo(models.order, {
            foreignKey: 'orderId',
            constraints: false,
            as: 'taxes',
        });
        models.orderTax.belongsTo(models.tax, {
            foreignKey: 'taxId',
            constraints: false,
        });
    };
    return orderTax;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItdGF4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS90YWJsZXMvZGItbWFpbi9vcmRlci10YXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUN4QyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUM1QyxPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTztRQUMxQixVQUFVLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDN0IsU0FBUyxFQUFFLFNBQVMsQ0FBQyxPQUFPO0tBQzdCLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDdEMsVUFBVSxFQUFFLFNBQVM7WUFDckIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsRUFBRSxFQUFFLE9BQU87U0FDWixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ3BDLFVBQVUsRUFBRSxPQUFPO1lBQ25CLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyJ9