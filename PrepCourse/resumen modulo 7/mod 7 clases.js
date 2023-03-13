// Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.
// Tenemos dos maneras de declararlas...

// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    this.informacion = function(){
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    }
}
let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);

// EXPRESIÓN DE CLASE
class Auto {
    constructor(puertas, color, marca, año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
}
let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);

// Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos.
// El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia. 
// Todos los objetos pueden heredar propiedades y métodos por medio de un prototipo. 
// Gracias a estos prototipos podremos acceder al constructor de cualquier objeto para modificarlo.

//EJEMPLOS
Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
        if (this[i] > 3) {
            arregloModificado.push(false);
        } else {
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo);

//EJEMPLOS
class LatinoAmerica {
    constructor() {
        this.paises = [];
    };
};

LatinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);

// Extender clases nos va a permitir tener una clase general que le heredará propiedades y métodos a otras clases. 
// De esta forma, podremos generar distintas sub - entidades que puedan mantener sus propias características, pero que compartan algunas otras generales.

class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }
 let martinn = new Persona('Martin', 26);
 martin.saludar();


 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin = new Persona('Martin', 26);
 let programador = new Programador('María', 37, 4);
 martin.saludar();
 programador.codear();