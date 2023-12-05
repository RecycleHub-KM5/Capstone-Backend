const express = require("express");
const route = express.Router();
const product = require('../controller/product')
const verifyJwtTokenController = require('../controller/verify_jwt');

route.get('/products', product.getAllProduct)
route.get('/products/:id', product.getProductById)
route.post('/products',[verifyJwtTokenController.verifyToken], product.postProduct)
route.put('/products',[verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], product.updateProductById)
route.delete('/products',[verifyJwtTokenController.verifyToken], product.deleteProductById)
module.exports = route; 