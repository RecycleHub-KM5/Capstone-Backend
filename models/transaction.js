const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define(
        "transactions",
        {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            order_id: {
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            response_midtrans: {
                type: Sequelize.TEXT("long"),
            },
            transaction_status: {
                type: Sequelize.STRING,
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
        }
    );

    return Transaction;
};
