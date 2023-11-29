const express = require("express");
const route = express.Router();
const invoice = require('../controller/invoice')
const verifyJwtTokenController = require('../controller/verify_jwt');

route.post('/invoice',[verifyJwtTokenController.verifyToken], invoice.postInvoice)
route.get('/invoice',[verifyJwtTokenController.verifyToken], invoice.getAllInvoice)
route.get('/invoices/users',[verifyJwtTokenController.verifyToken], invoice.getInvoiceByUserId)
route.get('/invoice/:id',[verifyJwtTokenController.verifyToken], invoice.getInvoiceById)
route.put('/invoice/:id',[verifyJwtTokenController.verifyToken], invoice.updateInvoiceById)
route.delete('/invoice/:id',[verifyJwtTokenController.verifyToken], invoice.deleteInvoiceById)

module.exports = route;