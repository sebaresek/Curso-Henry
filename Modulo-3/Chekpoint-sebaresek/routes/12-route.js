const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
router.delete('/accessories', (req, res) => {
    try {
      const { id } = req.body; // Obtener el ID del accesorio desde el cuerpo de la solicitud
  
      if (!id) {
        res.status(400).json({ error: 'Falta el ID del accesorio' });
        return;
      }
      const deletedAccessoryId = controller.deleteAccessory(id); // Llamar a la función deleteAccessory del controlador para eliminar el accesorio
      if (!deletedAccessoryId) {
        res.status(404).json({ error: 'Accesorio no encontrado' });
        return;
      }
      res.status(200).json({ message: `El accesorio con el id ${id} fue eliminado correctamente` }); // Responder con el ID del accesorio eliminado en formato JSON y código de estado 200 (OK)
    } catch (error) {
      res.status(404).json({ error: error.message }); // Responder con un mensaje de error en caso de que ocurra algún problema
    }
});

// No modifiques nada debajo de esta línea
module.exports = router;

