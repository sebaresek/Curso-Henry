const express = require('express');
const routerUsers = express.Router();

routerUsers.get('/:id/:name', (req, res) => {
    const { id, name } = req.params

    if(id == 23 && name === 'dai'){
        const infoUser = {
            cohorte: '37 a',
            name: 'Dai',
            iu: 23,
            alumnos: 'muchos y me hacen reír cuando inicio grabación'
        }
    
        return res.json(infoUser)
    }

    return res.status(404).send('hubo un error mi rey')
})

routerUsers.get('/', (req, res) => {
    const { name } = req.query;

    console.log(req.query);
    if(name){
        return res.send(`aca mandariamos info especifica de ese usuario`)
    }
    return res.send('mando a todos los usuarios')
})


module.exports = routerUsers;