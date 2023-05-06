// Solo se encarga de levantar nuestro server y todo lo que este requiera
const server = require("./server.js");
const { db, User } = require("./db.js");

server.listen(8001, async () => {
  console.log("port http://localhost:8001");
  await db.sync({ force: true }); // sincroniza todos los models, todas las tablas
  // await User.sync() // sincroniza (crea) solo el model User
}); 

/*
En etapa de creación y modificación de MOdels (de tablas)
{ force: true } -> RESET ->  DROP (delete) a todas las TABLAS y vuelve a crear según su config

En etapa de Consultas (crear, eliminar, modificar datos)
{ force: false } -> mantiene todo igual  y persistente

{ alter: true } -> UPDATE ->  tabla name edad           actualiza y no perdemos datos
                                              email
*/
