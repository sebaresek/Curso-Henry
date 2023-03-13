// CLI: La interfaz de línea de comandos o CLI, en inglés, command line interfaces, que no es más que una caja negra que puede recibir comandos a través de la escritura 
// por medio de un teclado conectado a la computadora, procesarlos y arrojar un resultado, ya sea positivo si el comando se leyó con éxito, 
// o negativo si escribimos algo erróneo o la computadora no pudo procesar el comando escrito.

// terminal: interfaz de linea de comandos (CLI) para darle ordenes a la computadora y asi recibir resultados especificos

// comando: una instruccion que realiza una accion, ejecuta un proceso que puede leerlo, manipular datos y producir una salida.
	pwd : //imprime el directorio actual sobre el que estamos trabajando
	ls : //listar elementos de la carpeta
	cd : //nos movemos hacia la carpeta que digamos (cd .. va para atras)
	clear : //limpia la terminal
	-l ; //agrega informacion o utilidad al mismo comando
	mkdir : //crea una carpeta vacia
	touch : //crea un archivo vacio
	rm : //elimina un archivo
	rm -r ; //elimina la carpeta 
	help : //entrega una lista de comando
	-v ; //da mas informacion
	
	/* SUBIR REPO
	git init : //hace que una carpeta se transforme en repositorio
	git branch -M main ; // lleva los archivos a la rama main
	git remote add origin https://github.com/sebaresek/Curso-Henry.git : //el link es la direccion del repo
	git add . : //agrega el archivo para posteriormente ocupar
	git commit -m ' ' : //crea el commit
	git pull --rebase origin main : // vincula el github de la pag para que deje de tirar errores
	git push -u origin main : // pushea o sube los archivos 
	ls -a //muestra archivos ocultos
	git status : //estado de la carpeta
	git log : //muestra todos los datos de todos los commit
	git restore : //elimina lo ultimo editado en el archivo 
	git push -u origin main : //para subir archivos
	git pool : //para traer nueva informacion
    track/trakear : //seguimiento de los archivos por git
    stage: //espacio reservado en la memoria ram por git

	
// los comando de la terminal utilizan opciones y argumentos.
// las opciones son todas aquellas despues de un guion y sirven para alterar el comportamiento del comando.
// mientras que los argumentos indican que elemento se aplicara la instruccion o comando escrito

// repositorio: Entendiendo que un repositorio no es más que un almacén o lugar donde se guardan ciertas cosas y que hoy en día esto gracias a la tecnología se da 
// mayoritariamente en la nube, se creo GIT. Este sistema nos permite... Guardar, mantener y manipular archivos a lo largo del tiempo. 	
// Posibilidad de trabajo colaborativo. 	Proyectos guardados en un almacén “repositorio”

// Un commit no es más que una captura instantánea de los cambios preparados en ese momento del proyecto. 
// Las instantáneas confirmadas pueden considerarse como versiones "seguras" de un proyecto. */