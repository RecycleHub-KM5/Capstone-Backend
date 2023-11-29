const express = require("express");
const {
    midtransSnapTransaction,
} = require("../controller/transaction-controller");
const route = express.Router();

// route.use(function (req, res, next) {
//     res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept, Authorization"
//     );
//     next();
// });

route.post("/proccess-transaction", midtransSnapTransaction);

module.exports = route;
