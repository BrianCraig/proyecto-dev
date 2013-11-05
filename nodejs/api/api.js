var express = require('express');
var api = express();
module.exports = api;

api.use(express.bodyParser());

api.use(function(req, res, next){
res.setHeader("Access-Control-Allow-Origin", "*");
next();
});

api.get('/', function (req, res) {
    res.json({"estado":"ok"});
});

api.post('/informacion', function (req, res) {
	if(typeof(req.body.dominio)==="string"){ // responder solamente si esta bien formulado
		
		var dominio = req.body.dominio;
		if(typeof(listaDominios[dominio])==="object"){
			res.json(listaDominios[dominio]);
		}else{
			res.json({});	
		}
    
	}
});

api.use(function(req, res, next){ // en caso final tirar un 404
		res.writeHead(404);
		res.end("404 error");
	});



 /*
  * Objetos de pruebas
  */


var claseSitios = function(objeto){
	this.dominio = objeto.dominio;
	this.titulo = objeto.titulo;
	this.descripcion = objeto.descripcion;
	listaDominios[objeto.dominio] = this;
}

var listaDominios = Object.create(null);

new claseSitios({
	dominio : "clientea.node-js.com.ar",
	titulo : "Ejemplo de un cliente A",
	descripcion : "Con su descripcion en el sitio"
	})
	
new claseSitios({
	dominio : "construccion.node-js.com.ar",
	titulo : "Empresa de construccion de piletas y yacuzzis",
	descripcion : "Nosotros fabricamos las mejores piletas y yacuzzis :D"
	})
