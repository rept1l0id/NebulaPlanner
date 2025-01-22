const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./utils/database');
const calendarRoutes = require('./routes/calendarRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/calendar', calendarRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Error connecting to the database', err);
    });

module.exports = app;
