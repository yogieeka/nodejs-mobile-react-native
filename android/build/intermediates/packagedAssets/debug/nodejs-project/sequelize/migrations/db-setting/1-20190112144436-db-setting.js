'use strict';
var Sequelize = require('sequelize');
/**
 * Actions summary:
 *
 * createTable "accounts", deps: []
 * createTable "systemSettings", deps: []
 *
 **/
var info = {
    "revision": 1,
    "name": "20190112144436-db-setting",
    "created": "2019-01-12T07:44:36.033Z",
    "comment": ""
};
var migrationCommands = [{
        fn: "createTable",
        params: [
            "accounts",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "companyId": {
                    "type": Sequelize.STRING,
                    "field": "companyId"
                },
                "companyName": {
                    "type": Sequelize.STRING,
                    "field": "companyName"
                },
                "outletId": {
                    "type": Sequelize.STRING,
                    "field": "outletId"
                },
                "outletName": {
                    "type": Sequelize.STRING,
                    "field": "outletName"
                },
                "authKey": {
                    "type": Sequelize.STRING,
                    "field": "authKey"
                },
                "lastUserId": {
                    "type": Sequelize.STRING,
                    "field": "lastUserId"
                },
                "accessToken": {
                    "type": Sequelize.STRING,
                    "field": "accessToken"
                },
                "refreshToken": {
                    "type": Sequelize.STRING,
                    "field": "refreshToken"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "systemSettings",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "activeAccountId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "activeAccountId"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS0yMDE5MDExMjE0NDQzNi1kYi1zZXR0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS9taWdyYXRpb25zL2RiLXNldHRpbmcvMS0yMDE5MDExMjE0NDQzNi1kYi1zZXR0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQzs7Ozs7O0lBTUk7QUFDSixJQUFJLElBQUksR0FBRztJQUNQLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFLDJCQUEyQjtJQUNuQyxTQUFTLEVBQUUsMEJBQTBCO0lBQ3JDLFNBQVMsRUFBRSxFQUFFO0NBQ2hCLENBQUM7QUFDRixJQUFJLGlCQUFpQixHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLGFBQWE7UUFDakIsTUFBTSxFQUFFO1lBQ0osVUFBVTtZQUNWO2dCQUNJLElBQUksRUFBRTtvQkFDRixNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUk7b0JBQ3RCLE9BQU8sRUFBRSxJQUFJO29CQUNiLGNBQWMsRUFBRSxTQUFTLENBQUMsTUFBTTtvQkFDaEMsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFdBQVcsRUFBRSxLQUFLO2lCQUNyQjtnQkFDRCxXQUFXLEVBQUU7b0JBQ1QsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO29CQUN4QixPQUFPLEVBQUUsV0FBVztpQkFDdkI7Z0JBQ0QsYUFBYSxFQUFFO29CQUNYLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtvQkFDeEIsT0FBTyxFQUFFLGFBQWE7aUJBQ3pCO2dCQUNELFVBQVUsRUFBRTtvQkFDUixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2lCQUN0QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO29CQUN4QixPQUFPLEVBQUUs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