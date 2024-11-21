require('dotenv').config();
const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const { auth } = require('express-openid-connect');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration for OpenID Connect
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET || 'default_secret',
  baseURL: `http://localhost:${PORT}`,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`
};

// Attach the auth router to your application
app.use(auth(config));

// Middleware
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Routes
const fileRoutes = require('./routes/fileRoutes');
app.use('/api/files', fileRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

const startServer = async () => {
  await connectDB(); // Connect to the database
  await sequelize.sync({ force: true }); // Sync models with the database

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
