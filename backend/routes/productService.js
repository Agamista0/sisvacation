import express from 'express';

import {getProductsLocation, getProducts, getProductDesc, getProduct, addToCart, getProductsCart, getCartCount, updateCartItem, deleteCartItem } from '../controllers/productService.js';
import { submitCall, submitTripForm } from '../controllers/contactController.js';

const router = express.Router();

router.get('/api/getProduct/:offerId', getProduct);
router.get('/api/getProductsLocation', getProductsLocation);

router.get('/api/getProductsLocation', getProductDesc );


router.get('/api/products', getProducts);
router.get('/api/getProductsCart', getProductsCart);
router.post('/api/addToCart', addToCart);
router.post('/api/submitCall', submitCall);
router.delete('/api/deleteCartItem/:productId', deleteCartItem);
router.post('/api/updateCartItem', updateCartItem);
router.post('/api/submitTripForm', submitTripForm);
router.get('/api/getProductsCountCart', getCartCount);

export default router;
