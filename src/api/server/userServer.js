// userServer.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./src/config/db');
const errorMiddleware = require('./src/middleware/errorMiddleware');
const userRoutes = require('./src/api/routes/userRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/users', userRoutes);

// Error middleware
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
