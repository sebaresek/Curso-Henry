/*
? UNIT TESTING : 
completamente automatizable - se pueden ejecutar en cualquier orden - siempre retorna el mismo resultado - es rapido y facil de entender y mantener - testea un solo concepto logico del sistema
el TESTING puede ser algo tedioso de crear pero a largo plazo nos ahorra muchisimo trabajo

? TEST DRIVEN DEVELOPMENT : 
1 crea un test que no pasa
2 resolver codigo para que pase 
3 refactorizar

el tes que vamos a ocupar es JEST
? JEST : 
es una libreria agil y completa que nos permitira realizar testing de nuestra aplicacion
comando : npm install --save-dev jest

"scripts" : {
    "test": "jest --watchAll"
}

? JEST | CLIENT OPTIONS : 
jest test-pattern //pattern
jest path/to/test.js //filename
jest -t name-spec //describe or test name
//* runin watch mode
jest --watch
jest --watchAll
//* Show summary of each test file
//* Running one file only --> automatically verbose 
jest --verbose

? JEST | MATCHERS 
son pequeñas funciones que nos permitira comparar el resultado de la funcion que queremos testear con un valor especifico que queramos
* Experct : 
devuelve un 'expectation' object sobre el cual se pueden invocar los matchers
* toBe : 
igualdad exacta entre string y number
* toequal : 
verificacion recursiva de cada propidad
* toBeNull, toBeDefined, toBeUndefined
* toBeTruthy & toBeFalsy : 
buscan que el valor de veracidad sea verdadero o falso sin necesariamente ser literalmente true o false
* toBeGreaterThan & toBeLessThan :
que el valor sea menor o mayor que ...
* toBeCloseTo : 
que el numero decimal sea cercano a...
* toContain : 
verifica que un arreglo contenga un elemento

? JEST RUNNING OPTIONS
* it : 
test unitario. es la funcion que nos permite realizar testing unitario debe testear un solo concepto logico de lo que se qiera abarcar
* xit : 
evita que el test unitario corra (skip)
* describe : 
permite agrupar varios tests unitarios de una misma categoria o tematica (y se puede anidar)
* xdescribe : 
evita que todos los tests de este grupo corran 
* it.only : 
hace que este sea el unico test en correr


? CODIGO ASINCRONO : 
estructura tipica de un test. Esto no se resolvera correctamente a la hora de ejecutar el test.
siempre que tratemos codigo asincrono hay que retornar la promesa, ademas como cualquioer otra promesa debemos manejarla


? HOOKS : 
nos ayudan a ejecutar un codigo en un momento particular de nuestro testing

* beforeAll (() => {

})      //se ejecuta antes de que corran todos los test

* beforeEach (() => {

})      //se ejecuta antes de que corran cada uno los test

* afterEach (() => {

})      //se ejecuta despues de que corran cada uno los test

* afterAll (() => {

})      //se ejecuta despues de que corran todos los test


? MOCK FUNCTIONS : 
permite testear el comportamiento de una funcion que indirectamente fue ejecutada por otra

* mock.call : 
array con todas las invocaciones a la funcion donde cada elemento contiene otro array con los argumentos pasados
* mock.results :
array con todos los resultados devueltos por la funcion donde cada elemento contiene un objeto con el valor y el tipo de retorno


? SUPERTEST : 
permite testear los requets a nuestro servidor de forma autocontenida sin necesidad de levantar la aplicacion  

* statusCode : 
podemos verificar si el codigo de respuesta fue el indicado 
* response : 
podemos verificar si la respuesta del endpoint coincide con lo esperado 
* Type :
podemos verificar si el content-type devuelto es el correcto

si el .listen() de express se encuentra en el archivo requerido en el testing va a generar que el test no termine de ejecutar nucna














*/