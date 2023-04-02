//TODO   BUSCAR TAG CLASS

//? AJAX = 
// En resumen, AJAX se trata de actualizar partes de una página web sin tener que recargar toda la web. Eso es muy útil si tu sitio web es grande , no querrá que tus usuarios tengan que cargar la misma información varias veces.

//* Las tecnologías que forman AJAX son
// XHTML y CSS, para crear una presentación basada en estándares.
// DOM, para la interacción y manipulación dinámica de la presentación.
// XML, XSLT y JSON, para el intercambio y la manipulación de información.
// XMLHttpRequest, para el intercambio asíncrono de información.
// JavaScript, para unir todas las demás tecnologías.


//? HTTP = es un protocolo que tiene metodos
// metodo => get
// path => es la '/' ej: www.google.com'/'imagenes
// http/1.1 => version del protocolo
// headers => es informacion que necesita para llegar al servidor
// headers => Host: developer.mozilla.org       
// headers => accept-language: fr              


//* METODOS O SOLICITUDES DE HTTP :  

//? get
//* traer / pedir 
// get/mascota/{mascotaId} => nos devuelve una mascota encontrada por id

//? post 
//* postear, se utiliza para crear 
// pots/{mascota}/subirImagen => nos permite subir una imagen


//? put 
//* permite actualizar o modificar datos
// put/mascota => nos permite editar la inf. de la mascota


//? delete 
//* para eliminar o borrar
// delete/mascota/delete => elimina una mascota


//? JSON = javaScript Object Notation 
//* es un formato de como se mandan las respuestas, es ligero de intercambio de datos. es de facil lectura y escritura para los usuarios. es facild e analizar y generar por parte de las maquinas. se basa en un subconjunto de lenguaje de programacion de js. 


//**********************************************************************/

const URL_BASE = 'https://jsonplaceholder.typicode.com'
// a la constante la definimos con mayus porque es una constanste constante 
const listaUsuarios = document.querySelector('#listaUsuarios');

const createListItem = (user => {
    //  aca es donde voy a hacer el recorrido y crear en cada paso un elemento html que represente a cada usuario
    const li = document.createElement('li');
    li.innerHTML = `${user.name}  -  ${user.email}`;

    // const listaUsuarios = $('#listaUsuarios')[0];
    // listaUsuarios.append(li);
    //* el comentario es lo mismo que decir lo de abajo

    listaUsuarios.appendChild(li);
});

const showUsers = (users) =>{
    users.forEach(createListItem);
};


//* COMO PEDIR O OCUPAR DATOS DE UN SERVIDOR !!!!
$.get(`${URL_BASE}/users`, showUsers);



//* COMO BORRAR O OCUPAR DELETE !!!!

// $.ajax({
//     url: '', //aca iria el host o servidor sobre donde trabajamos
//     type: 'DELETE', // propiamente dicho; borrar
//     success: () => {}, // esta es la cb que hacemos cuando termina
// })




