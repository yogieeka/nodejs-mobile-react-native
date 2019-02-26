'use strict';
var Sequelize = require('sequelize');
/**
 * Actions summary:
 *
 * addColumn "lastUpdateByUserId" to table "orderLines"
 * addColumn "lastUpdateDate" to table "orderLines"
 * addColumn "itemType" to table "orderLines"
 * changeColumn "cancelledByUserId" on table "orderLines"
 * changeColumn "lineType" on table "orderLines"
 *
 **/
var info = {
    "revision": 5,
    "name": "20190123091654-db-main",
    "created": "2019-01-23T02:16:54.403Z",
    "comment": ""
};
var migrationCommands = [{
        fn: "addColumn",
        params: [
            "orderLines",
            "lastUpdateByUserId",
            {
                "type": Sequelize.UUID,
                "allowNull": true,
                "field": "lastUpdateByUserId"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "orderLines",
            "lastUpdateDate",
            {
                "type": Sequelize.DATE,
                "field": "lastUpdateDate"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "orderLines",
            "itemType",
            {
                "type": Sequelize.STRING,
                "field": "itemType",
                "allowNull": false,
                "defaultValue": "item"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "orderLines",
            "cancelledByUserId",
            {
                "type": Sequelize.UUID,
                "allowNull": true,
                "field": "cancelledByUserId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "orderLines",
            "lineType",
            {
                "type": Sequelize.STRING,
                "field": "lineType",
                "allowNull": false,
                "defaultValue": "item"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS0yMDE5MDEyMzA5MTY1NC1kYi1tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS9taWdyYXRpb25zL2RiLW1haW4vNS0yMDE5MDEyMzA5MTY1NC1kYi1tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQzs7Ozs7Ozs7O0lBU0k7QUFDSixJQUFJLElBQUksR0FBRztJQUNQLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFLHdCQUF3QjtJQUNoQyxTQUFTLEVBQUUsMEJBQTBCO0lBQ3JDLFNBQVMsRUFBRSxFQUFFO0NBQ2hCLENBQUM7QUFDRixJQUFJLGlCQUFpQixHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLFdBQVc7UUFDZixNQUFNLEVBQUU7WUFDSixZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCO2dCQUNJLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSTtnQkFDdEIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxvQkFBb0I7YUFDaEM7U0FDSjtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsV0FBVztRQUNmLE1BQU0sRUFBRTtZQUNKLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEI7Z0JBQ0ksTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJO2dCQUN0QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzVCO1NBQ0o7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLFdBQVc7UUFDZixNQUFNLEVBQUU7WUFDSixZQUFZO1lBQ1osVUFBVTtZQUNWO2dCQUNJLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFdBQVcsRUFBRSxLQUFLO2dCQUNsQixjQUFjLEVBQUUsTUFBTTthQUN6QjtTQUNKO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLE1BQU0sRUFBRTtZQUNKLFlBQVk7WUFDWixtQkFBbUI7WUFDbkI7Z0JBQ0ksTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJO2dCQUN0QixXQUFXLEVBQUUsSUFBSTtnQkFDakIsT0FBTyxFQUFFLG1CQUFtQjthQUMvQjtTQUNKO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLE1BQU0sRUFBRTtZQUNKLFlBQVk7WUFDWixVQUFVO1lBQ1Y7Z0JBQ0ksTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO2dCQUN4QixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLGNBQWMsRUFBRSxNQUFNO2FBQ3pCO1NBQ0o7S0FDSjtDQUNKLENBQUM7QUFDRixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsR0FBRyxFQUFFLENBQUM7SUFDTixFQUFFLEVBQUUsVUFBUyxjQUFjLEVBQUUsU0FBUztRQUVsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtZQUN2QyxTQUFTLElBQUk7Z0JBQ1QsSUFBSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUNwQztvQkFDSSxJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkMsc0RBQXNEO29CQUN0RCxLQUFLLEVBQUUsQ0FBQztvQkFDUixjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3ZGOztvQkFFRyxPQUFPLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQ0QsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxJQUFJLEVBQUUsSUFBSTtDQUNiLENBQUMifQ==