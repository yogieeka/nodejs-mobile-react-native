'use strict';
module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        name: DataTypes.STRING,
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
    category.associate = function (models) {
        models.category.hasMany(models.product, {
            foreignKey: 'categoryId',
            constraints: false
        });
        models.category.belongsToMany(models.product, {
            through: models.productCategoryRelation,
            foreignKey: 'categoryId',
            constraints: false
        });
    };
    return category;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VxdWVsaXplL3RhYmxlcy9kYi1tYWluL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsVUFBVSxFQUNWO1FBQ0UsRUFBRSxFQUFFO1lBQ0YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQjtRQUNELElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDNUIsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFlBQVksRUFBRTtZQUNaLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7S0FDRixDQUNGLENBQUM7SUFFRixRQUFRLENBQUMsU0FBUyxHQUFHLFVBQVMsTUFBTTtRQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3RDLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyx1QkFBdUI7WUFDdkMsVUFBVSxFQUFFLFlBQVk7WUFDeEIsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBRUwsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDIn0=