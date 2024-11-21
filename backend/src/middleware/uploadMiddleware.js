const multer = require('multer');
const path = require('path');

// Configure file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Multer upload configuration
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const isValidType = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const isValidMimeType = allowedTypes.test(file.mimetype);

    if (isValidType && isValidMimeType) {
      cb(null, true);
    } else {
      cb(new Error('Only images and PDFs are allowed.'));
    }
  },
});

module.exports = upload;
