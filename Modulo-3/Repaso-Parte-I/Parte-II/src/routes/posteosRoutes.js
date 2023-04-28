// POSTEOS
// RUTA GET => para que me traiga a todos los posteos
// RUTA POST => para crear posteos
// RUTA GET /:id => para que me traiga un posteo específico
// RUTA PUT => para modificar a un posteo
// RUTA DELETE /:id => para eliminar un posteo específico


// const express = require('express');
// const posteosRouter = express.Router();

// const { Router } = require('express');
// const posteosRouter = Router();

const posteosRouter = require('express').Router();
const { createPost, getPosteos, getPosteosByTitle, getPosteoById, updatePosteo, deletePosteo } = require('../controllers/controllers');

posteosRouter.post('/', (req, res) => {
    try {
        const { userId, title, content } = req.body;

        if(!userId || !title || !content ) throw Error('Falta info master');

        const newPost = createPost(userId, title, content);

        if(newPost.error) throw Error(newPost.error);
        return res.status(200).json(newPost);

    } catch (error) {
        return res.status(404).send(error.message);
    };
});

posteosRouter.get('/', (req, res) => {
    try {
        const { title } = req.query;

        if(!title) return res.status(200).json(getPosteos());

        const posteos = getPosteosByTitle(title);
        return res.status(200).json(posteos);

    } catch (error) {
        return res.status(404).send(error.message)
    };
});

// id === find() esto es único, es un objeto
// name === filter() estos son varios, es un array de objetos
posteosRouter.get('/:id', (req, res) => {
    try {
        const { id } = req.params;

        const posteoFound = getPosteoById(id);
        return res.status(200).json(posteoFound);

    } catch (error) {
        return res.status(404).send(error.message);
    };
});

posteosRouter.put('/', (req, res) => {
    try {
        const { id, title, content } = req.body;

        if(!id) throw Error('El ID es necesario');

        const postFound = updatePosteo(id, title, content);

        return res.status(200).json(postFound);

    } catch (error) {
        return res.status(404).send(error.message);
    };
});

posteosRouter.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;

        const delPosteo = deletePosteo(id);
        return res.status(200).json(delPosteo);

    } catch (error) {
        return res.status(404).send(error.message);
    }
})


module.exports = posteosRouter;