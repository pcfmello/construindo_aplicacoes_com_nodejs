var http = require('http');

http.get('http://loripsum.net/api/1', function(res) {

	res.on('data', function(data) {
		console.log('Texto retornado: ' + data);		
	});

	res.on('end', function() {
		console.log('Fim do texto');
	});

}).on('error', function(e) {
	console.log('Houve um erro: '.concat(e.message));
});