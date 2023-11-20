const express = require("express");
const route = express.Router();
const authRoute = require("./auth-route");

route.get("/", (req, res) => {
    res.send("Welcome to API RecycleHub");
});

route.use("/users/auth", authRoute);

module.exports = route;
