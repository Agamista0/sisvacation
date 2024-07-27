import express from 'express';
import { getOrCreateProfile } from '../controllers/authControler.js';

const router = express.Router();



router.get('/api/profile', getOrCreateProfile);

export default router;