'use strict';
var Sequelize = require('sequelize');
/**
 * Actions summary:
 *
 * addColumn "lastUpdatedByUserId" to table "customers"
 * addColumn "createdByUserId" to table "customers"
 *
 **/
var info = {
    "revision": 6,
    "name": "20190215112551-db-main",
    "created": "2019-02-15T04:25:51.377Z",
    "comment": ""
};
var migrationCommands = [{
        fn: "addColumn",
        params: [
            "customers",
            "lastUpdatedByUserId",
            {
                "type": Sequelize.STRING,
                "field": "lastUpdatedByUserId"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "customers",
            "createdByUserId",
            {
                "type": Sequelize.STRING,
                "field": "createdByUserId"
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
                    console.log("[#" + index + "] execute: " + command.fn);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi0yMDE5MDIxNTExMjU1MS1kYi1tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS9taWdyYXRpb25zL2RiLW1haW4vNi0yMDE5MDIxNTExMjU1MS1kYi1tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQzs7Ozs7O0lBTUk7QUFDSixJQUFJLElBQUksR0FBRztJQUNQLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFLHdCQUF3QjtJQUNoQyxTQUFTLEVBQUUsMEJBQTBCO0lBQ3JDLFNBQVMsRUFBRSxFQUFFO0NBQ2hCLENBQUM7QUFDRixJQUFJLGlCQUFpQixHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLFdBQVc7UUFDZixNQUFNLEVBQUU7WUFDSixXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCO2dCQUNJLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtnQkFDeEIsT0FBTyxFQUFFLHFCQUFxQjthQUNqQztTQUNKO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxXQUFXO1FBQ2YsTUFBTSxFQUFFO1lBQ0osV0FBVztZQUNYLGlCQUFpQjtZQUNqQjtnQkFDSSxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07Z0JBQ3hCLE9BQU8sRUFBRSxpQkFBaUI7YUFDN0I7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixHQUFHLEVBQUUsQ0FBQztJQUNOLEVBQUUsRUFBRSxVQUFTLGNBQWMsRUFBRSxTQUFTO1FBRWxDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLFNBQVMsSUFBSTtnQkFDVCxJQUFJLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQ3BDO29CQUNJLElBQUksT0FBTyxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxLQUFLLEdBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDbkQsS0FBSyxFQUFFLENBQUM7b0JBQ1IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN2Rjs7b0JBRUcsT0FBTyxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsSUFBSSxFQUFFLElBQUk7Q0FDYixDQUFDIn0=