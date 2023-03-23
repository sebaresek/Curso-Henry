/* 
ALGORITMOS: es una serie de pasos precisos y ordenados que siguen para resolver un problema o realizar una tarea 

EFICIENCIA Y COMPLEJIDAD: se refiere a su capacidad para resolver un problema en un tipo y espacio determinado. es importante analizarlos antes de usar un algoritmo en una app para asegurarse de que no cause problemas de rendimiento 


>>> COTA SUPERIOR ASINTOTICA : tambien conocida como la funcion Big O Notation. Esta es la que nos permitira conocer la complejidad de un algoritmo


>>> para que sirve medir la complejidad? <<<

PREDECIR EL COMPORTAMIENTO : hay casos en lo que puede tardar tanto que no tenemos el lujo de prueba y error. es bueno saber

COMPARACIONES : segun el problema que tenemos ver cual es el que mejor funciona


>>> ORDENAMIENTO <<<

bubble Sort : recorre haciendo comparaciones de a dos, osea en pareja(comparando la posicion i con i++) y ordenando de mayor a menor, los que ya comparo (los mayores) no los vuelve a comparar.*/

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var ordenado = false;

  while(!ordenado){
    ordenado = true;
    for(let i = 0; i < array.length - 1 ; i++){
      if(array[i] > array[ i + 1]){
        var aux = array[i]
        array[i] = array[i + 1];
        array[i + 1] = aux
        ordenado = false;
      }
    }
  }
  return array;
}

/*
insert sort: va comparando hacia atras y ordenando de mayor a menor, empienza a comparar desde la posicion 1. (comparando la posicion i + 1 con array.length) */

function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 1; i < array.length; i++){
      var aux = array[i];
      let j = i - 1;
      while(j >= 0 && aux < array[j]){
        array[j + 1] = array[j]
        j--;
      }
      array[j + 1] = aux;
    }
    return array;
  }
  

/*
selection sort : busca el menor [comparando la posicion i (siendo el menor del array) con array.length] y lo va poniendo en la posicion inicial del array y empieza agarrando el indice 0 */

function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for(let i = 0; i < array.length; i++){
      var minIndex = i;
      for(let j = i + 1 ; j < array.length; j++){
        if(array[j] < array[minIndex]) minIndex = j;
      }
      let aux = array[i];
      array[i] = array[minIndex];
      array[minIndex] = aux
    }
    return array;
  }