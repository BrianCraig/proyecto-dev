var express = require('express');

var sitios = express();

var config = require('./configuracion.js'); 

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : config['mysql-host'],
  user     : config['mysql-usuario'],
  password : config['mysql-clave'],
  database : config['mysql-db']
});

connection.connect();

connection.query('SELECT * from usuarios where dominio = \'grafico.node-js.com.ar\'', function(err, rows, fields) {
  if (err) throw err;

  console.log(rows);
  //console.log(fields);
});

//connection.end();


sitios.use(express.static(__dirname + '/../sitios'));

sitios.use(express.bodyParser());

sitios.post('/informacion', function (req, res) {
	if(typeof(req.body.dominio)==="string"){ 
		var dominio = req.body.dominio;
		connection.query('SELECT * from usuarios where dominio = \''+dominio+'\'',function(err,rows){
			if (err) throw err;
			if (rows.length !== 0){
					rows[0].dominioGeneral = config.dominio;
					res.json(rows[0])
				}
			else
				res.json({});
		});
    
	}
});
sitios.post('/vista', function (req, res) {
	if(typeof(req.body.id)==="string"){ 
		var id = req.body.id;
		connection.query('SELECT * from vistas where id = '+id+'',function(err,rows){
			if (err) throw err;
			if (rows.length !== 0){
					res.json(rows[0])
				}
			else
				res.json({});
		});
    
	}
});


module.exports = sitios
