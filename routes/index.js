const express = require("express");
const route = express.Router();
const authRoute = require("./auth-route");
const productRoute = require("./product");
const productDetailRoute = require("./productDetail");
const cartRoute = require("./cart");
const invoiceRoute = require("./invoice");
const invoiceItemRoute = require("./invoiceItem");
const transactionRoute = require("./transaction");

route.get("/", (req, res) => {
    res.send("Welcome to API RecycleHub");
});

route.use("/api/users/auth", authRoute);
route.use("/api", productRoute);
route.use("/api", productDetailRoute);
route.use("/api", cartRoute);
route.use("/api", invoiceRoute);
route.use("/api", invoiceItemRoute);
route.use("/api/payment", transactionRoute);

module.exports = route;
