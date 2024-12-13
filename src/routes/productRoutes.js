const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const productController = require('../controllers/productController');



router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.post('/',upload.array("files", 10), productController.create);
router.delete('/:id', productController.delete);



module.exports = router;