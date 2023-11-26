const express = require("express");
const route = express.Router();
const invoice = require('../controller/invoice')

route.post('/invoice', invoice.postInvoice)
route.get('/invoice', invoice.getAllInvoice)
route.get('/invoices/users/:user_id', invoice.getInvoiceByUserId)
route.get('/invoice/:id', invoice.getInvoiceById)
route.put('/invoice/:id', invoice.updateInvoiceById)
route.delete('/invoice/:id', invoice.deleteInvoiceById)

module.exports = route;