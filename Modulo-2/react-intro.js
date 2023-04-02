//?    react  =  libreria 
// es una libreria de js declarativa, eficiente y flexible. se ultiliza para contruir interfeces de usuarios

//* VIRTUAL DOM : 
// es una tecnica que permite actualizar eficientemente la interfaz de usuario al minimizar la cantidad de actualizaciones directas al DOM del navegador mediante la actualizacion del DOM VIRTUAL

//* Tipos de programacion : 
// imperativa : describe como hacer algo paso a paso. se enfoca en la ejecucion de instrucciones
// declarativa : describe que se quiere hacer sin especificar como hacerlo. se enfoca en la logica de la solucion y deja la implementacion especifica al compilador o interprete 

//* COMPONENTES : 
// es una unidad modular de la interfaz de usuario. permite dividir una app en partes independientes y reutilizables para una mayor eficiencia en el desarrollo y mantenimiento

//*  PRINCIPIO DE RESPONSABILIDAD UNICA :
// cada componente esta encargado de hacer una unica tarea

//? JSX = 
// mezcla codigo de js con html entonces se puede tener componentes con ambos codigo ya que trabaja de manera declarativa.
// es una extension de js que permite codigo html dentro de archivos de js. es una caracteristicas de react que permite a los desarrolladores escribir codigo mas legible y facil de entender
const element = <h1 classNAme = 'tittle'>Hello !</h1> 

//? BABEL =
// copilador : lo que hace es agarrar un lenguaje de alto nivel y transforma a lenguaje de maqina 
// transpilador : hace que un lenguaje de alto nivel que estamos manejando y lo pasa a otro lenguaje de alto nivel pero mas basico para que el browser pueda entender 
//* babel es transpilador 

//? PROPS DE UN COMPONENTE 
// las propiedades son infoprmacion y funcionalidades que le puede heredar un componente padre a un hijo



{/*
<Title> 
</Title> 
se puede reemplazar por : 
<Title/>  
cuando tenes las cosas en una sola linea 
*/}


<Alumnos alumnos = {alumnos} cohorte = 'cohorte FT-37a'/> /* se le puede mandar la cantidad de propiedades que querramos (son lo que esta dentro del corchete ) y siempre se recibe dentro de un objeto */

{/* fragment (<>  | </>) : sirve para poner todo aca sin etiquetas */}

