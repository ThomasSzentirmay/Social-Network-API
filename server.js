const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3333;
require('dotenv').config();


const connectDB = require('./config/db');
connectDB();

// Middleware
app.use(express.json());

// User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Thought Routes
const thoughtRoutes = require('./routes/thoughtRoutes');
app.use('/api/thoughts', thoughtRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});