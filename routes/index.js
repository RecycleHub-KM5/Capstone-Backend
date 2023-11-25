const express = require("express");
const route = express.Router();
const authRoute = require("./auth-route");
const transactionRoute = require("./transaction-route");

route.get("/", (req, res) => {
    res.send("Welcome to API RecycleHub");
});

route.use("/users/auth", authRoute);
route.use("/transaction", transactionRoute);

module.exports = route;
