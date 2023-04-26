/*
handler hace referencia a manejador

* SINCRONICO : 
el proceso de ejecucion siempre espera la respuesta poder seguir leyendo el codigo

* ASINCRINICO : 
cuando la ejecucion se encuentra con ejercicios que va a demorar mucho las delega para poder seguir leyendo el resto ddel codigo

* PROMESA :
representa el eventual resultado de una operacion asincronica. las promesas son objetos que representa y gestiona el ciclo de vida de una respuesta futura 
el objeto mantiene dentro suyo : 

status ( 
    pending, 
    * fulfilled,
    ! rejected 
    )
las promesas siempre comienza con un status en PENDING {undefined} la cual viene por default y cambia su status una sola unica vez 
* FULFILLED {value} :
si se resuelve correctamente cambia a su estatus fulfilled
! REJECTED {error} : 
si se rechazacambia su status a rejected

* EXECUTED PROMISE : 
una vez que una promesa se resuelve o es rechazada ejecuta sus handlers
si agregamos un handler nuevo, lo ejecutara con el mismo valor con el que se resolvio

? .then
retorna una promesa, es por eso que se puede encadenar. el then va a contener 2 cb una de value otra de error. su valor de resolucion es el resultado del handler

? .catch 
maneja el error sin importar en que then haya sucedido el error. ej:
.catch(error => console.log(error))

? .finally 
siempre se va a ejecutar lo que ponga en finally ya sea que el estado se haya rechazado o aprobado. ej:
.finally(() => console.log('este es el finally'))



*/