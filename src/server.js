var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(req, rex) {
  res.sendfile('src/index.html');
});

server.listen(3000);