const jwt = require('jsonwebtoken'); // Import thư viện JSON Web Token (JWT) để xác thực token

// Middleware để xác thực và kiểm tra quyền truy cập của người dùng
const authorizationMiddleware = (req, res, next) => {
    // Lấy token từ tiêu đề 'Authorization' của yêu cầu
    const token = req.headers['authorization'];
    // Kiểm tra xem token có tồn tại hay không
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        // Giải mã token sử dụng mã bí mật (secret) và lưu trữ dữ liệu giải mã vào đối tượng 'req.user' để sử dụng trong các xử lý tiếp theo
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // Kiểm tra vai trò của người dùng
        if (req.user.role === 'admin') {
            // Nếu là admin, cho phép truy cập
            next();
        } else {
            // Nếu không phải admin, từ chối truy cập và trả về một phản hồi lỗi 403 (Forbidden)
            return res.status(403).json({ message: 'Access denied. You do not have permission to access this resource.' });
        }
    } catch (error) {
        // Nếu có lỗi trong quá trình giải mã token, trả về một phản hồi lỗi 400 (Bad Request)
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = authorizationMiddleware; // Xuất middleware để có thể sử dụng trong các tệp khác
