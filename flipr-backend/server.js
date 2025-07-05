// server.js
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import app from './app.js';
import { fileURLToPath } from 'url';

import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Mount all route modules
app.use('/api', clientRoutes);
app.use('/api', newsletterRoutes);
app.use('/api', contactRoutes);
app.use('/api', projectRoutes);

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


