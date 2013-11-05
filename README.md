proyecto-dev
============
Proyecto: Clonar WIX

Lenguaje a usar: Python o Ruby

Equipo Front:
*  Kevin Enei
*  Agustín Ortíz
*  Nicolás Castellanos
*  Luis Rojas
*  Marcos Zarate

Equipo Back:
*  Alex Smith(blkmdr en github)
*  Brian craig
*  Sr Pollo (cachusan) ( Marcos Suarez )
*  Yerson Soto
*  José Cancino
*  José Delgado

Organizacion de las carpetas
====================

> apache-www

Contiene los archivos de Apache ( Ruta principal )

> nodejs

Contiene La Aplicacion de NodeJS

> recursos

contiene la carpeta que se mostrará en recursos.dominio

> almacenamiento

contiene la carpeta que se mostrará en almacenamiento.dominio

> sitios

contiene la carpeta que se mostrará en todos los sitios de los usuarios.

> documentacion

Aquí se podran intercambiar y depositar la documentación propia

Como probar el servicio de usuarios ( ver sitios, y probar temas )
=================

## Es importante, saber que la estructura de los sitios, no esta bien definida.

## Por ahora la Repo genera el texto en una estructura básica

## la estructura se ecuentra ( o quizás no ) en documentacion/html.md

__Requisitos__

> haber instalado NodeJS

> haber instalado Mysql

__Requisitos opcionales__

> Es recomendable que tengas a mano, alguna herramienta para manejar mas facilmente las bases de datos. ( si tienes linux te recomiendo MYSQL WorkBench )

Luego, hay dos formas de probar los sitios.

> Abriendo los puertos y apuntando un dominio a tu maquina ( es algo complicado , por ahora no explicare )

> usando el dominio localhost ( o otro de tu preferencia ), modificando el archivo hosts para obtener algunos subdominios apuntando a tu maquina

###Primer Paso###

Asegurate de tener una Database en tu MySQL/MariaDB, con la codificacion automatica de utf8-general-ci, y obviamente de saber el usuario y clave para acceder

Abre el archivo en nodejs/configurar-mysql.js y cambialo con tus configuraciones

en la carpeta de nodejs, ejecuta los siguientes comandos

> npm install

esto instalara los modulos de la App ( express, dnsd y el conector mysql )

> node configurar-mysql.js

esto configurará tu Base de datos, si no esta bien configurado, tirará un error, significa que no has configurado bien nodejs/configurar-mysql.js, modificalo e intenta de nuevo el mismo comando

### Segundo paso ###

Ahora hay que configurar el dominio.

En tal caso que sepas registrar/apuntar tu dominio a tu maquina y abrir los puertos, perfecto.

En otro caso, tendrás que modificar tu archivo hosts ( si ya se medio del año del orto )

en Windows, es el archivo C:\Windows\System32\drivers\etc\hosts

en Linux, /etc/hosts ( requiere privilegios )

agregale las siguientes lineas

> 127.0.0.1 recursos.localhost

> 127.0.0.1 almacenamiento.localhost

> 127.0.0.1 cliente1.localhost

> 127.0.0.1 cliente2.localhost

Los cliente1 y cliente2 son para probar subdominios, si quieres puedes agregar otros como

> 127.0.0.1 wicks

y será otro cliente.

### tercer paso ###

Ahora ya se puede abrir la App.

Ve a la carpeta nodejs, y ejecuta

> node ./

( si estas en linux nescesitas su )

y ahora, puedes probar el usuario de prueba, en http://127.0.0.1/













