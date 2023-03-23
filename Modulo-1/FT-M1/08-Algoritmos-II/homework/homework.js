'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let calcPivot = Math.floor(Math.random() * array.length)
  let pivot = array[calcPivot]

  let equals = [];
  let left = []
  let right = []

  for(let i = 0 ; i < array.length; i++){
    if(array[i] !== pivot){
       if(array[i] < pivot) left.push(array[i]);
       else right.push(array[i])
    }
    else equals.push(array[i])
  }
  return quickSort(left).concat(equals).concat(quickSort(right))
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
