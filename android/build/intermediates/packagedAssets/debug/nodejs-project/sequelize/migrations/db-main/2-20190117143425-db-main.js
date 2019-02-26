'use strict';
var Sequelize = require('sequelize');
/**
 * Actions summary:
 *
 * removeColumn "cashPaymentAmount" from table "orders"
 * removeColumn "printerAreaId" from table "orderLines"
 * removeColumn "cashPaymentAccountId" from table "orders"
 * removeColumn "cashPaymentMethodId" from table "orders"
 * addColumn "sortOrder" to table "orderPayments"
 * addColumn "sortOrder" to table "modifierItems"
 * addColumn "sortOrder" to table "orderLineModifiers"
 * addColumn "sortOrder" to table "orderLines"
 * addColumn "discountAmount" to table "orders"
 * addColumn "discountPercent" to table "orders"
 * addColumn "customDiscount" to table "orders"
 * addColumn "serviceCharged" to table "products"
 *
 **/
var info = {
    "revision": 2,
    "name": "20190117143425-db-main",
    "created": "2019-01-17T07:34:25.060Z",
    "comment": ""
};
var migrationCommands = [{
        fn: "removeColumn",
        params: ["orders", "cashPaymentAmount"]
    },
    {
        fn: "removeColumn",
        params: ["orderLines", "printerAreaId"]
    },
    {
        fn: "removeColumn",
        params: ["orders", "cashPaymentAccountId"]
    },
    {
        fn: "removeColumn",
        params: ["orders", "cashPaymentMethodId"]
    },
    {
        fn: "addColumn",
        params: [
            "orderPayments",
            "sortOrder",
            {
                "type": Sequelize.INTEGER,
                "field": "sortOrder"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "modifierItems",
            "sortOrder",
            {
                "type": Sequelize.INTEGER,
                "field": "sortOrder"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "orderLineModifiers",
            "sortOrder",
            {
                "type": Sequelize.INTEGER,
                "field": "sortOrder"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "orderLines",
            "sortOrder",
            {
                "type": Sequelize.INTEGER,
                "field": "sortOrder"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "orders",
            "discountAmount",
            {
                "type": Sequelize.DECIMAL,
                "field": "discountAmount"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "orders",
            "discountPercent",
            {
                "type": Sequelize.DECIMAL,
                "field": "discountPercent"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "orders",
            "customDiscount",
            {
                "type": Sequelize.BOOLEAN,
                "field": "customDiscount"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "products",
            "serviceCharged",
            {
                "type": Sequelize.BOOLEAN,
                "field": "serviceCharged"
            }
        ]
    }
];
module.exports = {
    pos: 0,
    up: function (queryInterface, Sequelize) {
        var index = this.pos;
        return new Promise(function (resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    let command = migrationCommands[index];
                    // console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi0yMDE5MDExNzE0MzQyNS1kYi1tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS9taWdyYXRpb25zL2RiLW1haW4vMi0yMDE5MDExNzE0MzQyNS1kYi1tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQzs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTtBQUNKLElBQUksSUFBSSxHQUFHO0lBQ1AsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUUsd0JBQXdCO0lBQ2hDLFNBQVMsRUFBRSwwQkFBMEI7SUFDckMsU0FBUyxFQUFFLEVBQUU7Q0FDaEIsQ0FBQztBQUNGLElBQUksaUJBQWlCLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsY0FBYztRQUNsQixNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7S0FDMUM7SUFDRDtRQUNJLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7S0FDMUM7SUFDRDtRQUNJLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQztLQUM3QztJQUNEO1FBQ0ksRUFBRSxFQUFFLGNBQWM7UUFDbEIsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLHFCQUFxQixDQUFDO0tBQzVDO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsV0FBVztRQUNmLE1BQU0sRUFBRTtZQUNKLGVBQWU7WUFDZixXQUFXO1lBQ1g7Z0JBQ0ksTUFBTSxFQUFFLFNBQVMsQ0FBQyxPQUFPO2dCQUN6QixPQUFPLEVBQUUsV0FBVzthQUN2QjtTQUNKO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxXQUFXO1FBQ2YsTUFBTSxFQUFFO1lBQ0osZUFBZTtZQUNmLFdBQVc7WUFDWDtnQkFDSSxNQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU87Z0JBQ3pCLE9BQU8sRUFBRSxXQUFXO2FBQ3ZCO1NBQ0o7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLFdBQVc7UUFDZixNQUFNLEVBQUU7WUFDSixvQkFBb0I7WUFDcEIsV0FBVztZQUNYO2dCQUNJLE1BQU0sRUFBRSxTQUFTLENBQUMsT0FBTztnQkFDekIsT0FBTyxFQUFFLFdBQVc7YUFDdkI7U0FDSjtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsV0FBVztRQUNmLE1BQU0sRUFBRTtZQUNKLFlBQVk7WUFDWixXQUFXO1lBQ1g7Z0JBQ0ksTUFBTSxFQUFFLFNBQVMsQ0FBQyxPQUFPO2dCQUN6QixPQUFPLEVBQUUsV0FBVzthQUN2QjtTQUNKO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxXQUFXO1FBQ2YsTUFBTSxFQUFFO1lBQ0osUUFBUTtZQUNSLGdCQUFnQjtZQUNoQjtnQkFDSSxNQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU87Z0JBQ3pCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDNUI7U0FDSjtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsV0FBVztRQUNmLE1BQU0sRUFBRTtZQUNKLFFBQVE7WUFDUixpQkFBaUI7WUFDakI7Z0JBQ0ksTUFBTSxFQUFFLFNBQVMsQ0FBQyxPQUFPO2dCQUN6QixPQUFPLEVBQUUsaUJBQWlCO2FBQzdCO1NBQ0o7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLFdBQVc7UUFDZixNQUFNLEVBQUU7WUFDSixRQUFRO1lBQ1IsZ0JBQWdCO1lBQ2hCO2dCQUNJLE1BQU0sRUFBRSxTQUFTLENBQUMsT0FBTztnQkFDekIsT0FBTyxFQUFFLGdCQUFnQjthQUM1QjtTQUNKO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxXQUFXO1FBQ2YsTUFBTSxFQUFFO1lBQ0osVUFBVTtZQUNWLGdCQUFnQjtZQUNoQjtnQkFDSSxNQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU87Z0JBQ3pCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDNUI7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixHQUFHLEVBQUUsQ0FBQztJQUNOLEVBQUUsRUFBRSxVQUFTLGNBQWMsRUFBRSxTQUFTO1FBRWxDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLFNBQVMsSUFBSTtnQkFDVCxJQUFJLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQ3BDO29CQUNJLElBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxzREFBc0Q7b0JBQ3RELEtBQUssRUFBRSxDQUFDO29CQUNSLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDdkY7O29CQUVHLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFDRCxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELElBQUksRUFBRSxJQUFJO0NBQ2IsQ0FBQyJ9