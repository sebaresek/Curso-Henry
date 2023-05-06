/*
* ORM (Object Relation Mapping) : 
es una herramienta que se utiliza para mapear objetos de un lenguaje de programacion a tablas de una base de datos relacional. esto permite que los desarrolladores interactuen ocn la bd utilizando codigo en lugar de consultas SQL directas 

* SEQUELIZE : 
es una orm para node que permite interactuar con base de datos relacionales (PostgreSQL en nuestro caso)
Install && configure 
npm i --save sequelize
npm i --save pg
npm i --save pg-hstore

* SINCRONIZACION :
para nuestra base de datos se active en nuestro codigo tendremos que sincronizarla para eso opcupamos el metodo sync EJEMPLO: 

const DB_USER = 'postgres'
const PASSWORD = 'smile4.20'
const PORT = 'localhost:5432'

const {Sequelize } = require('sequelize');
const sequelize = new Sequelize(`postgres://${DB_USER}:${PASSWORD}@${PORT}/nombreDeLaDataBase`, {logging : false});
await sequelize.sync( {force : true | false  } )
force es una opcion que acepta este metodo. nos permite indicar si queremos resetear o no la base de datos

* DATATYPESS : 
siempre tendremos que indicar que tipo de dato guardaremos en cada propiedad de nuestro modelo para  esto utilizaremos el objeto dataTypes

* VALIDATIONS & CONSTRAINRTS :
dentro de cada propiedad podremos hacer validaciones que nos permiten generar modelos robustos y seguros  

* TIMESTAMPS : 
son columnas (createAt y updateAt) que registran el tiempo de creacion y actualizacion de cada registro de una tabla de manera automatica 
si no queremos que estee se le agrega como parametro el {timestamps: false }

* RELATIONS :
sequelize permite establecer una conexion entre distintas tablas mediante una clave foranea



















*/