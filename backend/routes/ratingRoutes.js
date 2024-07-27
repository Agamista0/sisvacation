import express from 'express';

import { getReviews, addReview, getReviewSummary  } from '../controllers/ratingController.js';
 
const router = express.Router();

router.get('/api/getReviewSummary/:offerId', getReviewSummary);


router.get('/api/getReviews/:offerId', getReviews);
router.post('/api/addReview', addReview);


export default router;
