// models/productDetail.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('./instance');

class ProductDetail extends Model {}

ProductDetail.init({
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image: DataTypes.STRING,
  id_product: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'product_detail',
});

module.exports = ProductDetail;