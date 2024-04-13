const mongoose = require('mongoose');
// Kết nối tới cơ sở dữ liệu MongoDB sử dụng URL được cung cấp trong biến môi trường DB_URL
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
