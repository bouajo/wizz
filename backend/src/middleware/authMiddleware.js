const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const User = require('../models/user');
const Organization = require('../models/organization'); // Assuming users are tied to organizations

// Middleware to validate JWT and populate req.auth
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
  requestProperty: 'auth', // Sets the parsed token payload in req.auth
});

// Middleware to ensure the user exists in the database
const ensureUserExists = async (req, res, next) => {
  try {
    if (!req.auth || !req.auth.sub) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User authentication is required.',
      });
    }

    // Check if the user exists in the database
    let user = await User.findOne({ where: { auth0Id: req.auth.sub } });

    if (!user) {
      // Assign a default organization for new users (can be updated later by an admin)
      let organization = await Organization.findOne({ where: { name: 'Default' } });

      if (!organization) {
        // Create a default organization if it doesn't exist
        organization = await Organization.create({
          name: 'Default',
          inviteCode: `${Date.now()}-${Math.random().toString(36).substr(2, 8)}`,
        });
      }

      // Add the user to the database if they do not exist
      user = await User.create({
        auth0Id: req.auth.sub,
        email: req.auth.email || `${req.auth.sub}@example.com`, // Default email if not provided
        name: req.auth.name || 'New User', // Default name if not provided
        password: null, // Auth0 handles authentication, no password needed
        organizationId: organization.id, // Assign to the default organization
      });

      console.log('New user created:', user.id);
    }

    req.user = user; // Attach the user to the request object
    next();
  } catch (error) {
    console.error('Error ensuring user exists:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
};

// Middleware to handle JWT validation errors
const handleUnauthorizedError = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    console.error('JWT validation failed:', err);
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid or missing token',
    });
  }
  next(err);
};

module.exports = { checkJwt, ensureUserExists, handleUnauthorizedError };
