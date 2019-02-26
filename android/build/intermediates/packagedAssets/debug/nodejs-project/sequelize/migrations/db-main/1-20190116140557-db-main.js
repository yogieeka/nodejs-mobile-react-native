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
 * createTable "pricelists", deps: []
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
    "name": "20190116140557-db-main",
    "created": "2019-01-16T07:05:57.384Z",
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
                "address": {
                    "type": Sequelize.STRING,
                    "field": "address"
                },
                "company": {
                    "type": Sequelize.STRING,
                    "field": "company"
                },
                "dateOfBirth": {
                    "type": Sequelize.DATE,
                    "field": "dateOfBirth"
                },
                "displayName": {
                    "type": Sequelize.STRING,
                    "field": "displayName"
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email"
                },
                "firstName": {
                    "type": Sequelize.STRING,
                    "field": "firstName"
                },
                "gender": {
                    "type": Sequelize.STRING,
                    "field": "gender"
                },
                "isSync": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isSync"
                },
                "lastEdit": {
                    "type": Sequelize.DATE,
                    "field": "lastEdit"
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "field": "lastName"
                },
                "phone": {
                    "type": Sequelize.STRING,
                    "field": "phone"
                },
                "syncDate": {
                    "type": Sequelize.DATE,
                    "field": "syncDate"
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
                "cancelledByUserId": {
                    "type": Sequelize.UUID,
                    "field": "cancelledByUserId"
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
            "pricelists",
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
                    "unique": "pricelists_salesTypeId_productVariantId_unique",
                    "field": "productVariantId",
                    "defaultValue": Sequelize.UUIDV4,
                    "foreignKey": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "salesTypeId": {
                    "type": Sequelize.UUID,
                    "unique": "pricelists_salesTypeId_productVariantId_unique",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS0yMDE5MDExNjE0MDU1Ny1kYi1tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcXVlbGl6ZS9taWdyYXRpb25zL2RiLW1haW4vMS0yMDE5MDExNjE0MDU1Ny1kYi1tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCSTtBQUNKLElBQUksSUFBSSxHQUFHO0lBQ1AsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUUsd0JBQXdCO0lBQ2hDLFNBQVMsRUFBRSwwQkFBMEI7SUFDckMsU0FBUyxFQUFFLEVBQUU7Q0FDaEIsQ0FBQztBQUNGLElBQUksaUJBQWlCLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsYUFBYTtRQUNqQixNQUFNLEVBQUU7WUFDSixnQkFBZ0I7WUFDaEI7Z0JBQ0ksaUJBQWlCLEVBQUU7b0JBQ2YsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJO29CQUN0QixPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsV0FBVyxFQUFFLEtBQUs7aUJBQ3JCO2dCQUNELG1CQUFtQixFQUFFO29CQUNqQixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07b0JBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7aUJBQy9CO2dCQUNELG1CQUFtQixFQUFFO29CQUNqQixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07b0JBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7aUJBQy9CO2dCQUNELGtCQUFrQixFQUFFO29CQUNoQixNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUk7b0JBQ3RCLE9BQU8sRUFBRSxrQkFBa0I7aUJBQzlCO2dCQUNELGVBQWUsRUFBRTtvQkFDYixNQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU87b0JBQ3pCLE9BQU8s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