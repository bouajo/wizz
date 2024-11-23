const { Permission } = require('../models');

/**
 * Middleware to check user permissions for folder access.
 * @param {string} requiredAccess - Required access level ('read', 'write', 'admin')
 * @returns {Function} Express middleware function
 */
const requirePermission = (requiredAccess) => async (req, res, next) => {
  try {
    const folderId = req.params.folderId || req.body.folderId;
    const userId = req.auth?.sub; // Use req.auth

    if (!userId) {
      console.error('User ID is missing in req.auth.');
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User authentication is required.',
      });
    }

    console.log('Checking permissions:', { userId, folderId, requiredAccess });

    // Check if permission exists for this user and folder
    const permission = await Permission.findOne({
      where: { userId, folderId, accessLevel: requiredAccess },
    });

    if (!permission) {
      console.error('Permission denied:', { userId, folderId, requiredAccess });
      return res.status(403).json({
        error: 'Access denied',
        message: `You do not have ${requiredAccess} access to this folder.`,
      });
    }

    console.log('Permission granted:', { userId, folderId, requiredAccess });
    next();
  } catch (error) {
    console.error('Error checking permissions:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
};

module.exports = { requirePermission };
