const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

// Escribe la lógica de las rutas acá
router.put('/accessories', async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      // Si req.body viene vacío, se responde con el estado 400 "Bad Request"
      return res.status(404).json({ error: 'No se detectaron cambios a aplicar' });
    }

    const updatedAccessory = await controller.modifyAccessory(req.body);


    if (!updatedAccessory) {
      // Si el accesorio no se encuentra, se responde con un error 404
      return res.status(404).json({ error: 'Accesorio no encontrado' });
    }

    // Responde con el accesorio modificado
    res.status(200).json(updatedAccessory);
  } catch (error) {
    // Si ocurre un error, responde con un error 500 "Internal Server Error"
    res.status(404).json({ error: error.message });

  }
});

// No modifiques nada debajo de esta línea
module.exports = router;
