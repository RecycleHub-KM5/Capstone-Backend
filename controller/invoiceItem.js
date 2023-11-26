const InvoiceItem = require('../models/invoice_item');
require("dotenv").config();

// Create Invoice Item
const postInvoiceItem = async(req, res) => {
    try {
        const { invoice_id, product_id, product_detail, note } = req.body;
        const invoiceItem = await InvoiceItem.create({ invoice_id, product_id, product_detail, note });
        res.json(invoiceItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// Read All Invoice Items for an Invoice
const getAllInvoiceItemByInvoiceId = async(req, res) => {
    const invoiceId = req.params.invoice_id;
    try {
      const invoiceItems = await InvoiceItem.findAll({ where: { invoice_id: invoiceId } });
      res.json(invoiceItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

// Update Invoice Item
const updateInvoiceItemById = async(req, res) => {
    try {
        const { id } = req.params;
        const { invoice_id, product_id, product_detail, note } = req.body;
        const [updatedRows] = await InvoiceItem.update({ invoice_id, product_id, product_detail, note }, { where: { id } });
        if (updatedRows > 0) {
          res.json({ message: 'Invoice Item updated successfully' });
        } else {
          res.status(404).json({ message: 'Invoice Item not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete Invoice Item
const deleteInvoiceItemById = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await InvoiceItem.destroy({ where: { id } });
        if (deletedRows > 0) {
          res.json({ message: 'Invoice Item deleted successfully' });
        } else {
          res.status(404).json({ message: 'Invoice Item not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    postInvoiceItem,
    getAllInvoiceItemByInvoiceId,
    updateInvoiceItemById,
    deleteInvoiceItemById,
}