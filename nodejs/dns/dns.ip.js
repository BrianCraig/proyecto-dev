/*
Modulo para obtener una IP desde internet
exporta la funcion que inicia la busqueda de IP
*/

var ip = '186.23.145.50';
var http = require('http');
var dns = require('./index.js');

module.exports = function () {
    http.get("http://wtfismyip.com/json", function (res) {
        res.on("data", function (chunk) {
            try {
                var a = JSON.parse(chunk);
                dns.ip = a["YourFuckingIPAddress"];
                console.log('IP actualizada: ' + dns.ip);
		ip = a["YourFuckingIPAddress"];
            } catch (e) {};
        });
    }).on('error', function () {});
};
