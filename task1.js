var http = require('http');
var fs = require('fs');

http.createServer(req, res) {
  if (req.url === '/about') {
    console.log(req);
  } else if (req.url === '/stop') {
    process.exit();
  } else if (req.url === '/contact') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(index);
  } else {
    console.log(req.url);
    console.log(req.method);
    res.write('Hello World');
  }
  res.end();
}.listen(3000, function() {
  console.log(' localhost:3000');
});