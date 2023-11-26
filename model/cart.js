const { DataTypes, Model } = require('sequelize');
const sequelize = require('./instance');

class Cart extends Model {}

Cart.init({
  name: DataTypes.STRING,
  user_id: DataTypes.INTEGER,
  product_id: DataTypes.INTEGER,
  product_detail: DataTypes.INTEGER,
  total: DataTypes.INTEGER,
  note: DataTypes.TEXT,
}, {
  sequelize,
  modelName: 'cart',
});

module.exports = Cart;