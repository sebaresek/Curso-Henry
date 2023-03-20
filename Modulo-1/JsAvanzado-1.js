/*
>>> js Avanzado I 
cuialidades de js : alto nivel - interpretado - 
single theaded & sincronico - debilmente tipado


bajo nivel : son intrucciones ejercer un control directo 
por el hardware condicionado por la estructura fisica de 
la computadora que soporta


alto nivel : utilizan palabras en ingles lo que facilita 
aprendizaje y uso. su desventaja es que para que pueda tener 
esta sintaxis luego debe ser compilado a lenguaje de maquina 
para su ejecucion


INTERPRETADO : quiere decir que es procesado linea por linea traducido a un lenguaje de maquina por un interprete y ejecutado por uin motor a medida que se lenguaje
Este proceso consta de varias etapas e incluye tareas previas a la ejecucion




CONTEXTO DE EJECUCION : es el ambiente en el que se ejecuta un fragmento de codigo
dentro de js existen dos tipos : GLOBAL - DE FUNCION 


SYNTAX PARSER : nos corrige los errores que tengamos


LEXICAL ENVIRONMENT : estoy haciendo referencia a DONDE esta declarada una variable. Ejemplo : */

function saludos(){
    var es = 'hola'
}
var en = 'hi' 




/* 
EXECUTION CONTEXT : hace referencia a QUE es lo que se esta ejecutando. 


contexto global => THIS <=> objeto global
para agregar informacion al objeto global utilizamos This
this es un objeto.
si tengo un llamado a funcion se crea un nuevo contexto de ejecucion


FASE DE CREACION : es donde vamos a guardar informacion de que es lo que esta sucediendo en este contexto global
cuando se encuentra con una funcion o con var guarda espacio en memoria, NO SU VALOR 

FASE DE EJECUCION : en donde se ejecuta el codigo



CONTEXTO GLOBAL : es el entorno de ejecucion que rodea a todo el codigo de un proyecto. a la cual podemos acceder junto a todas sus variables desde cualquier parte de nuestro codigo

CONTEXTO LOCAL : es donde se desarrollan las funciones. 




>>> HOISTING : solo variables con VAR y FUNCIONES 
el hosting es lo que sucede en la fase de creacion */

saludo () // retorna 'holis'
console.log(hola) // retorna undefined (porque quiero acceder a la variable antes de crearla)

var hola = 'hola soy una variable'
function saludo (){
    console.log('holis')
}




/*
>>> SCOPE : o 'alcance' que tienen las variables (local o global) 
y sucede en la fase de ejecucion 


>>> PILA DE EJECUCION : la forma en la que se ejecuta las funciones (de abajo hacia arriba)     */

function b(){
    console.log('b!')
}
function a(){
    b();
}
a();     //retorno 'b!'



/*
SINGLE THEADED & SINCRONICO : es decir que lee linea por linea y hasta que no termina la linea no avanza a la siguiente

cuando se dice que es SINCRONICO es que el motor de ejecucion de js trabaja en conjunto con otros programas y por eso da la sensacion de que esta ocurriendo todo al mismo tiempo


EVENT LOOP : delega tareas >>> podemos hacer cosas asincronas  


DEBILMENTE TIPADO : permite modificar no solo el valor de una variable 
sino incluso el tipo de dato que almacena


COERCION DE DATOS : es el proceso donde se convierte un valor de un tipo de dato diferente al numero


EXPRECIONES Y STATEMENT
expresiones :  son todas las operaciones matematicas y asignaciones de valores
statement : son todos los bucles y condicionales 


ASIGNACION POR VALOR O REFERENCIA 
REFERENCIA : si hablo de referencia hablo de objetos o arrays. comparten la misma vision al mismo espacio de memoria.

VALOR : ocupan distintos espacios de memorias, pueden contener lo mismo pero no son iguales
*/


var obj = {nombre : 'hola'}
var obj2 = {nombre : 'hola'}

console.log(obj===obj2) //false

 obj = obj2     //pero si digo 

console.log(obj===obj2) //true 
// porque estan mirando al mismo espoacio de memoria

