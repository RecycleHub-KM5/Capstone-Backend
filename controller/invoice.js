const Invoice = require('../model/invoice');
const InvoiceItem = require('../model/invoiceItem');
require("dotenv").config();

// Create Invoice
const postInvoice = async(req, res) => {
    try {
        const { user_id } = req.body;
        const invoice = await Invoice.create({ user_id });
        res.json(invoice);
      } catch (error) {
        res.status(500).json({ error: error.message });
      } 
}

// Read All Invoice
const getAllInvoice = async(req, res) => {
    try {
        const invoices = await Invoice.findAll();
        res.json(invoices);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// Read All Invoice
const getInvoiceById = async(req, res) => {
    const invoiceId = req.params.id;
    try {
      const invoice = await Invoice.findByPk(invoiceId, {
        include: [{ model: InvoiceItem, as: 'invoice_items' }],
      });
      if (invoice) {
        res.json(invoice);
      } else {
        res.status(404).json({ message: 'Invoice not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

// Read All Invoice
const getInvoiceByUserId = async(req, res) => {
    const userId = req.params.user_id;
    try {
      const invoices = await Invoice.findAll({ where: { user_id: userId } });
      res.json(invoices);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
}

// Update Invoice By Id
const updateInvoiceById = async(req, res) => {
    try {
        const { id } = req.params;
        const { user_id } = req.body;
        const [updatedRows] = await Invoice.update({ user_id }, { where: { id } });
        if (updatedRows > 0) {
          res.json({ message: 'Invoice updated successfully' });
        } else {
          res.status(404).json({ message: 'Invoice not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete Invoice By Id
const deleteInvoiceById = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await Invoice.destroy({ where: { id } });
        if (deletedRows > 0) {
          res.json({ message: 'Invoice deleted successfully' });
        } else {
          res.status(404).json({ message: 'Invoice not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
    }    
}

module.exports = {
    postInvoice,
    getAllInvoice,
    updateInvoiceById,
    deleteInvoiceById,
    getInvoiceById,
    getInvoiceByUserId
}
