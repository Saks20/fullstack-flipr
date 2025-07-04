import express from 'express';
import { getClients, createClient } from '../controllers/clientController.js';

const router = express.Router();
router.get('/', getClients);
router.post('/', createClient);

export default router;
