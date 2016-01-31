var express = require('express');
var router = express.Router();

/* -- ROTAS -- */
//Retorna o contato
router.get('/', function(request, response) {
	response.status(201);
	response.json({nome: 'Paulo Cesar', email: 'pcfmello@gmail.com', cidade: 'Florianópolis'});
});

//pessoas
router.use('/pessoas', require('./pessoas'));

module.exports = router;