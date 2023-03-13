/*A diferencia de las matrices que tienen elementos valorados en índices, los objetos usan un concepto llamado pares de clave:valor. 
La clave (key) es el identificador y el valor (value) es el valor que queremos guardar en esa clave, ejemplo; key{nombre} value {dogui}.
La sintaxis es "clave: valor". 
Los objetos pueden contener muchos pares de clave-valor, deben estar separados por una coma (importante: sin punto y coma dentro de un objeto). 
Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, aunque, varias claves pueden tener el mismo valor. 
Los valores pueden ser cualquier tipo de dato de Javascript; cadena, número, booleano, matriz, función o incluso otro objeto.*/
var deportes = {
   conBalon: ['Futbol', 'Basketball', 'Golf'],
   sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};
var persona = { 
    nombre: 'Lucas', 
    edad: 26, 
    estudios: { esProgramador: true } 
  };

//COMO RECORRER UN OBJETO DENTRO DE UN ARRAY
let array = [{nombre: 'juan', edad: 15},
             {nombre: 'pedro', edad: 16},
             {nombre: 'matias', edad: 17}
            ]
let nombre = 'pedro'

function rescatarEdad(nombre, array){
  let laEdad = 0;
  for(let i = 0; i <array.length; i++){
    if(nombre === array[i].nombre){
      laEdad = array[i].edad
    }
  }
  return laEdad
}
rescatarEdad(nombre, array)

/*Dot-Notation
Para acceder a la propiedad de un objeto simplemente tenemos que escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.
Para cambiar el valor de una propiedad simplemente tenemos que acceder a ella e igualarla al nuevo valor.
Para eliminar propiedades utilizaremos una palabra reservada llamada delete.  */

// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// De la misma manera que utilizamos la Dot-Notation o notación por puntos para acceder o asignar un valor, 
// también podemos usar Bracket-Notation, o notación por corchetes. Lo único que cambia es la forma en la que lo escribimos.
// Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla como propiedad en un objeto. 
// Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// Métodos de objetos
// El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.
// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.
// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

// El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. 
// Una representa el objeto que recorremos, y la otra la propiedad en la que se está realizando la iteración. 
// Utilizando ambos valores podremos acceder al valor de cada propiedad del objeto.
for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }

// Contextos en JavaScript
// Dentro de este lenguaje de programación existe un objeto global llamado this. 
// Este nos permite manipular el contexto en el que las funciones y la información está siendo ejecutada. 
// De esta forma podremos tener un alcance más preciso dentro de nuestro código.
//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };