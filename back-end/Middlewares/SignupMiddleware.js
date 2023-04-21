
const SignUpInputValidator = (req, res, next) => {
    const { first_name, last_name, email, phone, password } = req.body;
    if (!first_name || !last_name || !email || !phone || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    if (typeof first_name !== 'string' || typeof last_name !== 'string' || typeof email !== 'string' || typeof phone !== 'number' || typeof password !== 'string') {
      return res.status(400).json({ message: 'Invalid field type' });
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
  
    // Phone number validation
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Invalid phone number format' });
    }
  
    // Password validation
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
  
    next();
  };

module.exports = SignUpInputValidator;
