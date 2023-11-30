const Cart = require('../models/cart');
require("dotenv").config();

const postCart = async(req, res) => {
    try {
        const user_id = req.userId
        const { name, product_id, product_detail, total, note } = req.body;
        const cart = await Cart.create({ name, user_id, product_id, product_detail, total, note });
        res.json(cart);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const getCartByUserId = async(req, res) => {
    const userId = req.userId;
    try {
      const carts = await Cart.findAll({ where: { user_id: userId } });
      res.json(carts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const updateCartById = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, user_id, product_id, product_detail, total, note } = req.body;
        const [updatedRows] = await Cart.update({ name, user_id, product_id, product_detail, total, note }, { where: { id } });
        if (updatedRows > 0) {
          res.json({ message: 'Cart updated successfully' });
        } else {
          res.status(404).json({ message: 'Cart not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCartById = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await Cart.destroy({ where: { id } });
        if (deletedRows > 0) {
          res.json({ message: 'Cart deleted successfully' });
        } else {
          res.status(404).json({ message: 'Cart not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports = {
    postCart,
    getCartByUserId,
    updateCartById,
    deleteCartById,
}
    
