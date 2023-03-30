//?  length()
/* entrega la cantidad de elementos que contiene */
//!   let num = [1,2,3,4]
//!   console.log(num.length) //entrega 4




//?  charAt() 
/* es como decir una posicion en especifico 
en la que yo quiera trabajar. mas que nada para string   
EJEMPLO   */
//!   let nombre = 'juana'
//!   let primero = nombre.charAt(1)
//!   console.log(primero)      //imprime la letra "U"




//?  toUpperCase() 
/* activa las letras/letra en mayuscula 
ejemplo */
//!   nombre = mateo
//!   nombre[0].toUpperCase() // retorna {M} 
//!   nombre[2].toUpperCase() // retorna {T}




//?  substr() 
/* retorna todas las palabras desde donde indicamos
ejemplo: */
//!   nombre = mateo
//!   nombre.substr(1) //retorna {ateo}




//?  trim()
/* borra los espacios extremos de un string */
//!   let string = '   hola    '
//!   console.log(string.trim())




//?  Math.pow()
/* hace una exponesacion de un numero.
recibe 2 parametros el primero que es la base y 
el segundo el exponente  */
//!   function BinarioADecimal(num){
//!   num = num.split('')
//!   var suma = 0;

//!   for(var i = 0; i < num.length; i++){
//!     suma += Math.pow(2, num.length-1-i) * num [i]
//!   }
//!   return suma
//!   }




 //?  Math.floor()
 /* redondea un numero para abajo */
//!   function decimalABinario(num){
//!    var binario = [];
//!   
//!    while( num !== 0 ){
//!     binario.unshift(num % 2)
//!     num = Math.floor(num / 2) //redondea para abajo
//!    }
//!    return binario.join('')
//!   }




 //?  Math.round()
 /* redondea un numero a su entero mas proximo */
//!    function redondearNumero(num) {
//!     return Math.round(num)
//!   }




//?  Math.ceil(num)
/* redondea un numero hacia arriba */
//!   function redondearHaciaArriba(num) {
//!     return Math.ceil(num)
//!   }




//?  switch()
/*  se utiliza para elegir un camino de varios prestablecidos */
//!   function colors(color) {
  // La función recibe un color. Retornar el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
//!     switch(color){
//!        case 'blue': return "This is blue"
//!        case 'red' : return "This is red"
//!        case 'green' : return "This is green"
//!        case 'orange' : return "This is orange"
//!        default: return "Color not found"
//!     }
//!   }




//?  reverse()
/* nos va a dar vuelta el array */
//!   let array2 = [1,444,2213,123,244];
//!   function darVuelta(array2){
//!     return array2.reverse()
//!   }
//!   console.log(darVuelta(array2))




//?  slice() 
/* sirve para empezar o terminar en 
determinada posicion  */
//!   let nuevaString = 'hola'
//!   let transformado = nuevaString.slice(1, 3) 
//*   si le pongo el {1} 
//*   le estoy indicando que me empiece a mostrar a partir del ese indice y el {3} indica que desde el indice 3 para adelante sera borrado
//!   console.log(transformado) // ENTREGA : ola




//?  includes()
/* nos devuelve un boleano haciendo una busqueda dentro de un array 
determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.*/
//!   let arrayy = [1,2,3,4,];
//!   console.log(array.includes(5))    
//*   imprime FALSE 
//*   EJEMPLO 2
//!   var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
//!   var existeDali = pintores.includes('Dalí');
//!   console.log(existeDali);          }
//*   imprime TRUE 




//?  hasOwnProperty() 
/*  busca dentro del objeto si tiene cierta propiedad     */
//!   let objeto = {      
//*   y devuelve como resultado un booleano                   
//!       nombre: 'matin',
//!       apellido: 'perez',
//!       edad: 21
//!     }
//!   console.log(objeto.hasOwnProperty('altura')) 
//*   aca preguntamos 
//*   si el objeto tiene la propiedad "altura" 
//*   y nos devuelve como resultado 'false'   




//?  split()
/* El método SPLIT() convierte un string, int o float en un arreglo, donde cada elemento contendrá un sub-string, 
dependiendo del parámetro divisor que indiquemos.por ejemplo si ponemos : */
//!   var palabra = 'Henri'
//!   var palabraSeparada = palabra.split('') 	
//*   (esto mete un espacio entre cada caracter)
//*   quedaria asi : ['H', 'e', 'n', 'r', 'i']
//!   var palabraSeparada = palabra.split('e') 	
//*   (esto mete un espacio entre cada "e" que tenga la palabra)





//?  every()
// El método EVERY() determina si todos los elementos en un arreglo satisfacen una misma condición. //EVERY
//!   var numeros = [ 1, 6, 8, 9, 43 ];
//!   var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );
//!   console.log(cumplenCondicion);




//?  join()
// El método JOIN() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
// JOIN
//!   var palabraArreglada = palabraSeparada.join('');
//!   console.log(palabraArreglada); 
//*   Por ejemplo ['H', 'e', 'n', 'r', 'y'] lo transforma en Henry




//?  push()
// El método PUSH() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
// PUSH
//!   var colores = ['Amarillo', 'Azul'];
//!   colores.push('Rojo');
//!   console.log(colores);




//?  pop()
// El método POP() elimina y devuelve el último elemento de un arreglo.
// POP
//!   colores.pop();
//!   console.log(colores);




//?  unshift()
// El método UNSHIFT() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
//UNSHIFT
//!   var colores = ['Amarillo', 'Azul'];
//!   colores.unshift('Verde');
//!   console.log(colores);




//?  shift()
// El método SHIFT() elimina y devuelve el primer elemento de un arreglo.
// SHIFT
//!   colores.shift();
//!   console.log(colores);




//?  forEach()
// El método FOREACH() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento
// FOREACH
//!   var numeros = [ 1, 2, 3, 4 ];
//!   numeros.forEach( (num) => { console.log(num) } )	
//*   (MUESTRA TODOS LOS NUM UNO POR UNO)




//?  reduce() 
/*  va recorriendo cada elemento del arreglo 
El resultado final de ejecutar el reductor 
en todos los elementos de la matriz es un solo valor.
tenemos que darle 2 parametros (acumulador, index)
acumulador = el que va a recibir toda la suma o informacion)
index = posicion donde se va a ubicar
0 = donde queremos que inicie   */
//!   let resultado = arrayOfNumbers.reduce (
//!       (acm, index) => acm + index, 0);

//?  REDUCE
//!   let miArray = [5, 4, 6, 7]
//!   let miArrayReducido = miArray.reduce(function(acm,element){
//!     return acm * element         
//*   el 1 indica que valor tendra el acm al iniciar la function
//!   },1)                           
//*   si el acm esta en 0 la function no respondera como 0 en la *
//!   console.log(miArrayReducido)

//?  REDUCE LETRAS 
//!   let tercerArray = ['es ', 'otra ', 'frase']
//!   let tercerArrayReducido = tercerArray.reduce(function(acm,element){
//!     return acm + element
//!   } , "Esto es el valor inicial: ")
//!   console.log(tercerArrayReducido)



//?  filter() 
/* devuelve un nuevo arreglo (asi como el map).
vamos a iterar elemento por elemento poniendo una condicion que devuelve true o false
en base eso va a pushear automaticamente al nuevo elemento 
FILTER  NUMERO    */

//!   let arrayFilter = [1,2,44,65,76,88,456,99,22,8,4]
//!   let arrayFiltrado = arrayFilter.filter(function(element){
//!   if(element > 10){
//!     return element
//!   }
//!   })
//!   console.log(arrayFiltrado)

//?  FILTER LETRAS 
//!   let arrayPalabras = ['hola', 'como', 'va', 'todo', 'bien']
//!   let arrayPalabrasFiltrado = arrayPalabras.filter(function(element){
//!     if(element.length > 3 ){
//!       return element
//!     }
})
//!   console.log(arrayPalabrasFiltrado)




//?  map()  
/* devuelve ( en un nuevo array ) la misma cantidad de elementos 
que tiene el array pero con modificaciones 
OTRA DEFINICION: nos permite recorrer un arreglo y realizar una acción por cada elemento. 
La diferencia es que este método devuelve un nuevo arreglo los elementos modificados. */

//?  EJEMPLO CON NUMEROS 
//!   let nuevoArregloo = array.map(function(element){
//!     return element * 3;
//!   })

//?  MAP CON LETRAS
//!   let miArray2  = ['es', 'una', 'frase']
//!   let miArray2Mapeado = miArray2.map(function(element){
//!     return element.split("").reverse().join("")
//!   })