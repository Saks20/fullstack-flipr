// routes/newsletterRoutes.js
import express from 'express';
import { subscribeNewsletter, getSubscribers } from '../controllers/newsletterController.js';

const router = express.Router();

router.post('/newsletter', subscribeNewsletter);
router.get('/newsletter', getSubscribers);

export default router;
