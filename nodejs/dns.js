/*
Levanta el proceso de DNS.
Si se cierra, lo reinicia ( el modulo dnsd se ha visto con problemas ultimamente )

Brian Craig
*/
var proceso = 0;
var spawn = require('child_process').spawn; // Spawneador


var alcerrar = function () {
setTimeout(function(){iniciar();},0); // cuando se cierra reiniciamos el proceso
}

var aldatos = function (data) {}

var iniciar=function(){
console.log("DNS Iniciados");
proceso = spawn(process.execPath, ['dns/index.js']);
proceso.stdout.on('data', aldatos)
proceso.stderr.on('data', aldatos)
proceso.on('close', alcerrar);
proceso.on('error', alcerrar);

}

iniciar(); // Iniciar el proceso por primera vez



