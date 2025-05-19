const requireAuth = (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next(); // ✅ Authenticated
    } else {
      return res.status(401).json({ message: 'Unauthorized: Please log in.' });
    }
  };
  
  module.exports = requireAuth;
  