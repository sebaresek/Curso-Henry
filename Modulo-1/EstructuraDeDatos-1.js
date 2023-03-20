/* >>> RECURSION : es la tecnica en la que una funcion se llama a si misma para repetir a un procedimiento 

CARACTERISTICAS DE RECURSION : 
la funcion debe llamarse a si misma
el argumento de la fn retornada debe ser distinto al de la fn padre
la fn tiene que tener por lo menos una sentencia de cierre 
tiene que tener un nombre. 
caso base o de corte
necesita al menos un parametro
cuando se llama nuevamente el parametro debe ser distinto o modificado
*/

function factorial(x){
    if (x === 0 || x === 1 ) return 1
    else if (x < 0) return 0

    return x * factorial(x-1)
}

/* COMO SACAR FACTORIAL DE 4
4! = 4 * 3 * 2 * 1  {ESTA SERIA UNA FORMA}
4! = 4 * 3!         {ESTA SERIA OTRA FORMA}
3! = 3 * 2!
2! = 2 * 1!
1! = 1 
0! = 1


ESTRUCTURA DE DATO  :
son el estudio de las distintas formas en las que se pueden organizar la informacion
el objetivo es que la busqueda e insercion de dato sea lo ams eficiente posible


>>> ARRAY : nos permite almacenar una coleccion ordenada de elementos del mismo tipo, referenciados por un indice o posicion 
let arr = [0, 2, 45, 3, 1, 4, 4, 4]    
indice :   0  1   2  3  4  5  6  7




>>> SET : es muy parecido al array; 
set es un objeto y no permite un datos repetidos
Asimismo al ser un objeto no tiene pocisiones o indice 

let arr = [0,2,45,3,1,4,4,4]
let set : new Set(arr)
console.log(arr);     // MUESTRA : [0,2,45,3,1,4,4,4]
console.log(set);       // MUESTRA : [0,2,45,3,1,4,]

// ahora si tenemos objetos o array iguales dentro de un array y lo guarda igual ya que no ocupan el mismo espacio de memoria 

let array = [0,2,45,3,1,{4,45,46},{4,45,46} ]
let set : new Set(array)
console.log(array);     // MUESTRA : [0,2,45,3,1,{4,45,46},{4,45,46} ]
console.log(set);       // MUESTRA : [0,2,45,3,1,{4,45,46},{4,45,46} ]

// set tambien tiene METODOS como ser ; 

set.add(1)
console.log(set);       // MUESTRA : [0,2,45,3,1,{4,45,46},{4,45,46}, 1]

set.delete(2)
console.log(set);       // MUESTRA : [0,45,3,1,{4,45,46},{4,45,46}, 1]




>>> STACK (pila) : siguen una estructura de tipo Last in First Out (LIFO)
es decir; el ultimo que entro es el primero que va a salir
los stack tienen dos operaciones : push() y pop(). esto es porque solo se puede agregar y eliminar elementos en un orden definidos
*/

let stack = [] //[1, 10, 3]

stack.push(1)
stack.push(10)
stack.push(3)

stack.pop() // SACA AL ULTIMO QUE ENTRO OSEA EL 3

function Stack(){
    this.array = []
}
Stack.prototype.agregar = function(num){
    this.array.push(num)
}
Stack.prototype.borrar = function(){
    return this.array.pop()
}

let newStack = new Stack()
newStack.agregar(2)
newStack.agregar(8)
newStack.agregar(5)
newStack.agregar(3)
console.log(newStack) //MUESTRA { array: [2,8,5,3] }
newStack.borrar()
console.log(newStack) //MUESTRA { array: [2,8,5,] }




/*
>>> QUEUE (fila) : siguen una estructura de First in First Out (FIFO)
el primero en entrar es el primero en salir
los stack tienen dos operaciones : push() y shift(). esto es porque solo se puede agregar y eliminar elementos en un orden definidos
push() agrega al final
shift() saca al primero en entrar   
*/