const express = require('express');
const path = require('path');
const port = 3000;

const server = express();

// // Custom API routes
const postRoute  = require('./src/routes/post');

// Built-in middleware for JSON parsing
server.use(express.json());

// Static files middleware
server.use('/static', express.static(path.join(__dirname, 'static')));





server.get('/api/custom', (req, res) => {
  return res.json({message: "This is the custom message"})
});

server.use(postRoute);



server.listen(port, (err) => {
  if (err) throw err
  console.log(`Runing on port ${port}, dev: ${dev}`)
})
