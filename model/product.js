// models/product.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('./instance');
const ProductDetail = require('./productDetail')

class Product extends Model {}

Product.init({
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  decription: DataTypes.TEXT,
}, {
  sequelize,
  modelName: 'product',
});

Product.hasOne(ProductDetail, { foreignKey: 'id_product' });
ProductDetail.belongsTo(Product, { foreignKey: 'id_product' });

module.exports = Product;