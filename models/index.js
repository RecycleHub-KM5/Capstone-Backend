const config = require("../config/config.js");
const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: config.operatorsAliases,
    dialectOptions: {
        socketPath: config.dialectOptions.socketPath,
        supportBigNumbers: config.dialectOptions.supportBigNumbers,
        bigNumberStrings: config.dialectOptions.bigNumberStrings,
        dateStrings: true,
        typeCast: true,
    },
    define: {
        underscored: true,
    },
    timezone: "+07:00",
    socketPath: config.socketPath,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const Op = db.Sequelize.Op;
db.transaction = require("./transaction.model.js")(sequelize, Sequelize);
module.exports = db;
