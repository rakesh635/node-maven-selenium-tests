var http = require('http');

http.createServer(function (req, res) {
  res.write(`
	<!doctype html>
	<html lang="en">
	<head>
	  <meta charset="utf-8">
	
	  <title>Hello Buddy!</title>
	  <meta name="description" content="Hello Buddy!">
	</head>
	
	<body>
		Hello Buddy!
	</body>
	</html>
  `);
  res.end();
}).listen(80);