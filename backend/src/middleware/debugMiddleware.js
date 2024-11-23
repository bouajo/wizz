const debugToken = (req, res, next) => {
    console.log('Authorization Header:', req.headers.authorization);
    next();
  };
  
  module.exports = { debugToken };
  