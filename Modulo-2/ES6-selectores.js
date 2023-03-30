/*
* ECMASCRIPT 6 : 
se encarga de dar estandares para js y todos los años saca nuevos estandares


* js nace como LiveScript;
LiveScript: es un lenguaje funcional compilado sobre js. comparte la mayoria de la semantica con este mismo lenguaje */


//!   NUEVAS FUTURES QUE TRAJO EMASCRIPT 6

/*
* let y const
var => tienen alcance de CONTEXTO DE EJECION
let y const => tienen alcances de llaves */


/* 
* arrow functions =  
/* es una definicion de funcion por lo tanto va a estar guardado en una variable.
el this hace referencia al contexto donde se ejecuta las arrow functions. en cambio las funciones normales generan un nuevo contexto */

const numbers = [4, 5, 20, 10, 3, 7, 8, 15,]
const multiplos = []; 
numbers.forEach((element) => {
    if(element % 5 === 0) multiplos.push(element)
})
console.log(multiplos); //MUESTRA : [5, 20, 10, 15]



/* 
* class = 
son clases y la forma en la que hereda valores de la clase padre, la cual indica quien es con la palabra 'extends'
*/
class Persona {
  constructor  (nombre = 'Maria', apellido='Perez' ){
    this.nombre = nombre;
    this.apellido = apellido;
  }
  getNombres(){
    return `${this.nombre} ${this.apellido}`
  }
}
class Empleado extends Persona { //* extends = palabra reservada de donde vamos a obtener info
  constructor(nombre, apellido, empleo, sueldo){
    super(nombre, apellido);  //* super = le esta avisando al padre 
    this.empleo = empleo;     //* que le pase los datos que necesita saber
    this.sueldo = sueldo;
  }
  getEmpleo(){
    return `${this.empleo} ($ ${this.sueldo} )`
  }
}



/*
* objetos literales = 
lo toma como key-value de la propiedad (cuando la propiedad tiene el mismo nombre que la key del objeto) */

const obj = (name, lastname) => {
    let object = {name, lastname};
    return object
}
console.log(obj('dai', 'perez')) // { name: 'dai', lastname: 'perez' }



/* 
* template literales = 
es otra forma de concatenar strings, mas limpia y mas facil */

const saludo2 = (saludo) =>{
  //  return saludo + ' ' + 'FT 37a'
  return `${saludo} FT 37a`    // cuando tengo una variable hay que ponerle en ${variable}
}
console.log(saludo2('Hola'))   //Hola FT 37a



/*
* destructuring =  
es para llamar a una propiedad de un array o objeto sin tener que crear variables para poder ocupar el dont notation o brakect notation */

let array = [9, 7, 2]
let object = { chorte: 'FT 37a', alumnos : {instructor: 'dai'}}

let [a, b] = array
console.log(a,b); // 9 2

let { chorte } = object
console.log(chorte); //FT 37a

let { alumnos: { instructor } } = object //destructuring dentro de destructuring
console.log(instructor); // dai



//* default = 
// es cuando pasamos por parametro un valor. es decir si a y no le pasan ningun valor entonces va a tener el valor de '12'
function one(x, y = 12){ return x + y}
one(3) = 15

//* Rest = 
//en los  3 puntitos quiere decir que 'Y' se autogenere un array con todos los datos que ponen (despues del primero) por lo tanto hace 'x' por el length de 'y' ( que es un array)
const two = (x , ...y) => x * y.length
console.log(two(3, 'hola', 400, 'holi')) // 9


//* Spread = 
//hace una copia de los valores del array/objetos
function three(x, y, z) { return x + y + z }
three(...[1,2,3]) = 6


//todo BABEL = es una libreria que nos sirve para transpilar codigos. es decir le pasamos nuestro codigo y transcribe todo al mismo lenguaje pero mas viejo, ya que hay paginas que todavia no acepta los ultimos estandares de emascript 6 