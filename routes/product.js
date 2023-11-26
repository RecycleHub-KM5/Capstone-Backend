const express = require("express");
const route = express.Router();
const product = require('../controller/product')

route.post('/products', product.postProduct)
route.get('/products', product.getAllProduct)
route.get('/products/:id', product.getProductById)
route.put('/products', product.updateProductById)
route.delete('/products', product.deleteProductById)

module.exports = route;