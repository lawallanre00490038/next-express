const { app } = require('../../server');

const getPostById = (req, res) => {
  const actualPage = '/post';
  const queryParams = { id: req.params.id };
  app.render(req, res, actualPage, queryParams);
};

module.exports = { getPostById }; // Ensure it's exported as an object