var httpService = (function() {
	var http = require('http');
	return function() {
		return http;
	};
})();

var fileSystem = (function() {
	var fs = require('fs');
	return function() {
		return fs;
	};
})();

httpService().get('http://loripsum.net/api/1', function(res) {

	var texto = '';

	res.on('data', function(data) {
		texto += data;
		console.log('Texto retornado: ' + data);		
	});

	res.on('end', function() {
		fileSystem().writeFile('lorem.html', texto, function() {
			console.log('Arquivo pronto! ;)');
		});		
	});

}).on('error', function(e) {
	console.log('Houve um erro: '.concat(e.message));
});