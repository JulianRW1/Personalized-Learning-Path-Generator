// backend/routes/signup.js

const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { password, email, firstname, lastname } = req.body;
    const newUser = new User({ username: email, password, email, firstname, lastname });
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;