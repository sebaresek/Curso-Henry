/*

* SQL (Structured Query Language) : 
es el lenguaje mas utilizado para hacer consultas a una base de datos.
es el leguaje de programación que necesitamos o vamos a implementar a la hora de programar base de datos. Este lenguaje tiene 2 categorías: 
1) Data Definition Language DDL: Lenguaje de definición de datos. Es el que se encarga de crear estructuras de nuestra base de datos. Asimismo, DDL tiene algunas sentencias que no permite CREAR (CREATE), BORRAR (DROP), INSERTAR (INSERT), MODIFICAR (ALTER).
2) Data Manipulation Language DML: Lenguaje de manipulación de datos. Asimismo, DML tiene algunas sentencias que no permite MOSTRAR (SELECT), (UPDATE), (DELETE)

* CONTRAINTS : 
es una regla que se aplica a una o varias columnas con el fin de restringir los datos que pueden ser insertados, actualizados o eliminados

* SUB QUERY : 
una subquery es una consulta dentro de otra consulta en SQL. se utiliza para obtener datos mas especficos y precisos, filtrando los resultados de la consulta principal

* JOIN : 
es una operacion que se utiliza para combinar dos o mas tablas en funcion de una columna en comun, sirve para obtener datos relacionados de diferentes tablas en una sola consulta

* TIPO DE DATOS: 
VARCHAR (x) = Admite tanto numero como letras, dentro del paréntesis vamos a poner la cantidad de caracteres máximos que se va a permitir escribir dentro de el. Ejemplo: si ponemos que admita 10 caracteres y se escriben 7, los otros 3 se eliminan para optimizar espacio
CHAR (X) =  Admite tanto numero como letras, dentro del paréntesis vamos a poner la cantidad de caracteres máximos que se va a permitir escribir dentro de el. Ejemplo: si ponemos que admita 10 caracteres y se escriben 7, los otros 3 NO se eliminan por lo tanto este tipo de dato NO optimiza espacios
TEXT =  Admite tanto numero como letras, no se puede controlar la cantidad de caracteristicas que se van a insertar
BOLEAN =   Admite tanto numero como letras. Es un tipo de dato que describe cuando es Verdadero o Falso. También responde en 1/0
INTEGER =  Admite números enteros.
SMALLINT = Admite números pequeños de enteros.
BIGINT = Admite números grandes de enteros.
FLOAT = Admite números reales, es decir con decimales.
SERIAL = Admite números enteros autoincreméntales. Es decir se va sumando x + 1 por cada campo.  
DATE = Admite la fecha. MM/DD/AAAA
TIMESTAMP = Admite la fecha. MM/DD/AAAA  HH/MM/SS

* COMO CREAR UNA TABLA : 
CREATE TABLE personas 
(
    id serial PRIMARY KEY
    apellido varchar(60) NOT NULL,
    nombre varchar(70) UNIQUE,  
    ciudad interger references ciudades(id)
);

* CREAMOS OTRA TABLA
CREATE TABLE ciudades 
(
    id serial PRIMARY KEY
    nombre varchar(70) UNIQUE,  
);


* INSERTAR DENTRO DE LA TABLA CIUDAD : 
INSERT INTO personas(nombre,)
VALUES ('posadas')

* INSERTAR DENTRO DE LA TABLA PERSONAS : 
INSERT INTO personas(nombre, apellido, ciudad)
VALUES ('seba', 'resek', 1)


* COMANDOS : 
\l => lista las DBs
\c nombre => nos conectamos a la DB
\dt => lista las tablas
select => muestra
from => donde esta lo que queres ver
where => condición 
join => hace un salto 
AVG => average saca un promedio
MAX => muestra el valor máximo 
MIN => muestra el valor minimo 
DESC => ordena decendiente 
age => muestra la cantidad de años, meses y días de una persona
date_part => muestra solo el año de la función age
SUM => hace una autosuma de una columna numerica 


* EJEMPLOS:

SELECT SUM(specie_id) FROM characters;

SELECT * FROM personas 
ORDER BY apellido; => muestra todo lo que contiene la tabla en orden alfabetico del apellido 

SELECT * FROM personas 
WHERE ciudad = 1; => muestra todos los datos en donde contenga la ciudad 1

SELECT * FROM personas 
JOIN ciudades
ON personas.ciudad = ciudades.id;  => junta la tablas donde coincidan los id de ciudad (de la tabla personas) y id de la tabla ciudad

SUB-QUERY
SELECT nombre FROM personas //mostrame el nombre de la persona
WHERE ciudad = (            //cuando en ciudad sea igual a
SELECT id FROM ciudades     //mi tabla personas el id ciudad con la pk de ciudades
WHERE nombre = 'posadas'    // y decime cuando coincida en el nombre posadas
); => consultamos a la tabla ciudades con una sub query  el nombre de la o las persona que vive en la ciudad posadas
retorna 'seba'

! OCUPAR SQL EN CMD
* psql -U postgres

*/