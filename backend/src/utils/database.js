const { Sequelize } = require('sequelize');
require('dotenv').config(); // Подгружаем переменные из .env

// Инициализация подключения к базе данных
const sequelize = new Sequelize(
    process.env.DB_NAME,       // Имя базы данных
    process.env.DB_USER,       // Пользователь базы данных
    process.env.DB_PASSWORD,   // Пароль базы данных
    {
        host: process.env.DB_HOST, // Хост базы данных
        dialect: 'postgres',       // Тип базы данных
        port: process.env.DB_PORT, // Порт базы данных
        logging: false,            // Отключение логов Sequelize
    }
);

// Тест соединения с базой данных
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
})();

module.exports = sequelize;
