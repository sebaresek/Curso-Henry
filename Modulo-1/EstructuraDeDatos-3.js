 /* >>> ARBOL BINARIO : es una estructura de datos jerarquica que consta de nodos conectados por ramas. cada nodo puede tener cero o mas nodos hijos. pero solo un nodo padre
 ejemplos : arbol binarios - arbol binario de busqueda 
 - avl - max heap



 */


function BinarySearchTree(value){
    this.root = value
    this.left = null
    this.right = null
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


BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido){
// pedido >>> 'in-order' => izq, root, dcha
// pedido >>> 'pre-order' => root, izq, dcha
// pedido >>> 'post-order' => izq, dcha, root

// EJEMPLO DEL ARBOL: 
//                       5
//                   2       6
//                 1   3    

    if(pedido === 'in-order'){
        if(this.left && this.left.depthFirstForEach(cb, pedido));
        cb(this.left);
        if(this.right && this.right.depthFirstForEach(cb, pedido));
    }//Recorre asi : [5, 2, 6, 1, 3]

    if(pedido === 'pre-order'){
        cb(this.left);
        if(this.left && this.left.depthFirstForEach(cb, pedido));
        if(this.right && this.right.depthFirstForEach(cb, pedido));
    }//Recorre asi : []

    if(pedido === 'pre-order'){
        if(this.right && this.right.depthFirstForEach(cb, pedido));
        cb(this.left);
        if(this.left && this.left.depthFirstForEach(cb, pedido));
    } //Recorre asi : [1, 3, 2, 8,5]
}


const miArbolito = new BinarySearchTree(5)
console.log(miArbolito)


/* 
BynarySearchTree{root: 5, left:   
                                 BinarySearchTree{root: 1, left: null, right: null,}
                            right:
                                 BinarySearchTree{root: 3,  left: null, right: null,}
                            }


Depth First Search (inorder): >>> izq >>> nodo >>> derecha
recorre todo hacia la izq hasta que no haya nada mas, cuando llegamos al final entregamos el valor del root(nodo) y seguimos por la derecha
explora los nodos del subarbol izq, luego del nodo actual y finalmente los nodos del subarbol derecho


Breadth First Search: >>> izq >>> dcha >>> root
explora los nodos mas cercanos al nodo raiz y luego expande a nodos cada vez mas lejanos a niveles sucesivos


Depth First Search Preorder: >>> root >>> izq >>> dcha
explora el nodo actual, luego los nodos del subarbol izq y finalmente los nodos del subarbol dcho





*/

