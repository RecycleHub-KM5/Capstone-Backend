const express = require("express");
const { midtransChargeTransaction } = require("../controller/order-controller");
const route = express.Router();

route.post("/charge", midtransChargeTransaction);
