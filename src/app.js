// Import các thư viện và module 
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const userRoutes = require('./api/routes/userRoutes');
const roleRoutes = require('./api/routes/roleRoutes');
// Đọc các biến môi trường từ file .env
dotenv.config();
// Khởi tạo ứng dụng Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Sử dụng các tuyến đường đã import
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
