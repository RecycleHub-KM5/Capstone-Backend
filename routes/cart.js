const express = require("express");
const route = express.Router();
const cart = require('../controller/cart')

route.post('/carts', cart.postCart)
route.get('/carts/:user_id', cart.getCartByUserId)
route.put('/carts/:id', cart.updateCartById)
route.delete('/carts/:id', cart.deleteCartById)

module.exports = route;