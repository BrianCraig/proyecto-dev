/*
Aca se definen quien maneja cada ruta.

Brian Craig
*/

var config = require('./configuracion.js'); // obtenemos la configuracion

var express = require('express');

var crearSitioEstatico = function(ruta){
	var sitio = express();
	
	sitio.use(function(req,res,next){res.setHeader("Access-Control-Allow-Origin","*");next();})
	
	sitio.use(express.static(__dirname + ruta)); 
	
	sitio.use(function(req, res, next){ // en caso de no encontrarse el archivo tirar un 404
		res.writeHead(404);
		res.end("404 error");
	});
	return sitio;
}

var sitios = require('./sitios.js');

//var api = require('./api/api.js'); // el manejador de la API, se carga en api.nuestrodominio.com



express()
    .use(express.vhost(config.dominio, crearSitioEstatico('/../home'))) // usar la carpeta home, para nuestrodominio.com
    .use(express.vhost('recursos.'+config.dominio, crearSitioEstatico('/../recursos'))) // usar la carpeta recursos, para recursos.nuestrodominio.com
  //  .use(express.vhost('api.'+config.dominio, api)) // usar el subdominio api, con el manejador en nodejs/api/api.js
    .use(express.vhost('*', sitios)) // para todo lo demás, es un posible sitio, usar el manejador sitio en nodejs/sitios.js
    .listen(80)
