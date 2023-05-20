function MaxValue (shares) {
  // Your code here:
//   let maxProfit = -Infinity;

//   for(let i=0; i < shares.length -1; i++){
//     const buy = shares[i];

//     for(let j=1; j < shares.length; j++){
//       const sell = shares[j];
//       const actualProfit = sell - buy;
//       if(actualProfit > maxProfit) maxProfit = actualProfit
//     }
//   }
// return maxProfit
// }

  let maxProfit = -Infinity;
  let minValue = shares[0];

  for(let i = 0; i < shares.length; i++){
    const sell = shares[i];
    const actualProfit = sell - minValue;
    if(actualProfit > maxProfit) maxProfit = actualProfit;
    if(sell < minValue) minValue = sell
  }
  return maxProfit
}


module.exports = MaxValue
