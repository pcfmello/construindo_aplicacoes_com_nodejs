var PessoaController = function(){};

PessoaController.prototype.getAll = function(request, response, next) {
	response.send('busca todas as pessoas');
};

PessoaController.prototype.getById = function(request, response, next) {
	response.send('busca uma pessoa pelo id');
};

PessoaController.prototype.create = function(request, response, next) {
	response.send('cria uma pessoa');
};

PessoaController.prototype.update = function(request, response, next) {
	response.send('atualiza uma pessoa pelo id');
};

PessoaController.prototype.remove = function(request, response, next) {
	response.send('remove uma pessoa pelo id');
};

module.exports = new PessoaController();