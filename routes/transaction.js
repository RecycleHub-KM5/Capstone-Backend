const express = require("express");
const {
    midtransSnapTransaction,
    getTransaction,
} = require("../controller/transaction-controller");
const verifyJwtTokenController = require("../controller/verify_jwt");
const route = express.Router();

// route.use(function (req, res, next) {
//     res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept, Authorization"
//     );
//     next();
// });

route.post(
    "/proccess-transaction",
    [verifyJwtTokenController.verifyToken],
    midtransSnapTransaction
);

route.get(
    "/transaction",
    [verifyJwtTokenController.verifyToken],
    getTransaction
);

module.exports = route;
