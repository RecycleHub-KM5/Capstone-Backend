const express = require("express");
const route = express.Router();
const productDetail = require('../controller/productDetail')
const verifyJwtTokenController = require('../controller/verify_jwt');

route.get('/product/:id/details', productDetail.getAllProductDetail)
route.post('/product-details',[verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], productDetail.postProductDetail)
route.put('/product-details/:id',[verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], productDetail.updateProductDetailById)
route.delete('/product-details/:id',[verifyJwtTokenController.verifyToken, verifyJwtTokenController.isAdmin], productDetail.deleteProductDetailById)

module.exports = route;