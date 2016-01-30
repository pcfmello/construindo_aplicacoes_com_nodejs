var express = require('express');
var router = express.Router();

/* -- ROTAS -- */
//Retorna o contato
router.get('/', function(request, response) {
	response.status(201);
	response.json({nome: 'Paulo Cesar', email: 'pcfmello@gmail.com', cidade: 'Florianópolis'});
});

//Retorna o contato
router.get('/claudinha', function(request, response) {
	response.status(201);
	response.json({nome: 'Claudia Rodrigues', email: 'claudiarodrigues2112@gmail.com', cidade: 'Imbituba'});
});

module.exports = router;