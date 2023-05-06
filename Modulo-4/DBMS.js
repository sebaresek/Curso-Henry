/*

* DATOS (capo, atributo):  
informacion concreta sobre hechos, elementos, etc... que permite estudiarlos, analizarlos o conocerlos
es la particula minima de información :

* REGISTRO (arrays, tuplas): 
es un conjunto de dato, esto si nos da información 

* UNA TABLA (entidades): 
es una serie de registros

* BASE DE DATOS : 
una base de datos es un conjunto de datos pertenecientes a un mismo conexto y almacenados sistematicamente para su posterior uso.
es una coleccion de tablas, las cuales son almacenadas en las memorias secundarias y lo deberíamos hacer de manera ordenada, para ya sea aprovechar el espacio como para recuperar la información con una buena latencia.

* DBMS (DataBase Management System):
sistema de gestion de bd. son una coleccion de programas que permiten al usuario acceder a una BD, manipular data y hacer consultas

Existen 2 grandes tipos de base de datos:  + Las relacionales(SQL)   + Las no relacionales(NO SQL)
* LAS RELACIONALES TIENEN CARDINALIDAD: 
es la evaluacion de la relacion que existe entre 2 entidades. Leyes: 
+ 1:1: cuando ocurre ambas tablas comparten una misma PK
+ 1:M/M:1 : cuando ocurre la entidad que tiene relacion 1 se le traslada su PK como FK a la entidad que tiene relacion M
+ M:M : cuando ocurre se genera una 3ra entidad que posee como FK las 2 PK de las entidades relacionadas

* MODELO RELACIONAL : 
para el modelado y la gestion de bd es un modelo de datos basado en la logica de predicados y en la teoria de conjuntos


* FORMAS NORMALES: 
Normalización: Cuando se trabaja sobre la normalización de un modelo para resolver un problema, se está realizando un análisis de su lógica funcional. Esta acción de entender un problema permite identificar datos con características y propiedades que dan origen y establecen los atributos

* PRIMERA FORMA NORMAL (1NF) :
.todos los atributos son atomicos un atributo es atomico si los elementos del dominio son simples e indivisibles. no hay grupo de repeticion
+ Cada campo o atributo deben ser atómicos, es decir debe contener un único valor, Por Ejemplo: Nombre y Apellido en un solo campo (siendo dos atributos van en cada campo diferente)
+ No puede haber grupos repetitivos, es decir por ejemplo: una columna de teléfono; ( si el cliente deja 2 números telefónicos) no puede haber una columna con el nombre “telefono1” y “telefono2” para eso se crea una nueva tabla con la PK del cliente y el número necesario de teléfonos 
+ Debe existir una PK llave primaria
Una relación está en primera forma normal si y solo si todos los dominios simples subyacentes de los atributos poseen valores atómicos y monovalentes.

* SEGUNDA FORMA NORMAL (2NF) : 
comple con la 1NF y ademas no hay depenedencia parcial entre los atributos.
Los atributos que dependen de manera parcial de la llave primaria deben ser eliminados o almacenados en nueva entidad

* TERCERA FORMA NORMAL (3NF) : 
la tabla se encuentra en 3FN si es 2FN y si no existe ninguna dependencia funcional transitiva en los atributos que no son clave.
Una relación está en tercera forma normal si y solo si está en 2FN, y si ningún subconjunto de atributos no primarios tiene dependencia entre sí y como segunda medida dependen transitivamente de la clave primaria.

* CUARTA FORMA NORMAL (4NF):
La 4NF se usa mucho en el diseño de base de datos, y garantiza que las dependencias multivaluadas independientes estén efectivamente correctas. La 4NF es el nivel siguiente de normalización después de la forma normal de Boyce-Codd.
Características: Una tabla se encuentra en 4NF si y solo si está en tercera forma normal y no presenta dependencias multivaluadas no triviales

*/