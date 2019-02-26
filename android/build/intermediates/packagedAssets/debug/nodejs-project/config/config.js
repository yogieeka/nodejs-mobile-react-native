"use strict";
const app_config_1 = require("../app.config");
const path = app_config_1.getAppDataPath();
module.exports = {
    development: {
        prefix: 'dev_',
        database: {
            dbMain: {
                dialect: 'sqlite',
                logging: true,
            },
            dbSettings: {
                dialect: 'sqlite',
                storage: `${path}/dev_db_settings.sqlite`,
                logging: true,
            },
        },
        axios: {
            logging: true,
        },
    },
    test: {
        prefix: 'test_',
        database: {
            dbMain: {
                dialect: 'sqlite',
                logging: true,
            },
            dbSettings: {
                dialect: 'sqlite',
                storage: `${path}/test_db_settings.sqlite`,
                logging: true,
            },
        },
        axios: {
            logging: true,
        },
    },
    production: {
        prefix: 'prod_',
        database: {
            dbMain: {
                dialect: 'sqlite',
                logging: false,
            },
            dbSettings: {
                dialect: 'sqlite',
                storage: `${path}/prod_db_settings.sqlite`,
                logging: false,
            },
        },
        axios: {
            logging: false,
        },
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUErQztBQUMvQyxNQUFNLElBQUksR0FBRywyQkFBYyxFQUFFLENBQUM7QUFFOUIsaUJBQVM7SUFDUCxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRTtZQUNSLE1BQU0sRUFBRTtnQkFDTixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLElBQUk7YUFDZDtZQUNELFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLEdBQUcsSUFBSSx5QkFBeUI7Z0JBQ3pDLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRjtRQUNELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxPQUFPO1FBQ2YsUUFBUSxFQUFFO1lBQ1IsTUFBTSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsR0FBRyxJQUFJLDBCQUEwQjtnQkFDMUMsT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLElBQUk7U0FDZDtLQUNGO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLE9BQU87UUFDZixRQUFRLEVBQUU7WUFDUixNQUFNLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE9BQU8sRUFBRSxHQUFHLElBQUksMEJBQTBCO2dCQUMxQyxPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsS0FBSztTQUNmO0tBQ0Y7Q0FDRixDQUFDIn0=