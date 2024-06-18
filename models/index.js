const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
const path = require("path");

const sequelize = new Sequelize(config.development);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
console.log("__dirname:", __dirname); // Log current directory
console.log("Resolved path:", path.resolve(__dirname, "./globalnews")); // Log resolved path

db.user = require("./user")(sequelize, Sequelize);
db.globalnews = require("./globalnews")(sequelize, Sequelize);

module.exports = db;
