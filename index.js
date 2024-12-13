const express = require('express');
const app = express();
require('dotenv').config()
const productRouter = require('./src/routes/productRoutes');
const connectDB = require('./src/db');

const PORT = process.env.PORT || 3100;

app.use(express.json());

connectDB();

app.use("*", (req, res, next) => {
    console.log("Request was made to: " + req.originalUrl);
    return next();
})


app.use('/', productRouter);

app.get("/health", (req, res) => {  
    res.json({ message: "product-service is running" });
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



