require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/db');
const fileRoutes = require('./routes/fileRoutes');
const userRoutes = require('./routes/userRoutes');
const { checkJwt, handleUnauthorizedError } = require('./middleware/authMiddleware');
const { debugToken } = require('./middleware/debugMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(debugToken); // Log tokens

// Routes
app.use('/api/files', fileRoutes); // Secure files routes
app.use('/api/users', checkJwt, userRoutes); // Secure user routes

// Error handling for JWT errors
app.use(handleUnauthorizedError);

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message || 'An unexpected error occurred',
  });
});

// Start server
const startServer = async () => {
  try {
    // Database connection
    await sequelize.authenticate();
    console.log('Database connection successful.');

    // Sync models
    await sequelize.sync({ alter: true });
    console.log('Database models synchronized.');

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
  }
};

startServer();
