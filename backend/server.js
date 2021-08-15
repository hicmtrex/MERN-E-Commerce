require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

//Routes Const 
const productRoutes = require('./routes/productRoutes');

connectDB();



//Middleware
app.use(express.json());
app.use(express.urlencoded({ extends: true }))

//Routes
app.use('/api/products', productRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build' , 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Api running')
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on Port ${PORT}`))