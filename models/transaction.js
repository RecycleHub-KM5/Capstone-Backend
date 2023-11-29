// const { Sequelize } = require("sequelize");
// const ProductDetail = require("./product_detail");
// const User = require("./user");

// module.exports = (sequelize, Sequelize) => {
//     const Transaction = sequelize.define(
//         "transactions",
//         {
//             id: {
//                 type: Sequelize.BIGINT,
//                 primaryKey: true,
//                 autoIncrement: true,
//             },
//             user_id: {
//                 type: Sequelize.INTEGER,
//             },
//             product_detail_id: {
//                 type: Sequelize.INTEGER,
//             },
//             quantity: {
//                 type: Sequelize.INTEGER,
//             },
//             total_price: {
//                 type: Sequelize.INTEGER,
//             },
//             status: {
//                 type: Sequelize.STRING,
//             },
//             snap_transaction_token: {
//                 type: Sequelize.TEXT,
//             },
//         },
//         {
//             freezeTableName: true,
//             timestamps: false,
//         }
//     );

//     // Transaction.hasOne(ProductDetail, { foreignKey: "product_detail_id" });
//     // ProductDetail.hasOne(Transaction, { foreignKey: "product_detail_id" });
//     // Transaction.hasOne(User, { foreignKey: "user_id" });
//     // User.hasOne(Transaction, { foreignKey: "user_id" });

//     return Transaction;
// };

const { DataTypes, Model } = require("sequelize");
const sequelize = require("./instance");
const User = require("./user");

class Transaction extends Model {}

Transaction.init(
    {
        user_id: DataTypes.INTEGER,
        product_detail_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        total_price: DataTypes.INTEGER,
        status: DataTypes.STRING,
        snap_transaction_token: DataTypes.TEXT,
    },
    {
        sequelize,
        modelName: "transaction",
    }
);

// Transaction.hasOne(User, { foreignKey: "user_id" });
// User.hasOne(Transaction, { foreignKey: "user_id" });

module.exports = Transaction;
