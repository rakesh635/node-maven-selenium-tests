var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello Buddy!');
  res.end();
}).listen(80);