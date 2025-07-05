// routes/contactRoutes.js
import express from 'express';
const router = express.Router();

router.post('/contact', (req, res) => {
    const { name, email, phone, city } = req.body;
    console.log('📩 New contact submission:', { name, email, phone, city });

    // TODO: Save to MongoDB
    res.status(200).json({ message: 'Contact received!' });
});

export default router;
