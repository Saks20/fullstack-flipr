// routes/contactRoutes.js
const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
    const { name, email, phone, city } = req.body;

    // You can add DB saving logic here
    console.log('📩 New contact submission:', { name, email, phone, city });

    res.status(200).json({ message: 'Contact received!' });
});

module.exports = router;
