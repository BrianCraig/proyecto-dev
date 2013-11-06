Organizaci�n del proyecto
=============

Proyecto "Clon de Wix"

## Decisiones tomadas


> Se separan los __"clientes"__ de los __"visitantes"__.


> > Los __"Clientes"__ acceder�n a _'nuestrodominio.com'_ y manejar�n sus sitios desde ah�. El servidor que manejara a los __"Clientes"__ ser� basado en Apache + PHP + MySQL/MariaDB

> > Los __"Visitantes"__ acceder�n a _'susitio.nuestrodominio.com'_ o _'susitio.com'_, obtendr�n recursos de _'recursos.nuestrodominio.com'_ y _'almacenamiento.nuestrodominio.com'_. El servidor que manejar� estos clientes ser� basado en Node.JS + MySQL/MariaDB

> La Base de datos, ser� la que comparte los registros de los sitios. entre los __"Clientes"__ y los __"Visitantes"__ [Doc en base-de-datos.md](base-de-datos.md) 

> Los __"Temas"__ Para los __"Visitantes"__, tendr�n una estructura b�sica , y responder�n a ciertas clases de CSS [Doc en html.md](html.md). Adem�s de eso tendr�n un arhivo package.json, que dictar� los estilos y scripts que utiliza el __"Tema"__. Un ejemplo de un __"Tema"__ se puede apreciar [aqu�](https://github.com/BrianCraig/proyecto-dev/tree/master/recursos/temas/Simple%20y%20Elegante%20-%20Brian%20Craig)

