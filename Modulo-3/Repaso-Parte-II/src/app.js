// Para las variables de entorno
require('dotenv').config();

// Dependencias
const express = require('express');
const morgan = require('morgan');
const server = express();

// Rutas
const charactersRoutes = require('./routes/charactersRoutes/getCharacters');

// Middlewares
server.use(express.json());
server.use(morgan('dev'));

// Modularización de rutas
server.use('/characters', charactersRoutes);



// Ruta de prueba
server.get('/', (req, res) => {
    res.send('funciona todo bien')
});


module.exports = server;