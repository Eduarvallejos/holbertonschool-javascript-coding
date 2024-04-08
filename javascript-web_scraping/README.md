# JavaScript - Web Scraping

## Descripción

JavaScript - Web Scraping es un proyecto que se centra en la automatización de la extracción de datos de sitios web utilizando JavaScript. Esta técnica es útil para obtener información estructurada de páginas web de manera programática, lo que puede ser especialmente útil para la recopilación de datos, análisis de mercado y otros fines relacionados.

## Instalación

Para utilizar las herramientas necesarias para el web scraping en JavaScript, sigue estos pasos:

1. **Instalar Node.js:** Si no tienes instalado ``Node.js`` en tu sistema, puedes hacerlo utilizando el siguiente comando:

```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```
Se usa esta version especifica solo para este repositorio

2. **Instalar el semistandard:** El ``semistandard`` es una guía de estilo para JavaScript. Puedes instalarlo globalmente utilizando npm:

```bash
$ sudo npm install semistandard --global
```

3. **Instalar el módulo request:** Aunque el módulo ``request`` ha sido descontinuado, sigue siendo una herramienta útil para el web scraping en JavaScript. Puedes instalarlo globalmente utilizando npm:

```bash
$ sudo npm install request --global
$ export NODE_PATH=/usr/lib/node_modules
```

## Ejemplo de Uso:

```javascript
const request = require('request');
const cheerio = require('cheerio');

const url = 'https://example.com';

request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(body);
        $('h2').each((index, element) => {
            console.log($(element).text());
        });
    } else {
        console.log('Error:', error);
    }
});
```
En este ejemplo, se utiliza la biblioteca ``request`` para realizar una solicitud HTTP a la URL especificada. Una vez que se obtiene la respuesta, el cuerpo de la página se pasa a ``cheerio`` para analizar y manipular el DOM. Luego, se seleccionan todos los elementos `<h2>` y se imprime su texto en la consola.

## Tareas

El repositorio incluye una serie de tareas que te ayudarán a familiarizarte con el web scraping en JavaScript. Cada tarea aborda un aspecto diferente del proceso de scraping y te proporciona una práctica valiosa para desarrollar tus habilidades.

0. **Readme:** Escribe un script que lea y imprima el contenido de un archivo.
1. **Write me:** Escribe un script que escriba una cadena en un archivo.
2. **Status code:** Escribe un script que muestre el código de estado de una solicitud GET.
3. **Star wars movie title:** Escribe un script que imprima el título de una película de Star Wars.
4. **Star wars Wedge Antilles:** Escribe un script que imprima el número de películas en las que aparece el personaje "Wedge Antilles".
5. **Loripsum:** Escribe un script que obtenga el contenido de una página web y lo guarde en un archivo.
6. **How many completed?:** Escribe un script que calcule el número de tareas completadas por identificador de usuario.

## Recursos Adicionales

- [Documentación de semi-standard](https://github.com/standard/semistandard)
- [Documentación del módulo request](https://github.com/request/request)


## Consideraciones Legales y Éticas:
        
Es importante tener en cuenta las leyes y políticas de uso aceptable al realizar Web Scraping. Algunos sitios web pueden tener términos de servicio que prohíben el scraping de sus datos, por lo que es fundamental obtener permiso antes de realizar esta actividad.

##

Este README proporciona una introducción al web scraping en JavaScript y proporciona instrucciones para comenzar a trabajar con él. Cada tarea en el repositorio te ayudará a profundizar en tus conocimientos y habilidades en esta área.
