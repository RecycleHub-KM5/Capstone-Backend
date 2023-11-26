const ProductDetail = require('../model/productDetail');
require("dotenv").config();

const postProductDetail = async(req, res) => {
    try {
        const { name, description, image, id_product } = req.body;
        const productDetail = await ProductDetail.create({ name, description, image, id_product });
        res.json(productDetail);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const getAllProductDetail = async(req, res) => {
    try {
        const { id } = req.params;
        const productDetails = await ProductDetail.findAll({ where: { id_product: id } });
        res.json(productDetails);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateProductDetailById = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, description, image, id_product } = req.body;
        const [updatedRows] = await ProductDetail.update({ name, description, image, id_product }, { where: { id } });
        if (updatedRows > 0) {
          res.json({ message: 'Product detail updated successfully' });
        } else {
          res.status(404).json({ message: 'Product detail not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteProductDetailById = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await ProductDetail.destroy({ where: { id } });
        if (deletedRows > 0) {
          res.json({ message: 'Product detail deleted successfully' });
        } else {
          res.status(404).json({ message: 'Product detail not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    postProductDetail,
    getAllProductDetail,
    updateProductDetailById,
    deleteProductDetailById,
}