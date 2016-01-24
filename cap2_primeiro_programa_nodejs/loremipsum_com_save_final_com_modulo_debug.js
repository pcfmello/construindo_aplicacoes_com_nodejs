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

 //MODULO DEBUG
var debug = (function(texto) {
	var debug = require('debug')(appName());
	return function(texto) {
		return debug(texto);
	};
})();

//MODULO HTTP
var http = (function() {
	var http = require('http');
	return function() {
		return http;
	};
})();

//MODULO FS
var fs = (function() {
	var fs = require('fs');
	return function() {
		return fs;
	};
})();

//RETORNA A MENSAGEM DE INSTRUÇÃO DA CHAMADA DO PROGRAMA
var msgUsoPrograma = (function() {
	var MSG = 'USO: node loremipsum_com_save_final.js {nomeArquivo} {quantidadeParagrafos}';
	return function() {
		return MSG;
	};
})();

//RETORNA O NOME DO ARQUIVO, DIGITADO NO ARGUMENTO 3 DA CHAMADA DO PROGRAMA
var buscaNomeArquivo = (function() {
	var nomeArquivo = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi, '');
	return function() {
		return nomeArquivo;
	};
})();

//RETORNA O NOME DO ARQUIVO, DIGITADO NO ARGUMENTO 4 DA CHAMADA DO PROGRAMA
var buscaQuantidadeParagrafos = (function() {
	var qtdeParagrafos = String(process.argv[3] || '').replace(/[^a-z0-9\.]/gi, '');
	return function(){
		return qtdeParagrafos;
	};
})();

//CRIA UM ARQUIVO DE ACORDO COM O CONTEÚDO PASSADO POR PARÂMETRO
var criaArquivo = function(nomeArquivo, texto) {
	fs().writeFile(nomeArquivo, texto, function() {
		console.log('');
		console.log('Criado o arquivo: ' + nomeArquivo);
		console.log('');
	});
};

//CHAMA A API LORIPSUM PARA RECUPERAR OS DADOS 
var getLoripsum = function() {
	http().get('http://loripsum.net/api/' + buscaQuantidadeParagrafos(), function(res) {
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

debug('Sistema carregado. Executando...');

if(!buscaNomeArquivo() || !buscaQuantidadeParagrafos()) {
	console.log(msgUsoPrograma());
} else {
	getLoripsum();
}