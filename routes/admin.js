const express = require('express');
const path = require('path');
const router = express.Router();
const adminController = require('../controllers/admin');



//add product upon get req
router.get('/add-product',adminController.getAddProduct);
//list products for admin on get req
router.get('/products',adminController.getProducts);

//add product upon post req
router.post('/add-product',adminController.postAddProduct);

router.get('/edit-product/:productId',adminController.getEditProduct);

router.post('/edit-product',adminController.postEditProduct);
router.post('/delete-product',adminController.postDeleteProduct);

module.exports = router;

