const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
require('./config/passport'); // your Google OAuth strategy

const app = express();

// ✅ CORS config — allow frontend access with credentials
app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true               // allow cookies from frontend
}));

// ✅ Parse JSON
app.use(express.json());

// ✅ Session config for Passport & OAuth
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false, // don't save empty sessions
  cookie: {
    httpOnly: true,          // protect from XSS
    secure: false,           // set to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));

// ✅ Initialize passport + sessions
app.use(passport.initialize());
app.use(passport.session());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use('/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
