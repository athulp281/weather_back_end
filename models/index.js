const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
const path = require("path");

const sequelize = new Sequelize(config.development);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);
db.globalnews = require("./globalnews")(sequelize, Sequelize);

module.exports = db;
