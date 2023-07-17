const express = require('express');
const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
const dev='development'
const app = next({ dev });
const handle = app.getRequestHandler();

console.log(process.env.NODE_ENV)
console.log(process.env.PORT)

app.prepare().then(() => {
  const server = express();

  // Define your routes here
  server.get('/example', (req, res) => {
    return app.render(req, res, '/example-page', req.query);
  });

  // Default route handler for Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT||3000; // Port number to run the server on
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Express server started on http://localhost:${port}`);
  });
});
