/*

* EVENT LOOP : 
js utiliza un modelo de bucle de tiempo para ejecutar sus procesos, este modelo esta basado en un bucle de eventos que es responsable de ejecutar el codigo, compilarlo y procesar y ejecutar subtareas en cola

* FUNCIONES GENERADORAS : 
es un tipo especial de fn que se pueden pausar y nos permiten reproducir valores a lo largo del tiempo, la sintaxis es como la de cualquier otra fn, la palabra reservada para pausarla o continuarla es yield.

* ESTADOS DE UN OBJETO GENERATOR :
pueden ser de dos estados, suspended nos dice que la generator function se detuvo pero que su proceso no finalizo, closed nos avisa que por algun motivo la fn termino su proceso

* RUN-TO- COMPLETION MODEL :
las fn que conociamos hasta ahora en js seguian este modelo donde la fn se ejecuta por completo hasta completarse encontrar un return o tener un error 

las fn generadoras retornan un valor 
fn* sirve para declarar una fn generadora que retorna un objeto generador sobre el cual se puede invocar el metodo next()

* ASYNC / AWAIT: 
permite codigo asincrono basado en promesas sin necesidad de encadenarlas explicitamente
es una forma de manejar promesas que nos permite ejecutar funciones asincronas manteniendo un codigo limpio ordenado y prolijo

* TRY / CATCH :
es un bloque de instrucciones para manejar errores donde el try ejecuta el codigo y el catch detecta errores

* THROW : 
genera un error y finaliza la ejecucion de la generator function

* success : 
la promesa retornada se va a resolver al valor retornado por la fn asincrona

* error  : 
la promesa retornada se va a rechazar con la excepcion lanzada por la fn asincrona




*/