/**
 * @module  ExpressJS
 * @install $npm install express --save
 * @about   Framework para desenvolvimento web utilizado 
 *          como servidor web e gerenciador de rotas da aplicação.
 * */
var express = require('express');

/**
 * @module  Method Override
 * @install $npm install method-override --save
 * @about   Faz a aplicação entender outros verbos além de GET e POST.
 * */
var methodOverride = require('method-override');

/**
 * @module  Body Parser
 * @install $ npm install body-parser --save
 * @about   Módulo utilizado para que o servidor entenda os formatos
 *          query string e JSON das requisições, que por padrão, 
 *          só entende texto puro.
 * */
var bodyParser = require('body-parser');

var app = express();
 

 /* -- SERVER CONFIG inicio -- */
//Formas que a aplicação os verbos além de GET e POST
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method')); //Forma query string

//Configura o servidor para trabalhar com a API REST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Middleware para "Não servir o arquivo favicon.ico"
app.use(function(request, response, next) {
	if(request.url === '/favicon.ico') {		
		response.writeHead(200, {'Content-Type': 'image/x-icon'});
		response.end();
	} else {
		next();
	}
});
/* -- SERVER CONFIG final -- */


/* -- ROUTER inicio -- */
//Rota para '/'
app.use('/', require('./routes'));/*
/* -- ROUTER final -- */


/* -- ERROR HANDLING inicio -- */
//Erro em caso de página não encontrada
app.use(function(request, response, next) {
	var err = new Error('Recurso não encontrado');
	err.status = 404;
	next(err);
});

//Executado quando um erro for gerado na aplicação
app.use(function(err, request, response, next) {
	console.log(err.stack);
	response.status(err.status || 500).json({err: err.message});
});
/* -- ERROR HANDLING final -- */


/* -- SERVER LISTENER inicio -- */
module.exports = app;
/* -- SERVER LISTENER final -- */