// solución fuerza bruta
// function BinaryToDecimal (binary) {
//   // '1 1 0' >>> num * 2 ** i

//   binary = binary.split('').reverse();
//   console.log(binary);

//   let result = 0;
  
//   for(let i = 0; i < binary.length; i++){
//     const num = binary[i];
//     result += num * 2 ** i
//   }

//   return result;
// }

// Refactor
// function BinaryToDecimal(binary){
//   binary = binary.split('').reverse();
//   let result = 0;

//   binary.forEach((num, i) => {
//     result += num * 2 ** i
//   });

//   return result;
// }

// Re-Refactor
// function BinaryToDecimal(binary){
//   return binary.split('').reverse().reduce((result, num, i) => (result += num * 2 ** i), 0)
// }

// Con recursión con fuerza bruta
// function BinaryToDecimal(binary){ // 1° vuelta = '110' || 2° vuelta = '10' || 3° vuelta = '0'
//   const num = binary[0]; // '0'
//   const result = num * 2 ** (binary.length - 1); // '0' * 2 ** 0 = 0
//   const rest = binary.slice(1); // ''

//   if(rest) return result + BinaryToDecimal(rest); // 4 + 2 = 6
//   return result; // 0
// }

// Refactor de la recursión
function BinaryToDecimal(binary){
  const result = binary[0] * 2 ** (binary.length - 1);
  const rest = binary.slice(1);

  return rest ? result + BinaryToDecimal(rest) : result;
}
// Complejidad >> log(n)

console.log(BinaryToDecimal('110'))

module.exports = BinaryToDecimal