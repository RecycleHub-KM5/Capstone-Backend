const { DataTypes, Model } = require("sequelize");
const sequelize = require("./instance");

class User extends Model {}

User.init(
    {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar: DataTypes.STRING,
        role: DataTypes.ENUM("user", "admin"),
        no_telp: DataTypes.STRING,
        address: DataTypes.TEXT,
        saldo: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "user",
    }
);

module.exports = User;
