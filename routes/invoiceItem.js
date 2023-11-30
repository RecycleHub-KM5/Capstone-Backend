const express = require("express");
const route = express.Router();
const invoiceItem = require('../controller/invoiceItem')
const verifyJwtTokenController = require('../controller/verify_jwt');

route.post('/invoice-items',[verifyJwtTokenController.verifyToken], invoiceItem.postInvoiceItem)
route.get('/invoice-items/:invoice_id',[verifyJwtTokenController.verifyToken], invoiceItem.getAllInvoiceItemByInvoiceId)
route.put('/invoice-items/:id',[verifyJwtTokenController.verifyToken], invoiceItem.updateInvoiceItemById)
route.delete('/invoice-items/:id',[verifyJwtTokenController.verifyToken], invoiceItem.deleteInvoiceItemById)

module.exports = route;