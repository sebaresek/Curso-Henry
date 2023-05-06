const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de tu ruta GET /cats acá
router.get('/cats', (req, res) => {
    try {
      const { age } = req.query; // Obtener el parámetro de edad desde los query params
      const cats = controller.listCats();
      if (age) {
        const filteredCats = cats.filter(cat => cat.age === age); // Filtrar los gatos que tengan la edad especificada
        if (filteredCats.length === 0) {
          throw new Error('El gato o gata tiene una edad diferente');
        }
        res.status(200).json(filteredCats);
      } else {
        res.status(200).json(cats); // Responder con todos los gatos si no se especifica la edad
      }
    } catch (error) {
      res.status(400).json({ error: error.message }); // Responder con error en caso de que ocurra algún problema
    }
  });
  

// No modifiques nada debajo de esta línea
module.exports = router;
