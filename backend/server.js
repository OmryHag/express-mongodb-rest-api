const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();

// handle body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// handle error
app.use(errorHandler);

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => console.log(`Server started in port ${port}`));
