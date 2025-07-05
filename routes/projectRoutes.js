// routes/projectRoutes.js
const express = require('express');
const router = express.Router();

router.post('/projects', (req, res) => {
    const { title, description, link } = req.body;
    // Save to database (MongoDB, etc.)
    res.status(201).json({ message: 'Project created successfully' });
});

module.exports = router;
