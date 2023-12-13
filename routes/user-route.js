const express = require("express");
const { verifyToken } = require("../controller/verify_jwt");
const {
    getUserById,
    updateName,
    updatePassword,
} = require("../controller/user-controller");
const route = express.Router();

route.get("/users", verifyToken, getUserById);
route.put("/users/update-name", verifyToken, updateName);
route.put("/users/update-password", verifyToken, updatePassword);

module.exports = route;
