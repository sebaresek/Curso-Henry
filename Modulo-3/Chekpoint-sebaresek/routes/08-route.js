const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
router.post('/cat', (req, res) => {
    try {
      const { name } = req.body;
      const newCat = controller.addCat(name);
      const response = { cat: newCat }; // Agrega la propiedad "cat" a la respuesta
      res.status(200).json(response); // Utiliza el código de estado 201 (Created) para indicar que se ha creado un nuevo recurso
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


// No modifiques nada debajo de esta línea
module.exports = router;
