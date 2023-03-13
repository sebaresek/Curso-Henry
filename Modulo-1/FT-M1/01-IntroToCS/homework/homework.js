'use strict';

function BinarioADecimal(num) {
   let count = 0;

   for (i = 0; i < num.length; i++) {
    count += (num.startsWith("1") 
              ? num[i] * 2 ** i 
              : num[i] * 2 ** i / 2);
   }
   return count;
 }


function DecimalABinario(num) { 
   let almacenador = [];

   while(num !== 0){
      let residuo = parseInt(num%2)
      num = Math.floor(num/2);
      almacenador.push(residuo);
   }
   return almacenador.reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
