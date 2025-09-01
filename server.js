const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/TuFinanza_PWA_Complete.html' : req.url;
  filePath = path.join(__dirname, filePath);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Check if file exists
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>');
      } else {
        // Server error
        res.writeHead(500);
        res.end('Server Error: ' + err.code);
      }
    } else {
      // Success - determine content type
      let contentType = 'text/html';
      const extname = path.extname(filePath);
      
      switch (extname) {
        case '.js':
          contentType = 'application/javascript';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.json':
          contentType = 'application/json';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
          contentType = 'image/jpg';
          break;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 TuFinanza PWA server running on port ${PORT}`);
  console.log(`📱 Access at: http://localhost:${PORT}`);
});