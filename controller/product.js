const Product = require("../models/product");
require("dotenv").config();

const postProduct = async (req, res) => {
    try {
        const { name, price, description, thumbnail } = req.body;
        const product = await Product.create({ name, price, description, thumbnail });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.body;

    try {
        const product = await Product.findByPk(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        const [updatedRows] = await Product.update(
            { name, price, description },
            { where: { id } }
        );
        if (updatedRows > 0) {
            res.json({ message: "Product updated successfully" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProductById = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedRows = await Product.destroy({ where: { id } });
        if (deletedRows > 0) {
            res.json({ message: "Product deleted successfully" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    postProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
};
