#Edición del sitio - Idea

> __Aviso:__ Este documento no llega más que a ser una idea.

## General

Todo el contenido central de una página en el sitio ( sin incluír el contenido idéntico que se presenta en el total de el sitio ), será creado en el editor. Este manejará una serie de elementos( h1, h2, p, img, "sliders", y algunos mas ). Los cuales se renderizarán de forma lineal. Tendrán opciones de edición básicas (márgenes, relleno, color de fondo, Tipo de fuente, Tamaño de la Fuente, color de la fuente, y algunos mas). Y los textos o cabeceras, tendran opciónes de seleccionar texto y agregarle Cursiva / negrita / subrayado ( usando elementos ```<i>```, ```<b>``` y ```<u>``` respectivamente ).

## "Hijos del articulo"

Los hijos del articulo, serían todas las partes principales que integran al articulo.

## Renderizado

El renderizado finál dara un html como el siguiente.

```
<h1>Titulo de la página</h1>
<h2>Subtitulo</h2>
<div class="slider">#Futuro Codigo del Slider</div>
<p>Un poco de texto por aquí, con algunas <b>negritas</b>,<i>cursivas</i>, y <u>subrayado</u></p>
<h2>Otro subtitulo, tal vez refiriendose a otra seccion</h2>
<p style="margin:20px">Un texto, con unos márgenes especificos</p>
<img src="http://recursos.nuestrodominio.com/imagen.jpg"/>
<p>Mas texto, por que a algunos les gusta escribír</p>
```
###### Se llegan a apreciar 8 "Hijos del articulo" en este ejemplo



Que formarán parte de alguna etiqueta como "article" en [la documentacion HTML](html.md)

## Estilos del tema

El tema tendrá la obligación de que "por defecto", Todas las etiquetas ( como los h1, p y sliders ) Se vean adaptados al estilo sin que el "Cliente" tenga que agregarle un estilo.

Es decir, que aúnque el cliente no sepa o no quiera manejar las herramientas "avanzadas, todo se vea "Lindo" Ponele.

## Interfáz de edición

La interfáz seria una especie de arrastrar y soltar, y poder manipular el orden.

Cuando se haga click en un "Hijo", aparecerían las herramientas avanzadas ( como manejar estilos, y agregar subrayados/cursiva/negrita )
