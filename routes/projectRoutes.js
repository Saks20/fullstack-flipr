// routes/projectRoutes.js
import express from 'express';
const router = express.Router();

router.post('/projects', (req, res) => {
    const { title, description, link } = req.body;
    // TODO: Save to MongoDB
    res.status(201).json({ message: 'Project created successfully' });
});

export default router;
