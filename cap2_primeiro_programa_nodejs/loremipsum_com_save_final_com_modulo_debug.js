/**
 * loremipsum_com_save_final.js
 *
 * Faz uma requisição na API 'http://loripsum.net/api/'
 * e grava um arquivo com o nome e a quantidade de parágrafos especificados.
 *
 * Todas as variáveis estão utilizando Closures e IIFE
 *
 **/

 //NOME DA APP
 var appName = (function() { 	
 	var APP_NAME = 'construindo_aplicacoes_com_nodejs';
 	return function() {
 		return APP_NAME;
 	};
 })();

//MÓDULO DEBUG
var debug = require('debug')(appName());

//MODULO HTTP
var http = require('http');

//MODULO FS
var fs = require('fs');

debug('CARREGANDO FUNÇÕES DA APPLICAÇÃO '.concat(appName()));

//RETORNA A MENSAGEM DE INSTRUÇÃO DA CHAMADA DO PROGRAMA
var msgUsoPrograma = (function() {
	var MSG = 'USO: node loremipsum_com_save_final.js {nomeArquivo} {quantidadeParagrafos}';
	return function() {
		debug('--- Função MSGUSOPROGRAMA...');
		return MSG;
	};
})();

//RETORNA O NOME DO ARQUIVO, DIGITADO NO ARGUMENTO 3 DA CHAMADA DO PROGRAMA
var buscaNomeArquivo = (function() {
	var nomeArquivo = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi, '');
	return function() {
		debug('--- Função BUSCANOMEARQUIVO...');
		return nomeArquivo;
	};
})();

//RETORNA O NOME DO ARQUIVO, DIGITADO NO ARGUMENTO 4 DA CHAMADA DO PROGRAMA
var buscaQuantidadeParagrafos = (function() {
	var qtdeParagrafos = String(process.argv[3] || '').replace(/[^a-z0-9\.]/gi, '');
	return function(){
		debug('--- Função BUSCAQUANTIDADEPARAGRAFOS...');
		return qtdeParagrafos;
	};
})();

//CRIA UM ARQUIVO DE ACORDO COM O CONTEÚDO PASSADO POR PARÂMETRO
var criaArquivo = function(nomeArquivo, texto) {
	debug('--- Função CRIAARQUIVO...');
	fs.writeFile(nomeArquivo, texto, function() {
		console.log('');
		console.log('Criado o arquivo: ' + nomeArquivo);
		console.log('');
	});
};

//CHAMA A API LORIPSUM PARA RECUPERAR OS DADOS 
var getLoripsum = function() {
	debug('--- Função GETLORIPSUM...');
	http.get('http://loripsum.net/api/' + buscaQuantidadeParagrafos(), function(res) {
		var texto = '';
		res.on('data', function(data) {
			texto += data;		
		});
		res.on('end', function() {
			criaArquivo(buscaNomeArquivo(), texto);
		});
	}).on('error', function(e) {
		console.log('');
		console.log('Houve um erro ao chamar a API Loripsum: '.concat(e.message) + '');
		console.log('');
	});
};

debug('SISTEMA CARREGADO. EXECUTANDO...');

if(!buscaNomeArquivo() || !buscaQuantidadeParagrafos()) {
	console.log(msgUsoPrograma());
} else {
	getLoripsum();
}

debug('FIM DA EXECUÇÃO DO SISTEMA...');