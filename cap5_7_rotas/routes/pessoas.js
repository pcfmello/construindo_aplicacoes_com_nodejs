var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
	response.send('busca todas as pessoas');
});

router.get('/:_id', function(request, response) {
	response.send('busca uma pesso pelo id');
});

router.post('/', function(request, response) {
	response.send('cria uma nova pessoa');
});

router.put('/:_id', function(request, response) {
	response.send('altera uma pessoa');
});

router.delete('/:_id', function(request, response) {
	response.send('deleta uma pessoa');
});

module.exports = router;