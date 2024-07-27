import express from 'express';
import { addToWishlist, getUserWishlist } from '../controllers/Wishlist.js';

const router = express.Router();

router.post('/api/addToWishlist', addToWishlist);
router.get('/api/getUserWishlist', getUserWishlist);
export default router;
