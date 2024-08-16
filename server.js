const express = require('express');
const next = require('next');
const path = require('path');
const port = 3000;

const server = express();
const dev = process.env.NODE_ENV !== 'production'

// creating the app either in production or dev mode 
const app = next({ dev })
const handle = app.getRequestHandler()

// Built-in middleware for JSON parsing
server.use(express.json());

// Static files middleware
server.use('/static', express.static(path.join(__dirname, 'static')));

module.exports = { app }; 



// running the app, async operation 
app.prepare().then(() => {
  const server = express()
  
  server.get('/api/custom', (req, res) => {
    return res.json({message: "This is the custom message"})
  });

  // // Custom API routes
  const postRoute  = require('./src/routes/post');
  server.use(postRoute);

  
  // redirecting all requests to Next.js 
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Runing on port ${port}, dev: ${dev}`)
  })
})