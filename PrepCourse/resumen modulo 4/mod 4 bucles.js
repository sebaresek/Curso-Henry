// Existen tres tipos de operadores lógicos: la negación o NOT, la conjunción o AND, y la disyunción u OR. 
// Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. 
// En una declaración &&, si la primera expresión es false, la segunda expresión no se evaluará porque AMBAS expresiones deben ser true. 
// Lo mismo para la declaración ||. 
// Si la primera expresión es verdadero, la segunda no se evaluará porque solo debe haber una declaración verdadera para cumplir con los requisitos del operador. 
// Utiliza paréntesis. Como vimos en el segundo ejemplo de la negación !, utilizamos paréntesis para evaluar PRIMERO lo que estaba dentro de ellos, y luego aplicamos la negación. 
// Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes que toda la expresión en conjunto.
    
// Bucle For
// Por un lado, el Bucle For es utilizado cuando sabemos con antelación la cantidad máxima exacta de pasos que queremos ejecutar. 
// Esta cantidad máxima de pasos se sitúa como segundo parámetro entre los paréntesis
let suma = 1 
for (var i = 0; i < 5; i++) {
    suma += i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

// Bucle while
// El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución. 
// Por ejemplo, podríamos pensar en una función que siga agregando +1 hasta llegar a un número determinado. 
let x = 1; 
while (x <= 4){
    console.log(`iteracion ${x}`);
    x++;
}console.log(`fin del bucle`)

while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };

// Expresión Switch
// La expresión Switch evalúa una condición. Compara su valor con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
function colors(color) {
   switch(color){
      case 'blue': return "This is blue"
      case 'red' : return "This is red"
      case 'green' : return "This is green"
      case 'orange' : return "This is orange"
      default: return "Color not found"
   }
}
             
// Bucle Do-While
// El bucle Do-While (hacer mientras) ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. 
// La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
function doWhile(num) {
   var i = 0;
   do {                       // hacer
      num += 5;
      i++
    } while (i < 8);        // mientras que esto suceda
    return num;
}

// Declaración Continue
// La declaración continue se utiliza dentro de los Bucles For. Nos permite omitir alguna de las iteraciones si se cumple una condición específica.
const numeross = [1,2,3,4,5,6,7,8,9,0]
for(let i= 0 ; i < numeross.length ; i++){
    if (i === 5){ //en este caso rompe la vuelta del indice 5 pero sigue con la ejecucion del bucle
        continue;
    }
    console.log(numeros[i])
}

// Break
// La declaración break se utiliza dentro de los Bucles For. Nos permite "romper" o finalizar el bucle con antelación si se cumple una condición específica.
const numeros = [1,2,3,4,5,6,7,8,9,0]
for(let i= 0 ; i < numeros.length ; i++){
    if (i === 5){ 
        break;
    }
    console.log(numeros[i])
}