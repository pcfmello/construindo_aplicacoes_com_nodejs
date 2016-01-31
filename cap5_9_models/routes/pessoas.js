var express = require('express');
var router = express.Router();

var PessoaController = require('../controllers/pessoaController');

router.get('/', PessoaController.getAll);
router.get('/:_id', PessoaController.getById);
router.post('/', PessoaController.create);
router.put('/:_id', PessoaController.update);
router.delete('/:_id', PessoaController.remove);

module.exports = router;