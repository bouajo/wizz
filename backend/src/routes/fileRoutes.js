const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const upload = require('../middleware/uploadMiddleware');
const { checkJwt, ensureUserExists } = require('../middleware/authMiddleware');
const { debugToken } = require('../middleware/debugMiddleware');
const File = require('../models/file');

router.post(
  '/upload',
  debugToken,
  checkJwt,
  ensureUserExists,
  upload.single('file'),
  async (req, res) => {
    try {
      console.log('Processing file upload for user:', req.user.id);

      const organizationId = req.user.organizationId || uuidv4();

      const file = await File.create({
        fileName: req.file.originalname,
        filePath: req.file.path,
        uploadedBy: req.user.id,
        organizationId,
      });

      console.log('File uploaded successfully:', file.id);
      res.status(201).json({
        message: 'File uploaded successfully',
        file,
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({
        error: 'Internal server error',
        message: error.message,
      });
    }
  }
);

module.exports = router;
