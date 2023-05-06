const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
// Ruta para agregar un accesorio a un gato
router.put('/cats/add-accessory', (req, res) => {
    try {
       const { catName, catAccessory } = req.body;
       const cat = controller.listCats().find(cat => cat.name === catName);
       if (!cat) throw Error(`El gato ${catName} no existe`);
       const accessory = cat.accessories.find(access => access.id === catAccessory.id);
       if (accessory) throw Error(`El gato ${catName} ya tiene el accesorio puesto`)
       const messageAddAccessory = controller.addCatAccessory(catName, catAccessory);
       return res.status(200).json({message: `El accesorio ${catAccessory.type} fue agregado a ${catName} con exito`})
    } catch (error) {
       return res.status(400).json({error: error.message});
    }
 });

// No modifiques nada debajo de esta línea
module.exports = router;
