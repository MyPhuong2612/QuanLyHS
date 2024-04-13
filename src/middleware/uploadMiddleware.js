const multer = require('multer'); // Import thư viện multer để xử lý tải lên các tệp tin

// Cấu hình lưu trữ cho multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Xác định thư mục đích để lưu trữ các tệp tin
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Đặt tên cho tệp tin tải lên
        cb(null, file.fieldname + '-' + Date.now());
    }
});

// Tạo middleware multer với cấu hình lưu trữ đã được xác định
const upload = multer({ storage: storage });

module.exports = upload; // Xuất middleware multer đã cấu hình để có thể sử dụng trong các tệp khác
