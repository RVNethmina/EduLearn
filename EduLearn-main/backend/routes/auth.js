const express = require('express');
const User = require('../models/User');
const nodemailer = require('nodemailer');
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

//froget password
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

// Forgot Password
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({ message: 'If an account exists, a reset link will be sent.' }); // Avoid leaking user existence
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const resetLink = `http://localhost:5173/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service (e.g., Gmail)
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS, // Use environment variable
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      text: `Click this link to reset your password: ${resetLink}`,
    });

    res.status(200).json({ message: 'If an account exists, a reset link has been sent.' });
  } catch (error) {
    console.error('Forgot Password Error:', error);
    res.status(500).json({ error: 'Server error during password reset request.' });
  }
});
module.exports = router;