/*>>> LISTAS ENLAZADAS : consta de nodods interconectados. estos nodos contienen un valor y una referencia al siguiente nodo
Estructura : 
            inicio => dato     |=>     dato     |=>     dato     
                      Puntero =|       Puntero =|       Puntero =>  NULL

>>> EJEMPLO <<<             */

function LinkedList(){
    this.head = null;
    this.length = 0;
}
function Node(element){
    this.value = element
    this.next = null;
}

 // ! METODO PARA AGREGAR ELEMENTOS

LinkedList.prototype.add = function(element){  
    let node = new Node(element);
    let current = this.head;
    //if(current === null)
    if(!current){   // aca entra solo para enganchar el primer 
        current = node;     //nodo y nunca mas
        this._length++;
        return node;
    }
    // while(current.next !==  null)
    while(current.next){ // solo entra aca si next NO es null
        current = current.next;
    }
    current.next = node;
    this._length++;       
    return element;
}

// ! METODO TIPO CONTADOR 

LinkedList.prototype.size = function(){
    let current = this.head
    let counter = 0
    if(current === 0 ){
        console.log('La lista esta vacia')
    }
    while(current !== null){
        console.log(current.value);
        counter++
        counter = counter.next
    }
    return counter
}

let newList = new LinkedList       // esto se hace para INSTANCIAR 
console.log(newList(5))    //Node: {value: 5, next: Node null}
console.log(newList(7))   //Node {value: 7, next: null}
console.log(newList(2))  //Node: {value: 2, next: null}
console.log(newList)    //LinkedList { Node: {value: 5, next: Node {value: 7, next: {value: 2, next: null}}}}
console.log(newList.size)

/*
>>> HAST TABLES : son estructuras de datos que nos permiten crear una lista de pares en clave-valor. de este modo podremos retornar un valor a partir de sus contraseñas que tendremos de antemano
ESTRUCTUREA

KEY             BUCKETS             ENTRIES
henry             001            henry | 453-7524   //(NO SE GUARDA EN ORDEN, PUEDE TOCAR
                  002                               // CUALQUIER POSICION DEL BUCKETS)

cada Buckets es la posicion del array donde se va a guardar la informacion 
una vez entendiendo la posicion del buckets, crea un objeto con su clave-valor {clave: henry, valor: 453-7524}

>>> EJEMPLO <<<             */

function HastTable (){
    this.array = []
    this.numBuckets = 35
}
HastTable.prototype.hash = function(key){    // este metodo solo me dice 
    let hash = 0                             // en que posicion guarda la key
    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i)           // charCodeAt() me devuelve el codigo numerico de 
    }                                       //cada letra que recorremos del string
    
    return hash  % this.numBuckets      // entrega 7 (osea que se va a guardar en la posicion 7
                                        // de la BUCKETS)
}
HastTable.prototype.set = function(key, value){  //metodo para generar y guardad la key:value
    if(typeof key !== 'string') // typeof = retorna el tipo de dato que es pero como 'string'
        throw TypeError('keys must be string')     // throw TypeError = manda un error 
    
    let index = this.hash(key) //invoco al metodo hash pa saber en que posicion guardar 
    if(!this.array[index]){         // preguntamos si pa pusicion esta libre 
        this.array[index] = {}      //aca creamos el objeto en el indice
    }
    this.array[index][key] = value      // aca guardamos la key:value
}