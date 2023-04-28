// USERS
// RUTA GET => para que me traiga a todos los usuarios o busque por nombre
// RUTA GET /:id => para que me traiga el usuario con el id correspondiente
// RUTA POST => para crear un nuevo usuario
// RUTA PUT => para modificar el usuario correspondiente
// RUTA DELETE /:id => para eliminar al usuario correspondiente

// const express = require('express');
// const usersRouter = express.Router();

// const { Router } = require('express');
// const usersRouter = Router();

const usersRouter = require('express').Router();
const { getUsers, getUsersByName, getUserById, postUser, updateUser, deleteUser } = require('../controllers/controllers');

usersRouter.get('/', (req, res) => {
    try {
        const { name } = req.query;

        if(!name) return res.status(200).json(getUsers());

        const users = getUsersByName(name);
        
        if(users.error) throw Error(users.error);
        return res.status(200).json(users);

    } catch (error) {
        return res.status(404).send(error.message);
    };
});

usersRouter.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const user = getUserById(id);

        if(user['error']) throw Error(user.error);
        return res.status(200).json(user);

    } catch (error) {
        return res.status(404).send(error.message);
    };
});

usersRouter.post('/', (req, res) => {
    try {
        const { name, lastname, email } = req.body;

        if(!name || !lastname || !email) throw Error('Falta información obligatoria');

        const newUser = postUser(name, lastname, email);
        return res.status(200).json(newUser);

    } catch (error) {
        return res.status(404).send(error.message);
    };
});


usersRouter.put('/', (req, res) => {
    try {
        const { id, name, lastname, email } = req.body;

        if(!id) throw Error('El id es obligatorio');
        
        const user = updateUser(id, name, lastname, email);

        if(user.error) throw Error(user.error);
        return res.status(200).json(user);

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

usersRouter.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const delUser = deleteUser(id);

        if(delUser.error) throw Error(delUser.error);
        return res.status(200).json(delUser);
        
    } catch (error) {
        return res.status(404).send(error.message);
    }
})



module.exports = usersRouter;