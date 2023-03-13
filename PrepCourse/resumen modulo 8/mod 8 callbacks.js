// Supongamos que tenemos una función 1 que recibe por parámetro a una función 2. 
// Cuando la función 1 ejecuta a la función 2 en su interior, se produce un proceso llamado “callback”

// Los callbacks son muy útiles en el mundo de la programación, nos aseguran que una función no se va a ejecutar antes de que se complete una tarea, 
// sino que se ejecutará justo después de que la tarea se haya completado.

function devuelvoUsuario() {
   return 'CAMILO';
}
function devuelvoSaludo() {
   return 'Hola';
}
function saludar(cb1, cb2) {
   return cb1() + ' ' + cb2();
}
var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);

//OTRO EJEMPLO 
let nro1 = 4
let nro2 = null

function obtieneSegundoNro (cb){
  setTimeout(function(){    //SETTIMEOUT: PRIMERO VA LA FUNCION LUEGO LA
    nro2 = 6    //CANTIDAD DE LAGUEO QUE QUERES QUE TENGA 2000 SON 2 SEG
    cb()
  },2000)
}

function suma(){
  console.log(nro1 + nro2)}
obtieneSegundoNro(suma)