/*
* PASO A PASO A MOSTRAR UNA PAGINA : 

* 1>>> DOM (document objet model) : 
es la representacion en un objeto de una pag html aparseada.
head: meta, link, title, styles
body: p, div, span, h1-h6, img, 

* 2>>> cssom (ccs Object Model): 
es un objeto representando todos los estilos asociados al DOM. agrega estilos a la paginas (los que vienen por default los tag (etiquetas)). es un modelo que representa todos los estilos asociados al DOM

* 3>>> render Tree : 
(Tambien es una estructura de arbol) es una combinacion del DOM y CSSOM, en donde se deja solo los elementos visibles

* 4>>> layout: 
determina el tamaño del viewport. Da el contexto para calcular los estilos. el view port se puede configurar a traves del tag meta viewport

* 5>>> paint: 
la parte visible de la pagina se convierte en pixeles (pintar lo que va a mostrar en la pantalla)


* >>> DOM Api: 
el browser nos da una api para interactuar con el DOM utilizando js. 
esta representado por un obj global > document la estructura del html, es como un arbol

* >>> SELECTORES : 
nos permite buscar y recuperar elementos del DOM. el elemento retornado sera un obj de js que representa 


* >>> EVENTOS: 
es una señal que algo sucedio. todos los nodos del DOM pueden generar estas señales.
un event listener es el encargado de escuchar y hacer algo 

* >>> event target: 
es una interfaz implementada por los objetos que pueden recibir eventos y tener listeners para los objetos
eventos: accion (usuario) - reaccion (dom) 

* node: 
es una interfaz en la cual un numero de objetos de tipo DOM Api heredan. esto permite que los objetos puedan ser tratados similarmente 
element: representa un elemento html  */



//  la funcion recibe el evento click
function cambiarClase(event){

    // sacamos el elemento que disparo el evento, de donde ?
    // de event.target => elemento responsable de disparar el evento
    let divClickeado = event.target;

    if(divClickeado.className === 'clase1') divClickeado.className = 'clase2';
    else divClickeado.className = 'clase1'; 
};

function onClick(){
    // 1 creamos el parrafo
    let p = document.createElement('p');

    // 2 le dimos el texto al parrafo
    p.innerHTML = 'Nuevo Mensaje de Seba Resek';

    // 3 creamos el div que debecontener el parrafo
    let div = document.createElement('div');
    div.className = 'clase1';

    // creamo un event listener para cuando clikeamos en el div, se ejecute
    // la funcion cambiarClase
    div.addEventListener('click', cambiarClase);

    // 4 agregamos el parrafo al div
    div.appendChild(p);

    // 5 nos trajimos el contenedor que estaba ya en el body
    let contenedor = document.querySelector('#contenedor'); 

    // 6 agrupamos el div del parrafo al contenedor
    contenedor.appendChild(div);
}

let boton = document.querySelector('#boton')
boton.addEventListener('click', onClick)