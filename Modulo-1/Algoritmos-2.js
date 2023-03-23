/* 
>>> ORDENAMIENTO <<<

>>> QUICK SORT : 1- se elige un elemento de la lista al que denominaremos 'pivot'
2- mueve los demas elemento de la lista a cada lado del pivote, de manera que a un lado queden todos los menores que el y al otro los mayores
3- la lista queda separada en dos sublistas (array), una formada por los elementos a la izquierda del pivote, y otra por los elementos a su derecha
4- este se repite de forma recursiva para cada sublista mientras esta contengan mas de un elemento. una vez terminado este proceso todos los elementos estaran ordenados */

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let pivote = array[Math.floor(Math.random() * array.length )]
  let left = [];
  let right = [];
  let equal = [];

  for (let num of array){
    if (num < pivote){
     left.push(num)
    }
    else if (num > pivote){
      right.push(num)
    }
    else {
      equal.push(num)
    }
  }
  //recursion
  let ordLeft = quickSort(left);
  let ordRight = quickSort (right);
  return ordLeft.concat(equal, ordRight);
}

/*
>>> MARGE SORT : 1- divide el conjunto de numeros en dos grupos iguales
2- ordena recursivamente los numeros de ambos grupos
3- junta o mergea los grupos ordenados de una forma secuencial
*/ 

function margeSort(array){ // [9, 7, 3, 1, 5, 2, 6]
   // Implementar el método conocido como mergeSort para ordenar de menor a mayor
   // el array recibido como parámetro
   // Devolver el array ordenado resultante
   // Tu código:

    if(array.length < 2) return array;

    const mitad = Math.floor(array.length / 2);
    let left = array.slice(0, mitad); // [9, 7, 3]
    let right = array.slice(mitad); // [1, 5, 2, 6]

    array = []; 
    left = margeSort(left);
    right = margeSort(right);

    while(left.length && right.length){
        if(left[0] < right[0]){
            array.push(left.shift())
        }
        else array.push(right.shift())
    }
    array = array.concat(left, right);
    return array;
}