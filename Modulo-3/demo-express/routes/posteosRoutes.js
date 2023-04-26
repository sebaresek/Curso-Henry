const express = require('express');
const routerPosteos = express.Router();

const users = []
let id = 0;
routerPosteos.post('/', (req, res) => {
    console.log(req.body);
    const { name, alumnos } = req.body

    const newUser = {
        id: ++id,
        name,
        alumnos
    }

    users.push(newUser)

    res.json(users)
})

module.exports = routerPosteos;