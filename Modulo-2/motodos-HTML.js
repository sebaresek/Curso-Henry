
//? createElement
//* crea un elemento. EJEMPLO : 

//!  document.createElement('div'); 
//* crea un <div> </div>
//!  document.createElement('span'); 
//* crea un <span> </span> 


//? class  
/* 
* El atributo global class es una lista de las clases del elemento separada por espacios . Las clases permiten a CSS y Javascript seleccionar y acceder a elementos específicos a través de los selectores de clase o funciones como el método document.getElementsByClassName del DOM. */


//? className
//* obtiene y establece el valor del atributo class del elemento especificado. asignamos el nombre de la clase. EJEMPLO: 

//! div.className = 'clase1'


//? appendChild 
/* 
* (agrega elementos, es como un add o insert). Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado. Si el hijo(Child) es una referencia(hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en si el (Child) es una referencia a un nodo existente en el documento. EJEMPLO: */

//! buildToDo(toDoItems).forEach(element => toDoContainer.appendChild(element));


//? addEventListener() 
/*
* Registra un evento a un objeto en específico. El Objeto especifico (en-US) puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest. Para registrar más de un eventListener, puedes llamar addEventListener() para el mismo elemento pero con diferentes tipos de eventos o parámetros de captura. EJEMPLO : */

//!  let button = document.querySelector('#addButton') 
//!  button.addEventListener('click', addToDo); 


//? document.querySelector() 
/* 
* Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores. EJEMPLO: En este EJEMPLO: obtendremos el primer elemento del documento con la clase "miClase": */

//!  var el = document.querySelector(".miClase");
//!  const div = document.querySelector('divId');



//? document.querySelectorAll() 
/* 
* si en el parametro ponemos por ejemplo '.parrafo' hace referencia a que tiene que buscar todos los que tienen clase 'parrafo'. si en el parametro podemos solo por ejemplo 'p' va a traer todos los que tengan la etiqueta 'p'
*devuelve una lista de elementos del documento que coinciden con el grupo de selectores indicados. */


//? document.getElementsByTagName('p')[1]
/* 
* le paso como argumento el nombre de la etiqueta que quiero tener. retorna lo que le paso por argumento. Tambien podes poner entre corchetes la posicion de la 'p' (p = parrafo) de la que queres traer .*/


//? document.getElementsByClassName('nombreDeLaClase')
//* sirve para buscar pero por clase 


//? document.getElementsById('nombreDelId')
//* sirve para buscar pero por id (el cual es unico e irrepetible) 


//? titulo.innerHTML 
//* MUESTRA LO QUE CONTIENE PARRAFO
//* es una propiedad del objeto y muestra o sobreescribe lo que contiene, es decir el texto que contiene la variable. EJEMPLO: 

//!  titulo.innerHTML = 'hola chikis'    
//!  AHORA 'TITULO' CONTIENE EL STRING 'hola chikis'


//? classList
//* separa por palabra y hace una array con las mismas  por EJEMPLO: 

 //!  <span class = 'hola buenos dias'> </span> 
//!   ENTREGA =  ['hola', 'buenos', 'dias']