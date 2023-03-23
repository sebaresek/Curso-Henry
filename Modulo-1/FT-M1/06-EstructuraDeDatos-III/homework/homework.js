'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
   this.root = value;
   this.left = null;
   this.right = null;
}



BinarySearchTree.prototype.insert = function(value){
   if(value < this.root ){     // es menor >>> va a la izq 
       if(this.left){  //solo hago recursion si la rama izq esta ocupada
           // tengo algo en la izq ?
           this.left.insert(value)
       }else{
           //no tengo nada a la izq
           this.left = new BinarySearchTree(value)
       }
   }else if(value > this.root){        // entonces; no agrega numero repetidos
       if(this.right){
           this.right.insert(value)
       }else{
           this.right = new BinarySearchTree(value)
       }
   }
}



BinarySearchTree.prototype.size = function(){
    // if(this.right === null && this.left === null) return 1;
    // if(this.left !== null && this.left === null) return 1 + this.left.size();
    // if(this.right !== null && this.left === null) return 1 + this.right.size();
    // if(this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size();

    let counter = 1 
    if(this.left) counter += this.left.size();
    if(this.right) counter += this.left.right();
    return counter;
}



BinarySearchTree.prototype.contains = function(value) {
    if(this.value === value)return true;
    if(value > this.value){
        if(this.right === null)return false;
    return this.right.contains(value)
    }
    if(value > this.value){
        if(this.left === null)return false;
    return this.left.contains(value)
    };
}



BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido){
   // pedido >>> 'in-order' => izq, root, dcha
   // pedido >>> 'pre-order' => root, izq, dcha
   // pedido >>> 'post-order' => izq, dcha, root
       if(pedido === 'in-order' || pedido === undefined){
           if(this.left) this.left.depthFirstForEach(cb, pedido);
           cb(this.value);
           if(this.right) this.right.depthFirstForEach(cb, pedido);
       }
       if(pedido === 'pre-order'){
           cb(this.value);
           if(this.left) this.left.depthFirstForEach(cb, pedido);
           if(this.right) this.right.depthFirstForEach(cb, pedido);
       }
       if(pedido === 'post-order'){
           if(this.left) this.left.depthFirstForEach(cb, pedido);
           if(this.right) this.right.depthFirstForEach(cb, pedido);
           cb(this.value);
       } 
   }


   
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) { //recorre por niveles
   if(this.left !== null){
    array.push(this.left)
   }
   if(this.right !== null){
    array.push(this.right)
   }
   cb(this.value)
   
   if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array)
   }

//   let result = [];
//   let node = this.root;
//   let traverse = function(node) {
//       node.left && traverse(node.left);
//       node.right && traverse(node.right);
//       result.push(node.value);
//   };
//   traverse(node);
//   return result;
};
     
   

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
