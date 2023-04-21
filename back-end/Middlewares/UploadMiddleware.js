const validateUserUpload = (req, res, next) => {
    const { id } = req.params;
    const { buffer } = req.file;
  
    // Check if id is a valid ObjectId
    const ObjectId = require('mongoose').Types.ObjectId;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
  
    // Check if file is provided
    if (!buffer || !Buffer.isBuffer(buffer)) {
      return res.status(400).json({ message: 'File is required' });
    }
  
    // Call next middleware if all validations pass
    next();
  };
  
  module.exports = validateUserUpload;
  