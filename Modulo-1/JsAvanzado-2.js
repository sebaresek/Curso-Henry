/*
>>> CLOSURES : son funciones que retornan otras funciones. 
nos permite guardar en memoria un valor fijo en la fn padre
las fn que retorna, hereda esos valores y puede recibir parametros que son variables
las cuales pueden acceder al contexto de su funcion padre.
*/

function saludar (saludo){
    return function (nombre){
        console.log(saludo + ' ' + nombre)
    }
}

var saludarHola = saludar('Hola')
                // function (nombre){
        // console.log(saludo + ' ' + nombre)}

saludarHola('Fran')         // MUESTRA >>> HOLA FRAN

//  >>> OTRO EJEMPLO <<<

var creaFunction = function(){
  var array = [];  // [function(){console.log(i); }, function(){console.log(i); }, function(){console.log(i); }]
  
  for( let i = 0; i < 3; i++ ){
    array.push(
      function(){console.log(i); })
  }
  return array
}

var funciones = creaFunction() // [function(){console.log(i); }, function(){console.log(i); }, function(){console.log(i); }]

funciones[0]()      // MUESTRA = 0
funciones[2]()      // MUESTRA = 2




/*
BIND - CALL - APPLY : 
son metodos que nos permite manipular la direccion en la que apunta 
la propiedad this.

>>> BIND           
Este metodo crea una function con el mismo cuerpo de la original, pero con la propiedad this vinculado a un objeto en particular. 
Guarda la fn para que lo puedas ocupar varias veces
Acepta parametros. el primero siempre es el this, los siguientes sirven para bindear parametros de una funcion. esto se conoce como currying        */

let personas = {
    nombre: 'Alex',         //esto seria el objeto
    apellids: 'Bris'
}
let saludar = function(){               // la funcion llamando a un objeto
    console.log(`Hola, mi nombre es ${this.nombre}`);
}

let saludarPersona = saludar.bind(persona)      // con .bind(persona) asignamos que "this.nombre" 
                                                // sea refiera al objeto persona
saludarPersona(); // Hola, mi nombre es Alex



// ! CON DOS PARAMETROS SERIA ASI 

let saludar = function(saludo){               // la funcion llamando a un objeto
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

let saludarPersonaa = saludar.bind(persona, 'buenass')      // aca le pasamos a que objeto queremos vincular(persona) y el parametro de la fn (buenas)

saludarPersonaa(); // buenass, mi nombre es Alex




/* >>> CALL
 Este es como el bind pero se ejecuta una sola vez. 
 Este recibe como parametro la misma cantidad de parametros que la fn pero con el this antes */

let personaa = {
    nombre: 'Alex',
    apellido: 'Bris'
}
let logNombres = function(){
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

logNombres.call(personaa, 'buenass') //MUESTRA : buenass, mi nombre es Alex




/*
>>> APPLY 
funciona igual que el call (no se guarda la fn), este puede recibir 2 parametros (lo cual es opcional), el this y un array de argumentos (la cual va a pasar como argumentos a la funcion)       */

let persona = {
    nombre: 'Alex',
    apellido: 'Bris'
}

function saludarr(saludo, a, b, c){
     console.log(saludo, ', mi nombre es ', this.nombre);
     console.log(a);
     console.log(b);
     console.log(c);
}
saludarr.apply(persona, [1, 2, 3]); //MUESTRA : Hola mi nombre es Alex
                                    //1
                                    //2
                                    //3


                                    
// ! OTRO EJEMPLO

let logNombre = function(arg1, arg2){
    console.log(arg1 + ' ' + this.nombre + ' ' + arg2);        
}

logNombre.appy(persona, ['Hola', 'como estas ?']) //MUESTRA : Hola Alex como estas ?