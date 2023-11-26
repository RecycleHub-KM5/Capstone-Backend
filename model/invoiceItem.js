// models/invoiceItem.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('./instance');

class InvoiceItem extends Model {}

InvoiceItem.init({
  invoice_id: DataTypes.INTEGER,
  product_id: DataTypes.INTEGER,
  product_detail: DataTypes.INTEGER,
  note: DataTypes.TEXT,
}, {
  sequelize,
  modelName: 'invoice_item',
});

module.exports = InvoiceItem;
