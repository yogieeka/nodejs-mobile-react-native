'use strict';
module.exports = (sequelize, DataTypes) => {
    const salesType = sequelize.define('salesType', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        name: DataTypes.STRING,
        isMaster: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
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
    salesType.associate = function (models) {
        models.salesType.belongsToMany(models.productVariant, {
            foreignKey: 'salesTypeId',
            constraints: false,
            as: 'productVariants',
            through: models.pricelist
        });
    };
    return salesType;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMtdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXF1ZWxpemUvdGFibGVzL2RiLW1haW4vc2FsZXMtdHlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQ2hDLFdBQVcsRUFDWDtRQUNFLEVBQUUsRUFBRTtZQUNGLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7U0FDckI7UUFDRCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDdEIsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFlBQVksRUFBRTtZQUNaLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7S0FDRixDQUNGLENBQUM7SUFFRixTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVMsTUFBTTtRQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQ3BELFVBQVUsRUFBRSxhQUFhO1lBQ3pCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLEVBQUUsRUFBRSxpQkFBaUI7WUFDckIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUNGLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyJ9