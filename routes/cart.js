const express = require("express");
const route = express.Router();
const cart = require('../controller/cart')
const verifyJwtTokenController = require('../controller/verify_jwt');

route.post('/carts', [verifyJwtTokenController.verifyToken],cart.postCart)
route.get('/carts/:user_id', [verifyJwtTokenController.verifyToken], cart.getCartByUserId)
route.put('/carts/:id', [verifyJwtTokenController.verifyToken], cart.updateCartById)
route.delete('/carts/:id',[verifyJwtTokenController.verifyToken],  cart.deleteCartById)

module.exports = route;