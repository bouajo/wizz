const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const upload = require('../middleware/uploadMiddleware');
const { checkJwt, ensureUserExists } = require('../middleware/authMiddleware');
const { debugToken } = require('../middleware/debugMiddleware');
const File = require('../models/file');
const Organization = require('../models/organization');

// Route for uploading multiple files
router.post(
  '/upload',
  debugToken,
  checkJwt,
  ensureUserExists,
  upload.array('files', 10), // Expect multiple files with the key "files"
  async (req, res) => {
    try {
      console.log('Processing file uploads for user:', req.user.id);

      let organizationId = req.user.organizationId;

      // Create a default organization if none exists
      if (!organizationId) {
        const defaultOrganization = await Organization.create({
          id: uuidv4(),
          name: `Default Organization for ${req.user.name || 'User'}`,
        });

        organizationId = defaultOrganization.id;

        // Optionally update the user with the new organizationId
        await req.user.update({ organizationId });
      }

      // Save each uploaded file to the database
      const uploadedFiles = [];
      for (const file of req.files) {
        const createdFile = await File.create({
          fileName: file.originalname,
          filePath: file.path,
          uploadedBy: req.user.id,
          organizationId,
        });
        uploadedFiles.push(createdFile);
      }

      console.log('Files uploaded successfully:', uploadedFiles.map(f => f.id));
      res.status(201).json({
        message: 'Files uploaded successfully',
        files: uploadedFiles,
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

// Route for fetching files
router.get('/', async (req, res) => {
  try {
    const { userId, organizationId } = req.query;

    if (!userId && !organizationId) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'You must provide either a userId or an organizationId',
      });
    }

    const whereClause = {};
    if (userId) whereClause.uploadedBy = userId;
    if (organizationId) whereClause.organizationId = organizationId;

    const files = await File.findAll({ where: whereClause });

    return res.status(200).json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

// Route for deleting a file
router.delete('/:fileId', checkJwt, ensureUserExists, async (req, res) => {
  try {
    const { fileId } = req.params;

    if (!fileId) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'File ID is required',
      });
    }

    // Attempt to delete the file
    const deletedCount = await File.destroy({ where: { id: fileId } });

    if (deletedCount === 0) {
      return res.status(404).json({
        error: 'Not Found',
        message: 'File not found or already deleted',
      });
    }

    return res.status(200).json({
      message: 'File deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting file:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

// Route for updating a file's metadata
router.put('/:fileId', checkJwt, ensureUserExists, async (req, res) => {
  try {
    const { fileId } = req.params;
    const { fileName } = req.body;

    if (!fileId || !fileName) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'File ID and new file name are required',
      });
    }

    // Find the file to update
    const file = await File.findOne({ where: { id: fileId } });

    if (!file) {
      return res.status(404).json({
        error: 'Not Found',
        message: 'File not found',
      });
    }

    // Update the file name
    file.fileName = fileName;
    await file.save();

    return res.status(200).json({
      message: 'File updated successfully',
      file,
    });
  } catch (error) {
    console.error('Error updating file:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

module.exports = router;
