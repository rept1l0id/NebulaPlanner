const express = require('express');
const { register, login } = require('../controllers/authController');
const passport = require("../utils/googleAuth");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Запускаем аутентификацию через Google
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback от Google
router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
        const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.redirect(`http://` + process.env.HOST + `/dashboard?token=${token}`); // Редирект с токеном
    }
);


module.exports = router;
