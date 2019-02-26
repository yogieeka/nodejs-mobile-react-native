'use strict';
module.exports = (sequelize, DataTypes) => {
    const orderPayment = sequelize.define('orderPayment', {
        orderId: {
            primaryKey: true,
            foreignKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        paymentMethodId: {
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        paymentAccountId: DataTypes.UUID,
        paymentAmount: DataTypes.DECIMAL,
        cardNumber: DataTypes.STRING,
        cardHolder: DataTypes.STRING,
        referenceNumber: DataTypes.STRING,
        sortOrder: DataTypes.INTEGER
    });
    orderPayment.associate = function (models) {
        models.orderPayment.belongsTo(models.order, {
            foreignKey: 'orderId',
            constraints: false,
            as: 'payments',
        });
        models.orderPayment.belongsTo(models.paymentMethod, {
            foreignKey: 'paymentMethodId',
            constraints: false,
        });
    };
    return orderPayment;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vb3JkZXItcGF5bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1FBQ3BELE9BQU8sRUFBRTtZQUNQLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxlQUFlLEVBQUU7WUFDZixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDaEMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQ2hDLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUM1QixVQUFVLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDNUIsZUFBZSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ2pDLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTztLQUM3QixDQUFDLENBQUM7SUFFSCxZQUFZLENBQUMsU0FBUyxHQUFHLFVBQVUsTUFBTTtRQUN2QyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzFDLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLEVBQUUsRUFBRSxVQUFVO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNsRCxVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyJ9