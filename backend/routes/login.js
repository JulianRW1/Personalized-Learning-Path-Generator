// backend/routes/login.js

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (!user) return res.status(400).json(info);

    const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  })(req, res, next);
});

module.exports = router;