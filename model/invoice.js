// models/invoice.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('./instance');

class Invoice extends Model {}

Invoice.init({
  user_id: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'invoice',
});

module.exports = Invoice;
