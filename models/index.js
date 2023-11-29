const config = require("../config/config.js");
const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.HOST,
        port: config.development.PORT,
        dialect: config.development.dialect,
        operatorsAliases: config.operatorsAliases,
        dialectOptions: {
            socketPath: config.development.dialectOptions.socketPath,
            supportBigNumbers:
                config.development.dialectOptions.supportBigNumbers,
            bigNumberStrings:
                config.development.dialectOptions.bigNumberStrings,
            dateStrings: true,
            typeCast: true,
        },
        define: {
            underscored: true,
        },
        timezone: "+07:00",
        socketPath: config.socketPath,
        pool: {
            max: config.development.pool.max,
            min: config.development.pool.min,
            acquire: config.development.pool.acquire,
            idle: config.development.pool.idle,
        },
    }
);
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const Op = db.Sequelize.Op;
// db.transactions = require("./transaction.js")(sequelize, Sequelize);
module.exports = db;
