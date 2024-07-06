const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const dashboardRoute = require('./routes/dashboard');
const productRoute = require('./routes/product');
const billRoute= require('./routes/bill');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/bill', billRoute);
app.use('/dashboard', dashboardRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
