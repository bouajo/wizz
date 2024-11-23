const uploadFileHandler = (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      // Log uploaded file details
      console.log(`File uploaded: ${req.file.originalname}`);
      console.log(`Uploaded by: ${req.user.sub}`); // Assuming `req.user` contains the decoded JWT payload
  
      res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file,
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({
        error: 'Internal server error',
        message: error.message,
      });
    }
  };
  
  module.exports = { uploadFileHandler };
  