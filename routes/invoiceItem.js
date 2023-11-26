const express = require("express");
const route = express.Router();
const invoiceItem = require('../controller/invoiceItem')

route.post('/invoice-items', invoiceItem.postInvoiceItem)
route.get('/invoice-items/:invoice_id', invoiceItem.getAllInvoiceItemByInvoiceId)
route.put('/invoice-items/:id', invoiceItem.updateInvoiceItemById)
route.delete('/invoice-items/:id', invoiceItem.deleteInvoiceItemById)

module.exports = route;