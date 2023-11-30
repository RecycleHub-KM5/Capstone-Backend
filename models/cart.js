// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class cart extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   cart.init({
//     name: DataTypes.STRING,
//     user_id: DataTypes.INTEGER,
//     product_id: DataTypes.INTEGER,
//     product_detail: DataTypes.INTEGER,
//     total: DataTypes.INTEGER,
//     note: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'cart',
//   });
//   return cart;
// };

const { DataTypes, Model } = require("sequelize");
const sequelize = require("./instance");

class Cart extends Model {}

Cart.init(
    {
        name: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        product_detail: DataTypes.INTEGER,
        total: DataTypes.INTEGER,
        note: DataTypes.TEXT,
    },
    {
        sequelize,
        modelName: "cart",
    }
);

module.exports = Cart;
