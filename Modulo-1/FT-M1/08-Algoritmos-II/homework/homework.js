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
  if(array.length < 2) return array

  const mitad = Math.floor(array.length / 2)
  let left = array.slice(0, mitad)  // slice corta el array y genera uno nuevo
  let right = array.slice(mitad, array.length)  // eslo mismo que pones (mitad) ya q toma todo pa delante

  // como ya lo dividi piso el array anterior es decir no es necesario colocar new array

  array = [] 
  // ahora se viene recursion
  left = mergeSort(left) // ordeno con mersort
  right = mergeSort (right)

  while (left.length && right.length ){ // comparo izquierda y derecha
    if (left [0] < right[0]){    // pusheo en caso de ser verdadero el piquito
      array.push(left.shift())
    }
    else array.push(right.shift()) // ---> cuidado aca  estas solamente pusheando el otro en caso de no                                             cumplirse lo del if
  }
  array = array.concat(left, right) // ahora concateno ya lo retornto 

  return array

  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
