function FindNeedle (haystack, needle) {
  // Your code here:
  for(let i = 0; i < haystack.length; i++){

    for(let j=o; j < needle.length; j++){

      if(needle[j] !== haystack[i + j ]) break;
      if( j === needle.length -1 ) return i;
    }
  }
  return -1;
} // COMPLEJIDAD >>> O(n*m)


//* OTRA FORMA DE HACER SERIA : 
function FindNeedle (haystack, needle) {
  for(let i = 0; i < haystack.length; i++){
    const sliced = haystack.slice(i, i + needle.length);
    if(sliced === needle) return i;
  }
  return -1
} // COMPLEJIDAD >>> O(n**2)

module.exports = FindNeedle
