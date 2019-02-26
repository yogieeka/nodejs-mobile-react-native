'use strict';
module.exports = (sequelize, DataTypes) => {
    const printerArea = sequelize.define('printerArea', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        name: DataTypes.STRING
    });
    printerArea.associate = function (models) {
        models.printerArea.hasMany(models.printerClient, {
            foreignKey: 'printerAreaId',
            constraints: false,
        });
        models.printerArea.hasMany(models.product, {
            foreignKey: 'printerAreaId',
            constraints: false,
        });
    };
    return printerArea;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci1hcmVhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS90YWJsZXMvZGItbWFpbi9wcmludGVyLWFyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUN4QyxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtRQUNsRCxFQUFFLEVBQUU7WUFDRixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCO1FBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO0tBQ3ZCLENBQUMsQ0FBQztJQUNILFdBQVcsQ0FBQyxTQUFTLEdBQUcsVUFBUyxNQUFNO1FBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDL0MsVUFBVSxFQUFFLGVBQWU7WUFDM0IsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxVQUFVLEVBQUUsZUFBZTtZQUMzQixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUMifQ==