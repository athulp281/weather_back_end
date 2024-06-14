const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const authRoutes = require("./routes/authRoutes");
const globalNewsRoutes = require("./routes/globalNewsRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/news", globalNewsRoutes);

db.sequelize
    .sync()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Error: " + err);
    });

module.exports = app;
