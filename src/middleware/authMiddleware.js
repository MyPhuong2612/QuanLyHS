const jwt = require('jsonwebtoken'); // Import thư viện JSON Web Token (JWT) để xác thực token

// Middleware để xác thực token
const verifyToken = (req, res, next) => {
    // Lấy token từ tiêu đề 'Authorization' của yêu cầu
    const token = req.headers['authorization'];
    // Kiểm tra xem token có tồn tại hay không
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        // Giải mã token sử dụng mã bí mật (secret) và lưu trữ dữ liệu giải mã vào đối tượng 'req.user' để sử dụng trong các xử lý tiếp theo
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        // Tiếp tục xử lý yêu cầu
        next();
    } catch (error) {
        // Nếu có lỗi trong quá trình giải mã token, trả về một phản hồi lỗi
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyToken; // Xuất middleware để có thể sử dụng trong các tệp khác
