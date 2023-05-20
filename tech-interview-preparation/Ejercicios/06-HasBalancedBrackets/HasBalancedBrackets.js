// Solución fuerza bruta
// function HasBalancedBrackets (string) {
//   // '} { [ ] ( ) }'
//   //  i
//   const validOpeningBrackets = ['{', '[', '('];
//   const validClosingBrackets = ['}', ']', ')'];
//   const openBrackets = []; // []

//   for(let i = 0; i < string.length; i++){
//     const bracket = string[i]; // '}'

//     if(validOpeningBrackets.includes(bracket)) openBrackets.push(bracket);

//     if(validClosingBrackets.includes(bracket)) {
//       const index = validClosingBrackets.indexOf(bracket); // 0
//       const brother = validOpeningBrackets[index]; // validOpeningBrackets[0] >>> '{'
//       const lastOpen = openBrackets[openBrackets.length - 1]; // openBrackets[0] >>> undefined

//       if(lastOpen === brother) openBrackets.pop(); //
//       else return false;
//     }
//   }

//   if(openBrackets.length) return false;
//   return true;
// }


// solución Refactor
// function HasBalancedBrackets (string) {
//   // '{ [ ] ( ) }'
//   //              i
//   const openBrackets = []; // []
//   const validBrackets = {
//     '{': '}',
//     '[': ']',
//     '(': ')'
//   }

//   for(let i = 0; i < string.length; i++){
//     const bracket = string[i]; // '}'

//     if(validBrackets[bracket]) openBrackets.push(bracket);
//     else{
//       const lastOpen = openBrackets[openBrackets.length - 1]; // '{'
//       if(validBrackets[lastOpen] === bracket) openBrackets.pop(); // validBrackets['{'] >>> '}' === '}'
//       else return false;
//     }
//   }
  
//   if(openBrackets.length) return false;
//   return true;
// }


// Re-Refactor
function HasBalancedBrackets(string){
  // '{ [ ] ( ) } {'
  //                b
  const openBrackets = []; // ['{']
  const validBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for(const bracket of string){
    if(validBrackets[bracket]) openBrackets.push(bracket);
    else if(validBrackets[openBrackets.pop()] !== bracket) return false;
    // validBrackets['{'] >>> '}' !== ''
  }

  return !openBrackets.length; // false
}
// Complejidad >>> O(n)





module.exports = HasBalancedBrackets