const next = require('next');

// Custom middleware for API routes
function customApiMiddleware(req, res, next) {
  console.log('the Post Middleware called!');
  next();
}


module.exports = { customApiMiddleware };