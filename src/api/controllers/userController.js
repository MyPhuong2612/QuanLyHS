const User = require('../../models/userModel');

// Hàm tạo mới một người dùng
const createUser = async (req, res) => {
    try {
        // Lấy thông tin từ body của yêu cầu
        const { username, email, password } = req.body;
        // Tạo một đối tượng người dùng mới từ thông tin này
        const user = new User({ username, email, password });
        // Lưu người dùng vào cơ sở dữ liệu
        await user.save();
        // Trả về phản hồi thành công nếu mọi thứ đều OK
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        // Nếu có lỗi, trả về một phản hồi lỗi
        res.status(400).json({ message: error.message });
    }
};

// Hàm lấy thông tin tất cả người dùng
const getUsers = async (req, res) => {
    try {
        // Tìm tất cả người dùng trong cơ sở dữ liệu
        const users = await User.find();
        // Trả về danh sách người dùng
        res.json(users);
    } catch (error) {
        // Nếu có lỗi, trả về một phản hồi lỗi
        res.status(500).json({ message: error.message });
    }
};

// Hàm xóa người dùng
const deleteUser = async (req, res) => {
    try {
        // Lấy id của người dùng cần xóa
        const { id } = req.params;
        // Tìm và xóa người dùng dựa trên id
        const user = await User.findByIdAndDelete(id);
        // Kiểm tra xem người dùng có tồn tại hay không
        if (!user) {
            // Nếu không tìm thấy người dùng, trả về một phản hồi lỗi 404
            return res.status(404).json({ message: 'User not found' });
        }
        // Trả về phản hồi thành công nếu xóa thành công
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        // Nếu có lỗi, trả về một phản hồi lỗi
        res.status(500).json({ message: error.message });
    }
};

// Xuất các hàm để có thể sử dụng chúng ở các tệp khác
module.exports = { createUser, getUsers, deleteUser };
