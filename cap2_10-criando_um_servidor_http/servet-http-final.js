var http = require('http');
var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});

	if(request.url === '/') {
		response.end('Hello World!');	
	} else if(request.url === '/contato') {
		response.end('pcfmello@gmail.com');
	} else {
		response.end('Não encontrado!');
	}
	
});

server.listen(1337, '127.0.0.1');
console.log('Servidor rodando em http://127.0.0.1:1337/'); 