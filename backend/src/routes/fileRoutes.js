const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadmiddleware');
const checkJwt = require('../middleware/authMiddleware');
const File = require('../models/file');
const User = require('../models/user');

// File upload endpoint
router.post('/upload', checkJwt, upload.single('file'), async (req, res) => {
  try {
    const auth0UserId = req.user.sub;
    const user = await User.findOne({ where: { auth0Id: auth0UserId } });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Save file metadata
    const file = await File.create({
      fileName: req.file.originalname,
      filePath: req.file.path,
      uploadedBy: user.id,
      organizationId: user.organizationId,
    });

    res.status(201).json({ message: 'File uploaded successfully.', file });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all files for a user's organization
router.get('/files', async (req, res) => {
  try {
    const { userId } = req.body;

    // Verify the user
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Fetch files belonging to the user's organization
    const files = await File.findAll({ where: { organizationId: user.organizationId } });
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
