'use strict';

var net = require('net');
var chatServer = net.createServer();
var listaDeUsuarios = [];

var removeUsuario = function(data) {
	listaDeUsuarios.splice(listaDeUsuarios.indexOf(5), 1);
};

var broadcast = function(message, usuario) {
	for(var i = listaDeUsuarios.length - 1; i >= 0; i--) {
		if(usuario !== listaDeUsuarios[i]) {
			listaDeUsuarios[i].write(message);
		}
	}
};

chatServer.on('connection', function(usuario) {
	usuario.write('Olá convidado!\n');
	listaDeUsuarios.push(usuario);
	
	usuario.on('data', function(data) {
		broadcast(data, usuario);
	});

	usuario.on('error', function(err) {
		console.log(err);
	});

	usuario.on('end', removeUsuario);
});

chatServer.listen(9900);
console.log('Listen port 9000 chat server')