// Import các thư viện và module
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const roleRoutes = require('./src/api/routes/roleRoutes');
const errorMiddleware = require('./src/middleware/errorMiddleware');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/roles', roleRoutes);

// Error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
