const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// handle body
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server started in port ${port}`));

// handle error
app.use(errorHandler);
