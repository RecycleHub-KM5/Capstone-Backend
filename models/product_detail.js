// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
// class product_detail extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   product_detail.init({
//   name: DataTypes.STRING,
//   description: DataTypes.TEXT,
//   image: DataTypes.STRING,
//   id_product: DataTypes.INTEGER
// }, {
//   sequelize,
//   modelName: 'product_detail',
// });
// return product_detail;
// };

const { DataTypes, Model } = require("sequelize");
const sequelize = require("./instance");

class ProductDetail extends Model {}

ProductDetail.init(
    {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        id_product: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "product_detail",
    }
);

module.exports = ProductDetail;
