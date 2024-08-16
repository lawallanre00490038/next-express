const { app } = require('../../server');

const getPostById = (req, res) => {
  req.params.id = req.params.id || 1;
  res.json({ message: `Post ${req.params.id}` });
};

module.exports = { getPostById }; // Ensure it's exported as an object