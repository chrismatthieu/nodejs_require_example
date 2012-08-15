var http = require('http');
var test = require('./test.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello ' + test.opt.message);
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
