var express = require('express');
var app = express();
var methodOverride = require('method-override');

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/contato', function(req, res) {
	res.status(200);
	if(req.accepts('text')) {
		res.write('Nome: Paulo Cesar\n');
		res.write('E-mail: pcfmello@gmail.com');
		res.end();
	} else {
		res.json({nome: 'Paulo Cesar', email: 'pcfmello@gmail.com', cidade: 'Florianópolis'});
	}
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Exemplo de aplicação RESTful escutando em http://%s:%s', host, port);
})