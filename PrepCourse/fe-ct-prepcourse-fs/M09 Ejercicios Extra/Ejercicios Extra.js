/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];
   for (key in objeto) {
      array.push([key, objeto[key]]);
   }
   return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   for (var i = 0; i < string.length; i++) {
      objeto[string[i]] = (objeto[string[i]] || 0) + 1;
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayString = string.split("");
   var mayusculas = [];
   var minusculas = [];
   for (var letra of arrayString) {
      if (letra === letra.toLowerCase()) {
         minusculas.push(letra);
      } else {
         mayusculas.push(letra);
      }
   }
   return mayusculas.join("") + minusculas.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que 
   // el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseToArray = frase.split(' ');
   var final = fraseToArray.map(function(element){
      return element.split('').reverse().join('')
   }) 
   return final.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numStr = numero.toString();
   var resultado = numStr.split('').reverse().join('');
   if( numStr === resultado){
      return "Es capicua"
   }else{
      return 'No es capicua'
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var difAbc = '';
   for(var i=0; i < string.length; i++){
      if(string[i] === 'a' || string[i] === 'b' || string[i] === 'c'){
         continue;
      }else{
         difAbc += string[i]
      }
   }
   return difAbc;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas 
   // en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var cambio = true;
   while(cambio){
      cambio = false;
      for(var i = 0; i< arrayOfStrings.length -1; i++)
         if(arrayOfStrings[i].length > arrayOfStrings[i+1].length){
            var aux = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[i+1];
            arrayOfStrings[i+1] = aux;
            cambio = true;
         }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var coincidencia = [];
   for(var i= 0; i < array1.length; i++){
      for(var j= 0; j < array2.length; i++){
         if(array1[i] === array2[j]){
            coincidencia.push(array1[i])
         }
      }
   }
   return coincidencia;           
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
