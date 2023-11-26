const express = require("express");
const route = express.Router();
const productDetail = require('../controller/productDetail')

route.get('/product/:id/details', productDetail.getAllProductDetail)
route.post('/product-details', productDetail.postProductDetail)
route.get('/product-details/:id', productDetail.updateProductDetailById)
route.get('/product-details/:id', productDetail.deleteProductDetailById)

module.exports = route;