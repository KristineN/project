var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	return next();
	)};

app.get('/', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.sendfile('src/index.html');
});

server.listen(3000);