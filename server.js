const express = require('express');
const next = require('next');

const dev = "development";
const app = next({ dev });
const handle = app.getRequestHandler();

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

  const port = 5173; // Port number to run the server on
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Express server started on https://localhost:${port}`);
  });
});
