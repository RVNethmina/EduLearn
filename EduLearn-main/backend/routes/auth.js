const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    if (!email || !password || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!['student', 'instructor', 'admin'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: 'User already exists' });

    user = new User({ email, password, role });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password, rememberMe } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: rememberMe ? '30d' : '1h'
    });

    res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Social Login Redirect
router.get('/social/:provider', (req, res) => {
  const provider = req.params.provider;
  // Placeholder: Redirect to provider's OAuth URL
  // Replace with actual OAuth URLs (e.g., Google, after setting up client ID/secret)
  res.redirect(`http://localhost:5000/api/auth/social/${provider}/callback`);
});

// Social Login Callback (Placeholder)
router.get('/social/:provider/callback', async (req, res) => {
  const provider = req.params.provider;
  // Implement OAuth token exchange and user creation/login
  res.json({ message: `Social login callback for ${provider} - implement OAuth logic` });
});

module.exports = router;