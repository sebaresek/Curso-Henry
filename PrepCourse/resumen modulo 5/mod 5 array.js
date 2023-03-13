// Los arreglos o arrays son lo que se conoce como objeto global dentro de Javascript, y que nos permiten guardar y gestionar información. 
// Esto nos será de gran utilidad cuando queramos almacenar datos. 
// Dentro de los arreglos existen dos conceptos que pueden parecer similares, pero son muy diferentes.
// 1 Por un lado tenemos lo que se conoce como elemento. Los elementos son aquellos datos que hayamos guardado. 
// 2 Por otro lado, está el concepto de índice. Los índices no representan al dato en sí mismo, sino la posición en la que se está guardando. 
// 2 Un detalle muy importante que hay que destacar es que, en los arreglos, siempre se comienza a contabilizar las posiciones desde el número cero, no el uno.

var listaDeCompras = []; //(asi se crea el arrays)
listaDeCompras[3] = 'tomates'; //(ya le agregamos info a el indice o puesto num 3)
listaDeCompras[1] = 'lechuga'; 
console.log(listaDeCompras.length); //(muestra la cantidad de indices tenemos ocupados)
var elementoDelArray = listaDeCompras[3]; //(imprime solo 'tomates')

// UN BUCLE: es una secuencia de instrucciones a la que se le asigna una condicion. Se ejecuta hasta que la condicion asignada deje de cumplirse.

// Bucle For: Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.
// Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia 
// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// Bucle While: Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.
// Sintaxis: while (condicion)
  sentencia
// WHILE


// Bucle infinito: Esto no es un nuevo tipo de bucle, sino algo que se puede producir en los que ya aprendimos. 
// Un bucle infinito se produce cuando un bucle comienza a ejecutarse, pero jamás termina. Esto se debe a que nunca se llega a la condición de quiebre.
// Esto consume muchos recursos de la computadora, por lo que hay que intentar evitarlos. 
 