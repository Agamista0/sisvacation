import express from 'express';

import { getCallRequests, deleteCallRequest ,addOffer,  adminLogin} from '../controllers/adminController.js';
import { getTrips, deleteTrip } from '../controllers/tripController.js';

const router = express.Router();
router.post('/api/addOffer', addOffer);

router.get('/api/getTrips', getTrips);
router.delete('/api/deleteTrip/:id', deleteTrip);

router.post('/api/adminlogin', adminLogin);

router.get('/api/getCallRequests', getCallRequests);
router.delete('/api/deleteCallRequest/:id', deleteCallRequest);


export default router;
