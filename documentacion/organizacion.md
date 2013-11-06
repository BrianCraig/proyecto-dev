Organización del proyecto
=============

Proyecto "Clon de Wix"

## Decisiones tomadas


> Se separan los __"clientes"__ de los __"visitantes"__.


> > Los __"Clientes"__ accederán a _'nuestrodominio.com'_ y manejarán sus sitios desde ahí. El servidor que manejara a los __"Clientes"__ será basado en Apache + PHP + MySQL/MariaDB

> > Los __"Visitantes"__ accederán a _'susitio.nuestrodominio.com'_ o _'susitio.com'_, obtendrán recursos de _'recursos.nuestrodominio.com'_ y _'almacenamiento.nuestrodominio.com'_. El servidor que manejará estos clientes será basado en Node.JS + MySQL/MariaDB

> La Base de datos, será la que comparte los registros de los sitios. entre los __"Clientes"__ y los __"Visitantes"__ [Doc en base-de-datos.md](base-de-datos.md) 

> Los __"Temas"__ Para los __"Visitantes"__, tendrán una estructura básica , y responderán a ciertas clases de CSS [Doc en html.md](html.md). Además de eso tendrán un arhivo package.json, que dictará los estilos y scripts que utiliza el __"Tema"__. Un ejemplo de un __"Tema"__ se puede apreciar [aquí](https://github.com/BrianCraig/proyecto-dev/tree/master/recursos/temas/Simple%20y%20Elegante%20-%20Brian%20Craig)

