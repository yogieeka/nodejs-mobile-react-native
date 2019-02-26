'use strict';
module.exports = (sequelize, DataTypes) => {
    const tax = sequelize.define('tax', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        rate: DataTypes.DECIMAL,
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
    tax.associate = function (models) {
        models.tax.hasMany(models.product, {
            foreignKey: 'salesTaxId',
            constraints: false
        });
    };
    return tax;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGF4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS90YWJsZXMvZGItbWFpbi90YXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUN4QyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUMxQixLQUFLLEVBQ0w7UUFDRSxFQUFFLEVBQUU7WUFDRixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3RCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDdkIsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFlBQVksRUFBRTtZQUNaLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7S0FDRixDQUNGLENBQUM7SUFFRixHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVMsTUFBTTtRQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2pDLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDIn0=