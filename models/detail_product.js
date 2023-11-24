'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detail_product.init({
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    material: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detail_product',
  });
  return detail_product;
};