/*
* NODE :
es un entorno de ejecucion para javaScript. Utiliza V8 y Libuv

* MOTOR V8 : 
es el motor de js
es un motor open source de google 
sigue los estandares de ecmaScript
escrito en c++ y es usado en chrome


* V8 + LIBUV
arquitectura de codigo para reutilizarlos (modulos)
poder leer y escribir archivos
enviar y recibir datos de internet 


*MODULOS :  
es un bloque de codigo reusable .  su existencia no altera el funcionamiento de otros bloques de codigos

?ARCHIVO 1
const suma = (a,b) => a+b: 

module.exports = {
    suma
}

? ARCHIVO 2
const { suma } = require ('./funciones')
console.log(suma(3,2));


* NPM : 
es un gestor de paquetes
GESTOR DE PAQUETES : 
paquete: es cualquier modulo de codigo manejado  y mantenido por un gestor de paquetes
gestor de paquetes: es un software que automiza la instalacion y actualizacion de paquetes

ALGUNOS COMANDOS DE NPM : 
npm i --save {nombrePaquete}
npm update
npm start
npm test
npm run {nombreScript}
npm uninstall {nombrePaquete}


* semantic versioning
1 . 3 . 2
1 (MAJOR) = cambios que rompen
3 (MINOR) = nueva funcionabilidad retro-compatible
2 (PATCH) = se arregla un bug o error retro compatible


* NODE_MODULES : 
los paquetes instalados de forma local seran guardado en una carpeta 'node_modules' (los cuales son ultra pesados) creada dentro de la carpeta donde se encuentre el archivo package.json. 


*/