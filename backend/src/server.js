const http = require('http');
const app = require('./app'); // Подключение основного приложения
require('dotenv').config(); // Подгружаем переменные окружения
const sequelize = require('./utils/database'); // Подключение к базе данных

// Установка порта из переменных окружения или по умолчанию
const PORT = process.env.PORT || 4000;

// Создаем HTTP сервер
const server = http.createServer(app);

// Синхронизация базы данных и запуск сервера
(async () => {
    try {
        await sequelize.sync(); // Синхронизация моделей с базой данных
        console.log('Database synchronized successfully.');

        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error.message);
    }
})();
