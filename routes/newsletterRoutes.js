import express from 'express';
import { getSubscribers, subscribe } from '../controllers/newsletterController.js';

const router = express.Router();
router.get('/', getSubscribers);
router.post('/', subscribe);

export default router;
