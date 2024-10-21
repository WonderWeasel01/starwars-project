const express = require('express');
const cors = require('cors');
const path = require('path');
const charecterRoutes = require('../controllers/characters'); 
const userRoutes = require('../routes/userRoutes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const HOST = process.env.SERVER_HOST || 'localhost';

// CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Opdater med din frontend URL
    methods: ['GET', 'POST'],
    credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Serve static frontend files (index.html and other assets)
app.use(express.static(path.join(__dirname, '../../frontend'))); 


// Error handling middleware
app.use(errorHandler);

// Catch-all route to serve the index.html for any other request
// This is useful for single-page applications (SPAs)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`App listening at http://${HOST}:${PORT}`);
});

app.use('/api/characters', charecterRoutes); // Tilføjet rute for karakterer
