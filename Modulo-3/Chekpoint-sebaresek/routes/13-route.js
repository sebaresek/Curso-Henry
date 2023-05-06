const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

// Escribe la lógica de las rutas acá
router.put('/accessories/update-popularity', (req, res) => {
    try {
       const { id } = req.body;
       const popularidadMessage = controller.updateAccessoryPopularity(id);
       if (!popularidadMessage) throw Error('accesorio no encontrado');
       return res.status(200).json({message: popularidadMessage});
    } catch (error) {
       return res.status(404).json({error: error.message});
    }
 });

// No modifiques nada debajo de esta línea
module.exports = router;
