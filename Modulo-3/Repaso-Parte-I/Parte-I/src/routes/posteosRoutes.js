// POSTEOS
// RUTA GET => para que me traiga a todos los posteos
// RUTA POST => para crear posteos || {userId, title, content}
// RUTA GET /:id => para que me traiga un posteo específico
// RUTA PUT => para modificar a un posteo
// RUTA DELETE /:id => para eliminar un posteo específico


// const express = require('express');
// const posteosRouter = express.Router();

// const { Router } = require('express');
// const posteosRouter = Router();

const posteosRouter = require('express').Router();




module.exports = posteosRouter;