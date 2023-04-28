const charactersRouter = require('express').Router();

const { getCharacters } = require('../../controllers/charactersController');

charactersRouter.get('/', async (req, res) => {
    try {
        const allCharacters = await getCharacters()
        return res.json(allCharacters)
    } catch (error) {
        
    }
})


module.exports = charactersRouter;