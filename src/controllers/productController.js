const product = require("../models/product");
const axios = require('axios');


const productController = {
    getAll: async (req, res) => {
        try {
            const products = await product.find();
            return res.json(products);
        } catch (error) {
            console.log("Error in productController.getAll:", error);
            return res.status(500).json({ message: error.message });
        }
    },
    getOne: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await product.findById(id);
            return res.json(product);
        } catch (error) {
            console.log("Error in productController.getOne:", error);
            return res.status(500).json({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {

            const files = req.files;
            const { name, price, stock } = req.body;

            // const result = await axios.post('http://localhost:3200/storage', {
            //     folder: 'products',
            //     files
            // }, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // });

            // console.log("result:", result);

            const newProduct = {
                name,
                price,
                stock,
                // images: result.data.blobNames
            }
            const productCreated = await product.create(newProduct);
            return res.json(productCreated);
        } catch (error) {
            console.log("Error in productController.create:", error);
            return res.status(500).json({ message: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const productDeleted = await product.findByIdAndDelete(id);
            return res.json(productDeleted);
        } catch (error) {
            console.log("Error in productController.delete:", error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = productController;