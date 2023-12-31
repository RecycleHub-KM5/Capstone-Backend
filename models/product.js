// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class product extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//         }
//     }
//     product.init(
//         {
//             name: DataTypes.STRING,
//             price: DataTypes.INTEGER,
//             description: DataTypes.TEXT,
//             thumbnail: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "product",
//         }
//     );
//     return product;
// };

const { DataTypes, Model } = require("sequelize");
const sequelize = require("./instance");
const ProductDetail = require("./product_detail");

class Product extends Model {}

Product.init(
    {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        thumbnail: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "product",
    }
);

Product.hasOne(ProductDetail, { foreignKey: "id_product" });
ProductDetail.belongsTo(Product, { foreignKey: "id_product" });

// Product.hasMany(ProductDetail);
// Product.hasMany(ProductDetail);
//
module.exports = Product;
