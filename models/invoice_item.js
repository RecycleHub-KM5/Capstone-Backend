'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invoice_item.init({
    product_id: DataTypes.INTEGER,
    product_detail: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    note: DataTypes.TEXT,
    invoice_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'invoice_item',
  });
  return invoice_item;
};