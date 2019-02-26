'use strict';
var Sequelize = require('sequelize');
/**
 * Actions summary:
 *
 * addColumn "deleted" to table "paymentMethods"
 *
 **/
var info = {
    "revision": 4,
    "name": "20190121141320-db-main",
    "created": "2019-01-21T07:13:20.677Z",
    "comment": ""
};
var migrationCommands = [{
        fn: "addColumn",
        params: [
            "paymentMethods",
            "deleted",
            {
                "type": Sequelize.BOOLEAN,
                "field": "deleted"
            }
        ]
    }];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC0yMDE5MDEyMTE0MTMyMC1kYi1tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS9taWdyYXRpb25zL2RiLW1haW4vNC0yMDE5MDEyMTE0MTMyMC1kYi1tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQzs7Ozs7SUFLSTtBQUNKLElBQUksSUFBSSxHQUFHO0lBQ1AsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUUsd0JBQXdCO0lBQ2hDLFNBQVMsRUFBRSwwQkFBMEI7SUFDckMsU0FBUyxFQUFFLEVBQUU7Q0FDaEIsQ0FBQztBQUNGLElBQUksaUJBQWlCLEdBQUcsQ0FBQztRQUNyQixFQUFFLEVBQUUsV0FBVztRQUNmLE1BQU0sRUFBRTtZQUNKLGdCQUFnQjtZQUNoQixTQUFTO1lBQ1Q7Z0JBQ0ksTUFBTSxFQUFFLFNBQVMsQ0FBQyxPQUFPO2dCQUN6QixPQUFPLEVBQUUsU0FBUzthQUNyQjtTQUNKO0tBQ0osQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLEdBQUcsRUFBRSxDQUFDO0lBQ04sRUFBRSxFQUFFLFVBQVMsY0FBYyxFQUFFLFNBQVM7UUFFbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07WUFDdkMsU0FBUyxJQUFJO2dCQUNULElBQUksS0FBSyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFDcEM7b0JBQ0ksSUFBSSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLHNEQUFzRDtvQkFDdEQsS0FBSyxFQUFFLENBQUM7b0JBQ1IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUN2Rjs7b0JBRUcsT0FBTyxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsSUFBSSxFQUFFLElBQUk7Q0FDYixDQUFDIn0=