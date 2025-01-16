const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const CalendarEvent = sequelize.define('CalendarEvent', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = CalendarEvent;
