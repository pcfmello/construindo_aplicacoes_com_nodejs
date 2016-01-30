/**
 * @module  ExpressJS
 * @install $npm install express --save
 * @about   Framework para desenvolvimento web utilizado 
 *          como servidor web e gerenciador de rotas da aplicação.
 * */
var express = require('express');
var app = express();

app.get('/contato', function(req, res) {
	res.status(201);
	res.json({nome: 'Paulo Cesar', email: 'pcfmello@gmail.com', cidade: 'Florianópolis'});
});

app.use(function(request, response, next) {
	var err = new Error('Recurso não encontrado');
	err.status = 404;
	next(err);
});

app.use(function(err, request, response, next) {
	console.log(err.stack);
	response.status(err.status || 500).json({err: err.message});
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Exemplo de aplicação RESTful escutando em http://'.concat(host) + ':'.concat(port));
	console.log('Exemplo de aplicação RESTful escutando em http://%s:%s', host, port);
});