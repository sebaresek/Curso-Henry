function SolveGraph (graph, start, end, visited = []) {
  // Your code here:

  if(visited.includes(start)) return;
  visited.push(start);

  for (const node of graph[start]){
    console.log(node);
    if(node === end) return true;
    if (SolveGraph(graph, node, end, visited)) return true
  }
  return false
}

module.exports = SolveGraph



// const graph = {
//   a: ['c'],
//   b: ['c'],
//   c: ['s', 'r'],
//   d: ['a'],
//   s: ['a', 'c'],
//   r: ['d'],
//   z: ['z']
// }