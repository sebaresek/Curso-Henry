/// =========================================================================== ///
/// =============================== HENRY-CATS ================================ ///
/// =========================================================================== ///

'use strict'

let cats = []
let accessories = []

module.exports = {

  testCats: () => cats,

  testAccessories: () => accessories,

  reset: function () {
    // No es necesario modificar esta función. La usamos para "limpiar" los arreglos entre test y test.

    cats = []
    accessories = []
  },

  // ==== COMPLETAR LAS SIGUIENTES FUNCIONES (vean los test de `controller.js`) =====

  addCat: function (name) {
    // Agrega un nuevo gato, verificando que no exista anteriormente su nombre.
    // Debe tener una propiedad <age> que inicialmente debe ser '1 year'.
    // Debe tener una propiedad <color> que inicialmente es un array vacío.
    // Debe tener una propiedad <accessories> que inicialmente es un array vacío.
    // El gato o gata debe guardarse como un objeto con el siguiente formato:
    // { name, age: '1 year', color: [], accessories: [] }
    // En caso exitoso debe retornar el objeto, osea el gato creado'.
    // En caso de haber un gato existente, no se agrega y debe arrojar el Error ('El gato o gata ya existe') >> ver JS throw Error
    const existingCat = cats.find(cat => cat.name === name);
    if (existingCat) {
      throw new Error('El gato o gata ya existe');
    }
    const newCat = {
      name,
      age: '1 year',
      color: [],
      accessories: []
    };
    cats.push(newCat);
    return newCat;
  },
  listCats: function (age) {
    // Si no se recibe parametro <age> retornar todos los gatos del array 'cats'
    // En caso de recibir el parámetro <age: "1 year">, devuelve sólo los gatos correspondientes a dicho age.
    // Si recibe parámetro <age> pero lo recibe con diferente edad, debe arrojar el Error ('El gato o gata tiene una edad diferente') >> ver JS throw Error
    if (!age) {
      return cats;
    } else if (age === '1 year') {
      return cats.filter(cat => cat.age === age);
    } else {
      throw new Error('El gato o gata tiene una edad diferente');
    }
  },

  addAccessory: function (obj) {
    // Agrega un nuevo accesorio al catálogo.
    // Si el accesorio ya existe, no es agregado y arroja un Error ('El accesorio con el id <id> ya existe')
    // Debe devolver el mensaje 'El accesorio <nombre_accesorio> fue agregado correctamente'
    // Inicialmente debe guardar la propiedad <popularity> del accesorio como 'low'
    const existingAccessory = accessories.find(accessory => accessory.id === obj.id);
    if (existingAccessory) {
      throw new Error(`El accesorio con el id ${obj.id} ya existe`);
    }
    // Agregar la propiedad 'popularity' con valor 'low'
    obj.popularity = 'low';
    // Agregar el nuevo accesorio al catálogo
    accessories.push(obj);
    return `El accesorio ${obj.type} fue agregado correctamente`;
  },

  getAccessories: function (type, color) {
    // Devuelve un array con todos los accesorios.
    // Si recibe parámetro "type", debe retornar  los accesorios que coincidan con el tipo.
    // Si recibe parámetro "color" debe retornar los accesorios que coincidan con el color
    // Si recibe ambos parámetros, se devuelven los accesorios que coincidan con el color o con el tipo
    let newAccesories = accessories;
    if (type && color) {
      return newAccesories.filter(accessory => accessory.type === type || accessory.color === color);
    } else if (type) {
      return newAccesories.filter(accessory => accessory.type === type);
    } else if (color) {
      return newAccesories.filter(accessory => accessory.color === color);
    } else {
      return newAccesories;
    }
  },

  deleteAccessory: function (id) {
    // Elimina un accesorio del array
    // Si el id no existe dentro del array de accesorios, arrojar un Error ('El accesorio con el id <id> no fue encontrado')
    // Una vez eliminado el accesorio del array, devolver un mensaje que diga 'El accesorio con el id <id> fue eliminado correctamente'
    const index = accessories.find((element) => element.id === id)
    if (!index){
      throw new Error(`El accesorio con el id ${ id } no fue encontrado`);
    }
    accessories = accessories.filter((element) => element.id !== id);
    return `El accesorio con el id ${ id } fue eliminado correctamente`;
  },

  modifyAccessory: function (obj) {
    // Modifica un accesorio del array
    // Si el id no existe dentro del array de accesorios arrojar un Error ('Accesorio no encontrado')
    // Si el objeto viene vacio, arrojar un Error ('No se detectaron cambios a aplicar')
    // Una vez modificado el accesorio del array, devolver el accesorio modificado
    if (Object.keys(obj).length === 0) {
      throw new Error("No se detectaron cambios a aplicar");
    }
    const index = accessories.findIndex((element) => element.id === obj.id);
    if (index === -1) {
      throw new Error("Accesorio no encontrado");
    }
    accessories[index] = { ...accessories[index], ...obj };
    return accessories[index];
  },
  

  addCatAccessory: function (catName, catAccessory) {
    // Agrega un accesorio a un gatito
    // Si el gato no existe arrojar un Error ('El gato <nombre_gato> no existe')
    // Si el gato ya tiene puesto el accesorio, arrojar un Error('El gato <nombre_gato> ya tiene el accesorio puesto') y no lo agrega
    // Si el accesorio fue agregado correctamente retornar un mensaje: 'El accesorio <tipo_accesorio> fue agregado a <nombre_gato> con exito'
    const catIndex = cats.findIndex(cat => cat.name === catName);
    if (catIndex === -1) {
      throw new Error(`El gato ${catName} no existe`);
    }
    const cat = cats[catIndex];
    const alreadyHasAccessory = cat.accessories.some(accessory => accessory.id === catAccessory.id);
    if (alreadyHasAccessory) {
      throw new Error(`El gato ${catName} ya tiene el accesorio puesto`);
    }
    cat.accessories.push(catAccessory);
    return `El accesorio ${catAccessory.type} fue agregado a ${catName} con exito`;
  },

  updateAccessoryPopularity: function (accessoryId) {
    // Actualiza la propiedad <popularity> del accesorio,
    // Para eso deberás comprobar cuantos gatos visten el accesorio recibido por parámetros (es un id)
    // Si la cantidad de gatos que visten el accesorio son 2, entonces la popularidad del accesorio debe valer 'average'
    // Si la cantidad de gatos que visten el accesorio son 3 (o mas), entonces la popularidad del accesorio debe valer 'high'
    // Si se actualizó la popularidad del accesorio, devolver un mensaje que diga 'La popularidad del accesorio <color_accesorio> <tipo_accesorio> fue actualizada a <popularidad>'
    // Si no se actualizó la popularidad del accesorio, devolver un mensaje que diga 'No hubieron cambios en la popularidad del accesorio <color_accesorio> <tipo_accesorio>'
    // Si el id de accesorio no existe arrojar un Error ('accesorio no encontrado' y no actualiza la popularidad)
    const accessoryIndex = accessories.findIndex(accessory => accessory.id === accessoryId);
    if (accessoryIndex === -1) {
      throw new Error('accesorio no encontrado');
    }
    const accessory = accessories[accessoryIndex];
    const catCount = cats.reduce((count, cat) => {
      if (cat.accessories.some(accessory => accessory.id === accessoryId)) {
        count++;
      }
      return count;
    }, 0);
    if (catCount === 2) {
      if (accessory.popularity !== 'average') {
        accessory.popularity = 'average';
        return `La popularidad del accesorio ${accessory.color} ${accessory.type} fue actualizada a average`;
      }
    } else if (catCount >= 3) {
      if (accessory.popularity !== 'high') {
        accessory.popularity = 'high';
        return `La popularidad del accesorio ${accessory.color} ${accessory.type} fue actualizada a high`;
      }
    }
    return `No hubieron cambios en la popularidad del accesorio ${accessory.color} ${accessory.type}`;
  },
}
