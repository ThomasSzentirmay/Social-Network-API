const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

const db = require('./config/db');

// Middleware
app.use(express.json());

// User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Thought Routes
const thoughtRoutes = require('./routes/thoughtRoutes');
app.use('/api/thoughts', thoughtRoutes);

// Start the server

db.once('open', () => {
  app.listen(PORT, () => console.log('Server started on port %s', PORT));
});