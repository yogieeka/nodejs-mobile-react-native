'use strict';
module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        orderNumber: DataTypes.STRING,
        orderDate: DataTypes.DATE,
        orderDateTime: DataTypes.DATE,
        customerId: {
            foreignKey: true,
            type: DataTypes.UUID
        },
        customerName: DataTypes.STRING,
        customerEmail: DataTypes.STRING,
        customerMobile: DataTypes.STRING,
        salesTypeId: DataTypes.UUID,
        tableId: DataTypes.UUID,
        taxInclusive: DataTypes.BOOLEAN,
        lineCount: DataTypes.INTEGER,
        lineTotalQty: DataTypes.DECIMAL,
        subTotal: DataTypes.DECIMAL,
        customDiscount: DataTypes.BOOLEAN,
        discountPercent: DataTypes.DECIMAL,
        discountAmount: DataTypes.DECIMAL,
        serviceCharged: DataTypes.BOOLEAN,
        serviceChargeRate: DataTypes.DECIMAL,
        serviceChargeAmount: DataTypes.DECIMAL,
        serviceChargeTaxId: DataTypes.UUID,
        serviceChargeTaxRate: DataTypes.DECIMAL,
        taxed: DataTypes.BOOLEAN,
        taxAmount: DataTypes.DECIMAL,
        adjustmentAmount: DataTypes.DECIMAL,
        total: DataTypes.DECIMAL,
        tenderAmount: DataTypes.DECIMAL,
        changeAmount: DataTypes.DECIMAL,
        status: DataTypes.STRING,
        createdByUserId: DataTypes.UUID,
        createdDate: DataTypes.DATE,
        lastUpdateByUserId: DataTypes.UUID,
        lastUpdateDate: DataTypes.DATE,
        paidByUserId: DataTypes.UUID,
        paymentDate: DataTypes.DATE,
        cancelledByUserId: DataTypes.UUID,
        cancellationDate: DataTypes.DATE,
        cancellationReason: DataTypes.STRING,
        rowVersion: DataTypes.UUID,
        isSync: DataTypes.BOOLEAN,
        syncDate: DataTypes.DATE
    });
    order.associate = models => {
        models.order.belongsTo(models.tax, {
            foreignKey: 'serviceChargeTaxId',
            constraints: false
        });
        models.order.belongsTo(models.user, {
            foreignKey: 'createdByUserId',
            constraints: false
        });
        models.order.belongsTo(models.user, {
            foreignKey: 'cancelledByUserId',
            constraints: false
        });
        models.order.belongsTo(models.customer, {
            foreignKey: 'customerId',
            constraints: false
        });
        models.order.belongsTo(models.table, {
            foreignKey: 'tableId',
            constraints: false
        });
        models.order.belongsTo(models.salesType, {
            foreignKey: 'salesTypeId',
            constraints: false
        });
        models.order.hasMany(models.orderLine, {
            foreignKey: 'orderId',
            constraints: false,
            as: 'lines'
        });
        models.order.hasMany(models.orderPayment, {
            as: 'payments',
            foreignKey: 'orderId',
            constraints: false,
        });
        models.order.hasMany(models.orderTax, {
            foreignKey: 'orderId',
            constraints: false,
            as: 'taxes'
        });
    };
    return order;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VxdWVsaXplL3RhYmxlcy9kYi1tYWluL29yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDdEMsRUFBRSxFQUFFO1lBQ0YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELFdBQVcsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUM3QixTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDekIsYUFBYSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQzdCLFVBQVUsRUFBRTtZQUNWLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUM5QixhQUFhLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDL0IsY0FBYyxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ2hDLFdBQVcsRUFBRSxTQUFTLENBQUMsSUFBSTtRQUMzQixPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDdkIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQy9CLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTztRQUM1QixZQUFZLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDL0IsUUFBUSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQzNCLGNBQWMsRUFBRSxTQUFTLENBQUMsT0FBTztRQUNqQyxlQUFlLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDbEMsY0FBYyxFQUFF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