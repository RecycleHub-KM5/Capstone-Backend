const express = require("express");
const { midtransChargeTransaction } = require("../controller/transaction-controller");
const route = express.Router();

route.post("/charge", midtransChargeTransaction);
