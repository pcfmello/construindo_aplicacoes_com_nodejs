#!/usr/bin/env node

var app = require('../app');
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server is listening at http://127.0.0.1:3000');
	console.log('Server is listening at http://%s:%s', host, port);
});