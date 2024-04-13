const Role = require('../../models/roleModel');

// Hàm tạo mới một vai trò
const createRole = async (req, res) => {
    try {
        // Lấy thông tin tên và mô tả 
        const { name, description } = req.body;
        // Tạo một đối tượng vai trò mới từ thông tin này
        const role = new Role({ name, description });
        // Lưu vai trò vào cơ sở dữ liệu
        await role.save();
        // Trả về phản hồi thành công nếu mọi thứ đều thành công
        res.status(201).json({ message: 'Role created successfully' });
    } catch (error) {
        // Nếu có lỗi, trả về một phản hồi lỗi
        res.status(400).json({ message: error.message });
    }
};

// Hàm lấy thông tin tất cả các vai trò
const getRoles = async (req, res) => {
    try {
        // Tìm tất cả các vai trò trong cơ sở dữ liệu
        const roles = await Role.find();
        // Trả về danh sách các vai trò
        res.json(roles);
    } catch (error) {
        // Nếu có lỗi, trả về một phản hồi lỗi
        res.status(500).json({ message: error.message });
    }
};