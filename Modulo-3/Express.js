/*
* EXPRESS : 
es un framework de back-end para construir una APIRest con node.js . es un sofware open source, flexible y minimalista 
comando : npm install express --save

* ROUTER : 
es una fn que nos permitira crear rutas modularizadas con distintos metodos http

* SERVER : 
es una instancia de Express que nos permite crear un servidor, podemos llamarlos como queramos 

* METHOD : 
los metodos que nos provee http : get, put, delete, post 

* PATH : 
es el nombre de una ruta especifica que tiene su propio funcionamiento 

* CONTROLLERS : 
fn que manejan la logica de la ruta

* MIDDLEWARES : 
son funciones que tienen acceso a las requests intervinenedo en allas antes de llegar a las rutas, para utilizarlas es indispensables el callback next()
un http request puede pasar por toda una seria de middlewares antes que una handler route retorne una http response
un middleware POR EJEMPLO es 'morgan'
npm i morgan 
const morgan = require('morgan')
server.use(morgan('dev'))

* PARAMS & QUEY & BODY : 
estas son formas para enviar info desde el cliente al servidor

* CORS : 
permite intercambiar recursos cruzados por la web, su politica de seguridad prohive que se carguen datos de servidores distintos al cliente, esto debe llevar una conf para el intercambio cliente-servidor


* INICIALIZACION : 
importar express  = const express = require('express')
const server = express()
server.listen(3001)


* ENVIO DE INFO POR PARAM:
por lo general se utiliza para informacion unitaria y clasificatoria por ejemplo un identificador
server.get('user/:id', (req, res) =>{})
 








*/