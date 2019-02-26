'use strict';
var Sequelize = require('sequelize');
/**
 * Actions summary:
 *
 * createTable "paymentMethods", deps: []
 * createTable "areas", deps: []
 * createTable "customers", deps: []
 * createTable "logs", deps: []
 * createTable "modifierItems", deps: []
 * createTable "modifiers", deps: []
 * createTable "orderLineModifiers", deps: []
 * createTable "orderLines", deps: []
 * createTable "orderPayments", deps: []
 * createTable "orderTaxes", deps: []
 * createTable "orders", deps: []
 * createTable "outletSettings", deps: []
 * createTable "categories", deps: []
 * createTable "priceLists", deps: []
 * createTable "printerAreas", deps: []
 * createTable "taxes", deps: []
 * createTable "productCategoryRelations", deps: []
 * createTable "tables", deps: []
 * createTable "productVariants", deps: []
 * createTable "products", deps: []
 * createTable "salesTypes", deps: []
 * createTable "users", deps: []
 * createTable "productModifierRelations", deps: [modifiers]
 * createTable "printerClients", deps: [printerAreas]
 *
 **/
var info = {
    "revision": 1,
    "name": "20190117132406-db-main",
    "created": "2019-01-17T06:24:06.188Z",
    "comment": ""
};
var migrationCommands = [{
        fn: "createTable",
        params: [
            "paymentMethods",
            {
                "paymentMethodId": {
                    "type": Sequelize.UUID,
                    "field": "paymentMethodId",
                    "primaryKey": true,
                    "allowNull": false
                },
                "paymentMethodType": {
                    "type": Sequelize.STRING,
                    "field": "paymentMethodType"
                },
                "paymentMethodName": {
                    "type": Sequelize.STRING,
                    "field": "paymentMethodName"
                },
                "paymentAccountId": {
                    "type": Sequelize.UUID,
                    "field": "paymentAccountId"
                },
                "isDefaultCash": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isDefaultCash"
                },
                "sortOrder": {
                    "type": Sequelize.INTEGER,
                    "field": "sortOrder"
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
            "areas",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "sortOrder": {
                    "type": Sequelize.INTEGER,
                    "field": "sortOrder"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "customers",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING,
                    "field": "firstName"
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "field": "lastName"
                },
                "displayName": {
                    "type": Sequelize.STRING,
                    "field": "displayName"
                },
                "company": {
                    "type": Sequelize.STRING,
                    "field": "company"
                },
                "phone": {
                    "type": Sequelize.STRING,
                    "field": "phone"
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email"
                },
                "gender": {
                    "type": Sequelize.STRING,
                    "field": "gender"
                },
                "dateOfBirth": {
                    "type": Sequelize.DATE,
                    "field": "dateOfBirth"
                },
                "isSync": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isSync"
                },
                "syncDate": {
                    "type": Sequelize.DATE,
                    "field": "syncDate"
                },
                "lastEdit": {
                    "type": Sequelize.DATE,
                    "field": "lastEdit"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "logs",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "userId": {
                    "type": Sequelize.UUID,
                    "field": "userId"
                },
                "orderId": {
                    "type": Sequelize.UUID,
                    "field": "orderId"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description"
                },
                "date": {
                    "type": Sequelize.DATE,
                    "field": "date"
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
            "modifierItems",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "modifierId": {
                    "type": Sequelize.UUID,
                    "field": "modifierId",
                    "foreignKey": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "productId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "productId"
                },
                "productVariantId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "productVariantId"
                },
                "useCustomPrice": {
                    "type": Sequelize.BOOLEAN,
                    "field": "useCustomPrice"
                },
                "price": {
                    "type": Sequelize.DECIMAL,
                    "field": "price"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "modifiers",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "required": {
                    "type": Sequelize.BOOLEAN,
                    "field": "required"
                },
                "allowMultiple": {
                    "type": Sequelize.BOOLEAN,
                    "field": "allowMultiple"
                },
                "maximumAllowed": {
                    "type": Sequelize.INTEGER,
                    "field": "maximumAllowed"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
                },
                "modifierId": {
                    "type": Sequelize.UUID,
                    "field": "modifierId",
                    "allowNull": true
                },
                "productId": {
                    "type": Sequelize.UUID,
                    "field": "productId",
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "orderLineModifiers",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "orderId": {
                    "type": Sequelize.UUID,
                    "field": "orderId",
                    "defaultValue": Sequelize.UUIDV4,
                    "foreignKey": true,
                    "primaryKey": true
                },
                "orderLineId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "orderLineId",
                    "defaultValue": Sequelize.UUIDV4,
                    "foreignKey": true,
                    "primaryKey": true
                },
                "modifierId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "modifierId"
                },
                "modifierItemId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "modifierItemId"
                },
                "modifierItemName": {
                    "type": Sequelize.STRING,
                    "field": "modifierItemName"
                },
                "modifierItemProductId": {
                    "type": Sequelize.UUID,
                    "field": "modifierItemProductId"
                },
                "modifierItemProductVariantId": {
                    "type": Sequelize.UUID,
                    "field": "modifierItemProductVariantId"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description"
                },
                "price": {
                    "type": Sequelize.DECIMAL,
                    "field": "price"
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
                },
                "productId": {
                    "type": Sequelize.UUID,
                    "field": "productId",
                    "allowNull": true
                },
                "productVariantId": {
                    "type": Sequelize.UUID,
                    "field": "productVariantId",
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "orderLines",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "orderId": {
                    "type": Sequelize.UUID,
                    "field": "orderId",
                    "foreignKey": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "productId": {
                    "type": Sequelize.UUID,
                    "field": "productId",
                    "foreignKey": true,
                    "allowNull": false
                },
                "productVariantId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "productVariantId",
                    "foreignKey": true
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description"
                },
                "qty": {
                    "type": Sequelize.DECIMAL,
                    "field": "qty"
                },
                "unitPrice": {
                    "type": Sequelize.DECIMAL,
                    "field": "unitPrice"
                },
                "modifierPrice": {
                    "type": Sequelize.DECIMAL,
                    "field": "modifierPrice"
                },
                "customDiscount": {
                    "type": Sequelize.BOOLEAN,
                    "field": "customDiscount"
                },
                "discountPercent": {
                    "type": Sequelize.DECIMAL,
                    "field": "discountPercent"
                },
                "discountAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "discountAmount"
                },
                "total": {
                    "type": Sequelize.DECIMAL,
                    "field": "total"
                },
                "serviceCharged": {
                    "type": Sequelize.BOOLEAN,
                    "field": "serviceCharged"
                },
                "taxed": {
                    "type": Sequelize.BOOLEAN,
                    "field": "taxed"
                },
                "taxId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "taxId"
                },
                "notes": {
                    "type": Sequelize.STRING,
                    "field": "notes"
                },
                "createdByUserId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "createdByUserId"
                },
                "createdDate": {
                    "type": Sequelize.DATE,
                    "field": "createdDate"
                },
                "cancelledUserId": {
                    "type": Sequelize.UUID,
                    "field": "cancelledUserId"
                },
                "cancellationDate": {
                    "type": Sequelize.DATE,
                    "field": "cancellationDate"
                },
                "cancelled": {
                    "type": Sequelize.BOOLEAN,
                    "field": "cancelled",
                    "defaultValue": false
                },
                "cancellationReason": {
                    "type": Sequelize.STRING,
                    "field": "cancellationReason"
                },
                "printerAreaId": {
                    "type": Sequelize.UUID,
                    "field": "printerAreaId"
                },
                "lineType": {
                    "type": Sequelize.STRING,
                    "field": "lineType",
                    "defaultValue": "item"
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
            "orderPayments",
            {
                "orderId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "orderId",
                    "defaultValue": Sequelize.UUIDV4,
                    "foreignKey": true,
                    "primaryKey": true
                },
                "paymentMethodId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "paymentMethodId",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true
                },
                "paymentAccountId": {
                    "type": Sequelize.UUID,
                    "field": "paymentAccountId"
                },
                "paymentAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "paymentAmount"
                },
                "cardNumber": {
                    "type": Sequelize.STRING,
                    "field": "cardNumber"
                },
                "cardHolder": {
                    "type": Sequelize.STRING,
                    "field": "cardHolder"
                },
                "referenceNumber": {
                    "type": Sequelize.STRING,
                    "field": "referenceNumber"
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
            "orderTaxes",
            {
                "orderId": {
                    "type": Sequelize.UUID,
                    "field": "orderId",
                    "defaultValue": Sequelize.UUIDV4,
                    "foreignKey": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "taxId": {
                    "type": Sequelize.UUID,
                    "field": "taxId",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "taxRate": {
                    "type": Sequelize.DECIMAL,
                    "field": "taxRate"
                },
                "baseAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "baseAmount"
                },
                "taxAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "taxAmount"
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
            "orders",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "orderNumber": {
                    "type": Sequelize.STRING,
                    "field": "orderNumber"
                },
                "orderDate": {
                    "type": Sequelize.DATE,
                    "field": "orderDate"
                },
                "orderDateTime": {
                    "type": Sequelize.DATE,
                    "field": "orderDateTime"
                },
                "customerId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "customerId",
                    "foreignKey": true
                },
                "customerName": {
                    "type": Sequelize.STRING,
                    "field": "customerName"
                },
                "customerEmail": {
                    "type": Sequelize.STRING,
                    "field": "customerEmail"
                },
                "customerMobile": {
                    "type": Sequelize.STRING,
                    "field": "customerMobile"
                },
                "salesTypeId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "salesTypeId"
                },
                "tableId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "tableId"
                },
                "taxInclusive": {
                    "type": Sequelize.BOOLEAN,
                    "field": "taxInclusive"
                },
                "lineCount": {
                    "type": Sequelize.INTEGER,
                    "field": "lineCount"
                },
                "lineTotalQty": {
                    "type": Sequelize.DECIMAL,
                    "field": "lineTotalQty"
                },
                "subTotal": {
                    "type": Sequelize.DECIMAL,
                    "field": "subTotal"
                },
                "serviceCharged": {
                    "type": Sequelize.BOOLEAN,
                    "field": "serviceCharged"
                },
                "serviceChargeRate": {
                    "type": Sequelize.DECIMAL,
                    "field": "serviceChargeRate"
                },
                "serviceChargeAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "serviceChargeAmount"
                },
                "serviceChargeTaxId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "serviceChargeTaxId"
                },
                "serviceChargeTaxRate": {
                    "type": Sequelize.DECIMAL,
                    "field": "serviceChargeTaxRate"
                },
                "taxed": {
                    "type": Sequelize.BOOLEAN,
                    "field": "taxed"
                },
                "taxAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "taxAmount"
                },
                "adjustmentAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "adjustmentAmount"
                },
                "total": {
                    "type": Sequelize.DECIMAL,
                    "field": "total"
                },
                "tenderAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "tenderAmount"
                },
                "changeAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "changeAmount"
                },
                "cashPaymentAccountId": {
                    "type": Sequelize.UUID,
                    "field": "cashPaymentAccountId"
                },
                "cashPaymentMethodId": {
                    "type": Sequelize.UUID,
                    "field": "cashPaymentMethodId"
                },
                "cashPaymentAmount": {
                    "type": Sequelize.DECIMAL,
                    "field": "cashPaymentAmount"
                },
                "status": {
                    "type": Sequelize.STRING,
                    "field": "status"
                },
                "createdByUserId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "createdByUserId"
                },
                "createdDate": {
                    "type": Sequelize.DATE,
                    "field": "createdDate"
                },
                "lastUpdateByUserId": {
                    "type": Sequelize.UUID,
                    "field": "lastUpdateByUserId"
                },
                "lastUpdateDate": {
                    "type": Sequelize.DATE,
                    "field": "lastUpdateDate"
                },
                "paidByUserId": {
                    "type": Sequelize.UUID,
                    "field": "paidByUserId"
                },
                "paymentDate": {
                    "type": Sequelize.DATE,
                    "field": "paymentDate"
                },
                "cancelledByUserId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "cancelledByUserId"
                },
                "cancellationDate": {
                    "type": Sequelize.DATE,
                    "field": "cancellationDate"
                },
                "cancellationReason": {
                    "type": Sequelize.STRING,
                    "field": "cancellationReason"
                },
                "rowVersion": {
                    "type": Sequelize.UUID,
                    "field": "rowVersion"
                },
                "isSync": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isSync"
                },
                "syncDate": {
                    "type": Sequelize.DATE,
                    "field": "syncDate"
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
            "outletSettings",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "lastLoginUseId": {
                    "type": Sequelize.UUID,
                    "field": "lastLoginUseId"
                },
                "lastOrderNumberCount": {
                    "type": Sequelize.INTEGER,
                    "field": "lastOrderNumberCount"
                },
                "lastOrderNumberDate": {
                    "type": Sequelize.DATE,
                    "field": "lastOrderNumberDate"
                },
                "serviceCharged": {
                    "type": Sequelize.BOOLEAN,
                    "field": "serviceCharged"
                },
                "serviceChargeRate": {
                    "type": Sequelize.DECIMAL,
                    "field": "serviceChargeRate"
                },
                "serviceChargeTaxId": {
                    "type": Sequelize.UUID,
                    "field": "serviceChargeTaxId"
                },
                "serviceChargeTaxRate": {
                    "type": Sequelize.DECIMAL,
                    "field": "serviceChargeTaxRate"
                },
                "taxed": {
                    "type": Sequelize.BOOLEAN,
                    "field": "taxed"
                },
                "taxInclusive": {
                    "type": Sequelize.BOOLEAN,
                    "field": "taxInclusive"
                },
                "taxOnSales": {
                    "type": Sequelize.BOOLEAN,
                    "field": "taxOnSales"
                },
                "lastSyncTime": {
                    "type": Sequelize.DATE,
                    "field": "lastSyncTime"
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
            "categories",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "sortOrder": {
                    "type": Sequelize.INTEGER,
                    "field": "sortOrder"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
                },
                "categoryId": {
                    "type": Sequelize.UUID,
                    "field": "categoryId",
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "priceLists",
            {
                "productId": {
                    "type": Sequelize.UUID,
                    "field": "productId",
                    "defaultValue": Sequelize.UUIDV4,
                    "foreignKey": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "productVariantId": {
                    "type": Sequelize.UUID,
                    "unique": "priceLists_salesTypeId_productVariantId_unique",
                    "field": "productVariantId",
                    "defaultValue": Sequelize.UUIDV4,
                    "foreignKey": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "salesTypeId": {
                    "type": Sequelize.UUID,
                    "unique": "priceLists_salesTypeId_productVariantId_unique",
                    "field": "salesTypeId",
                    "defaultValue": Sequelize.UUIDV4,
                    "foreignKey": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "salesTypeName": {
                    "type": Sequelize.STRING,
                    "field": "salesTypeName"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description"
                },
                "price": {
                    "type": Sequelize.DECIMAL,
                    "field": "price"
                },
                "isMaster": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isMaster"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "printerAreas",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
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
            "taxes",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "code": {
                    "type": Sequelize.STRING,
                    "field": "code"
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "rate": {
                    "type": Sequelize.DECIMAL,
                    "field": "rate"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "productCategoryRelations",
            {
                "productId": {
                    "type": Sequelize.UUID,
                    "unique": "productCategoryRelations_productId_categoryId_unique",
                    "field": "productId",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "categoryId": {
                    "type": Sequelize.UUID,
                    "unique": "productCategoryRelations_productId_categoryId_unique",
                    "field": "categoryId",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
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
            "tables",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "areaId": {
                    "type": Sequelize.STRING,
                    "allowNull": true,
                    "field": "areaId"
                },
                "inUsed": {
                    "type": Sequelize.BOOLEAN,
                    "field": "inUsed",
                    "defaultValue": false
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "productVariants",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "productId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "productId",
                    "foreignKey": true,
                    "primaryKey": true
                },
                "sku": {
                    "type": Sequelize.STRING,
                    "field": "sku"
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "variantName": {
                    "type": Sequelize.STRING,
                    "field": "variantName"
                },
                "unitPrice": {
                    "type": Sequelize.DECIMAL,
                    "field": "unitPrice"
                },
                "isMaster": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isMaster"
                },
                "attribute1Value": {
                    "type": Sequelize.STRING,
                    "field": "attribute1Value"
                },
                "attribute2Value": {
                    "type": Sequelize.STRING,
                    "field": "attribute2Value"
                },
                "attribute3Value": {
                    "type": Sequelize.STRING,
                    "field": "attribute3Value"
                },
                "sortOrder": {
                    "type": Sequelize.INTEGER,
                    "field": "sortOrder"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "products",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "sku": {
                    "type": Sequelize.STRING,
                    "field": "sku"
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "detailDescription": {
                    "type": Sequelize.STRING,
                    "field": "detailDescription"
                },
                "salesTaxId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "salesTaxId"
                },
                "uom": {
                    "type": Sequelize.STRING,
                    "field": "uom"
                },
                "hasVariants": {
                    "type": Sequelize.BOOLEAN,
                    "field": "hasVariants"
                },
                "variantCount": {
                    "type": Sequelize.INTEGER,
                    "field": "variantCount"
                },
                "variantAttribute1": {
                    "type": Sequelize.STRING,
                    "field": "variantAttribute1"
                },
                "variantAttribute2": {
                    "type": Sequelize.STRING,
                    "field": "variantAttribute2"
                },
                "variantAttribute3": {
                    "type": Sequelize.STRING,
                    "field": "variantAttribute3"
                },
                "masterVariantId": {
                    "type": Sequelize.UUID,
                    "field": "masterVariantId"
                },
                "pictureUrl": {
                    "type": Sequelize.STRING,
                    "field": "pictureUrl"
                },
                "pictureLocal": {
                    "type": Sequelize.STRING,
                    "field": "pictureLocal"
                },
                "printerAreaId": {
                    "type": Sequelize.UUID,
                    "allowNull": true,
                    "field": "printerAreaId"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
                },
                "categoryId": {
                    "type": Sequelize.UUID,
                    "field": "categoryId",
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "salesTypes",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "isMaster": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isMaster",
                    "defaultValue": false
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "users",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING,
                    "field": "firstName"
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "field": "lastName"
                },
                "fullName": {
                    "type": Sequelize.STRING,
                    "field": "fullName"
                },
                "pinNumber": {
                    "type": Sequelize.STRING,
                    "field": "pinNumber"
                },
                "allowToPay": {
                    "type": Sequelize.BOOLEAN,
                    "field": "allowToPay"
                },
                "allowToCancel": {
                    "type": Sequelize.BOOLEAN,
                    "field": "allowToCancel"
                },
                "allowToEdit": {
                    "type": Sequelize.BOOLEAN,
                    "field": "allowToEdit"
                },
                "pictureUrl": {
                    "type": Sequelize.STRING,
                    "field": "pictureUrl"
                },
                "pictureLocal": {
                    "type": Sequelize.STRING,
                    "field": "pictureLocal"
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "defaultValue": false
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
            "productModifierRelations",
            {
                "productId": {
                    "type": Sequelize.UUID,
                    "unique": "productModifierRelations_productId_modifierId_unique",
                    "field": "productId",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "modifierId": {
                    "type": Sequelize.UUID,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "modifiers",
                        "key": "id"
                    },
                    "unique": "productModifierRelations_productId_modifierId_unique",
                    "field": "modifierId",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "sortOrder": {
                    "type": Sequelize.INTEGER,
                    "field": "sortOrder"
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
            "printerClients",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "defaultValue": Sequelize.UUIDV4,
                    "primaryKey": true,
                    "allowNull": false
                },
                "deviceId": {
                    "type": Sequelize.UUID,
                    "field": "deviceId"
                },
                "printerAreaId": {
                    "type": Sequelize.UUID,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "printerAreas",
                        "key": "id"
                    },
                    "allowNull": true,
                    "field": "printerAreaId"
                },
                "type": {
                    "type": Sequelize.STRING,
                    "field": "type"
                },
                "ip": {
                    "type": Sequelize.STRING,
                    "field": "ip"
                },
                "port": {
                    "type": Sequelize.INTEGER,
                    "field": "port"
                },
                "macAddress": {
                    "type": Sequelize.STRING,
                    "field": "macAddress"
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "paperSize": {
                    "type": Sequelize.INTEGER,
                    "field": "paperSize"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS0yMDE5MDExNzEzMjQwNi1kYi1tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS9taWdyYXRpb25zL2RiLW1haW4vMS0yMDE5MDExNzEzMjQwNi1kYi1tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCSTtBQUNKLElBQUksSUFBSSxHQUFHO0lBQ1AsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUUsd0JBQXdCO0lBQ2hDLFNBQVMsRUFBRSwwQkFBMEI7SUFDckMsU0FBUyxFQUFFLEVBQUU7Q0FDaEIsQ0FBQztBQUNGLElBQUksaUJBQWlCLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsYUFBYTtRQUNqQixNQUFNLEVBQUU7WUFDSixnQkFBZ0I7WUFDaEI7Z0JBQ0ksaUJBQWlCLEVBQUU7b0JBQ2YsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJO29CQUN0QixPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsV0FBVyxFQUFFLEtBQUs7aUJBQ3JCO2dCQUNELG1CQUFtQixFQUFFO29CQUNqQixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07b0JBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7aUJBQy9CO2dCQUNELG1CQUFtQixFQUFFO29CQUNqQixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07b0JBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7aUJBQy9CO2dCQUNELGtCQUFrQixFQUFFO29CQUNoQixNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUk7b0JBQ3RCLE9BQU8sRUFBRSxrQkFBa0I7aUJBQzlCO2dCQUNELGVBQWUsRUFBRTtvQkFDYixNQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU87b0JBQ3pCLE9BQU8s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