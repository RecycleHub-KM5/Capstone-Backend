const { DataTypes, Model } = require("sequelize");
const sequelize = require("./instance");
const Transaction = require("./transaction");

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

User.hasOne(Transaction, { foreignKey: "user_id" });
Transaction.belongsTo(User, { foreignKey: "user_id" });

module.exports = User;
