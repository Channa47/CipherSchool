const validateLoginInput = (req, res, next) => {
    const { email, password } = req.body;
  
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
  
    // Check if password is valid
    if (typeof password !== 'string' || password.length < 6) {
      return res.status(400).json({ message: 'Password must be a string of at least 6 characters' });
    }
  
    // Call next middleware if all validations pass
    next();
  };
  
  module.exports = validateLoginInput;
  