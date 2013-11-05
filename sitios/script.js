var sitio;
var tema;
$(function () {
    $.ajax({
        type: "POST",
        url: "/informacion",
        data: {
            dominio: window.location.hostname
        }
    })
        .done(function (msg) {
            if (msg.dominio) {
				sitio = msg; // guardamos la info
				
				// Crear El titulo
                $('body').append('<header><h1>' + msg.titulo + '</h1></header>');
                var menu = JSON.parse(msg.menu);
                
                // Crear El menu
                $('body').append('<menu><ul></ul></menu>');
                var menuHTML = $('menu ul');
                for(x in menu){
					var el = menuHTML.append('<a data-id="'+menu[x][2]+'" href="/#!'+menu[x][1]+'"><li>'+menu[x][0]+'</li></a>');
				}
                
                //Crear el articulo
                $('body').append('<article></article>');
                
                //Crear el footer
                $('body').append('<footer><p>'+msg.footer+'</p></footer>');
                
                //Aplicamos
                aplicarTema(msg.tema);
                aplicarContenido(msg['home-id']);
               
                
            } else
                $('body').append('<h1>' + window.location.hostname + ' no existe en la base de datos</h1>');
        });

});


var aplicarTema = function(nombre){
	var urlRepo = 'http://recursos.'+sitio.dominioGeneral + "/temas/"+nombre+"/"
	var urlPackage = urlRepo + "package.json";
$.get( urlPackage, function( data ) {
  tema = data;
  
  //Agregar estilos
  for(x in tema.estilos){
	  url = tema.estilos[x];
	  if(url.substr(0,7)!=="http://")url = urlRepo + url;
	  $('head').append('<link href="'+url+'" rel="stylesheet" type="text/css" />');
  }
  
  //Agregar scripts
  for(x in tema.scripts){
	  url = tema.scripts[x];
	  if(url.substr(0,7)!=="http://")url = urlRepo + url;
	  $('head').append('<script src="'+url+'"></script>');
  }
  
  
}, "json" )
.fail(function(){
	alert('no se encontro el estilo')
	})
}

var aplicarContenido = function(id){
$.ajax({
        type: "POST",
        url: "/vista",
        data: {
            id: id
        }
    })
        .done(function (msg) {
			if(msg.id){
				$('article').html(msg.datos);
			}else
			alert('no se pudo cargar la vista id:'+id+' desde la BD');
		});

}
