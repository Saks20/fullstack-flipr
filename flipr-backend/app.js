// flipr-backend/app.js
import express from 'express';
import cors from 'cors';

import projectRoutes from './routes/projectRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Mount routes with full paths
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Root health check
app.get('/', (req, res) => {
    res.send('✅ Flipr Backend is running!');
});

export default app;
