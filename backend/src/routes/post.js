const  {getPostById}  = require('../controllers/post.js');
const express = require('express');
const { customApiMiddleware } = require('../middlewares/post.js');

const router = express.Router();

router.get('/api/custom/post/:id', customApiMiddleware, getPostById);

module.exports = router;