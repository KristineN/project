var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(req, res) {
  res.sendfile('src/index.html');
});

server.listen(8080);