const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static folder
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/subscribe', require('./routes/subscriberRoutes'));

app.get('/fail', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/fail.html'));
});

app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/success.html'));
});

app.use(errorHandler);

app.listen(port, console.log(`Server started on ${port}`));
