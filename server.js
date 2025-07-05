const express = require('express');
const path = require('path');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes'); // ← Add this line
const clientRoutes = require('./routes/clientRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

const app = express();
app.use(express.json());

// Mount both route modules
app.use('/api', clientRoutes);
app.use('/api', newsletterRoutes);
app.use('/api', contactRoutes);
app.use('/api', projectRoutes); // ← Add this line too

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
