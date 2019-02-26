'use strict';
module.exports = (sequelize, DataTypes) => {
    const pricelist = sequelize.define('pricelist', {
        productId: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        productVariantId: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        salesTypeId: {
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        salesTypeName: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        isMaster: DataTypes.BOOLEAN,
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
    pricelist.associate = function (models) {
        models.pricelist.belongsTo(models.productVariant, {
            foreignKey: 'productVariantId',
            constraints: false
        });
        models.pricelist.belongsTo(models.salesType, {
            foreignKey: 'salesTypeId',
            constraints: false
        });
    };
    return pricelist;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS90YWJsZXMvZGItbWFpbi9wcmljZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUN4QyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNoQyxXQUFXLEVBQ1g7UUFDRSxTQUFTLEVBQUU7WUFDVCxTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELFdBQVcsRUFBRTtZQUNYLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxhQUFhLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDL0IsV0FBVyxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQzdCLEtBQUssRUFBRSxTQUFTLENBQUMsT0FBTztRQUN4QixRQUFRLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDM0IsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFlBQVksRUFBRTtZQUNaLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7S0FDRixDQUNGLENBQUM7SUFFRixTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVMsTUFBTTtRQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQ2hELFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUMzQyxVQUFVLEVBQUUsYUFBYTtZQUN6QixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUMifQ==