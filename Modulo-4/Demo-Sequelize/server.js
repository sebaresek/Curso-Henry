// CONFIG del SERVER -> midellware

const express = require("express");

const server = express();

server.use(express.json()); // body -> view
server.use(express.urlencoded({ extended: false })); // info FORMULARIO

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hola" });
});

//-------------------------------------------------------------------------------------------------------------
// CONTROLLERS de las ROUTES
const { Op } = require("sequelize");
const { User, Discipline, Workshop } = require("./db");
// User { create, findOne, findByPk, build, etc...}

server.post("/user/create", async (req, res) => {
  const { name, email, workId } = req.body;

  // const user = await User.build({name,email}) // arma el objeto
  // await user.save()

  const user = await User.create({ name, email });

  if (workId) {
    const work = await Workshop.findByPk(workId);
    // RELACIÓN  **********************
    await user.setWorkshop(work); // setWorkshop setWorkshop setWorkshop setWorkshop
  }

  console.log(user.dataValues);
  res.status(200).json(user);
});

server.get("/user/include", async (req, res) => {
  const { name } = req.body;

  const user = await User.findOne({
    where: {
      name,
    },
    include: Workshop
  });
  console.log(user.dataValues);
  res.status(200).json(user);
});

server.post("/work/create", async (req, res) => {
  const { name, description } = req.body;
  const work = await Workshop.create({ name, description });
  console.log(work.dataValues);
  res.status(200).json(work);
});

server.delete("/work/destroy", async (req, res) => {
  const { id } = req.body;
  const work = await Workshop.destroy({
    // nos devuelve un número
    where: {
      id,
    },
  });
  // const workAll = await Workshop.truncate(); // elimina todo lo de la tabla

  console.log(work.dataValues);
  res.status(200).json(work);
});

server.put("/work/update", async (req, res) => {
  const { name, description, id } = req.body;
  try {
    if (name && description && id) {
      const work = await Workshop.update(
        // [1]
        {
          name,
          description,
        },
        {
          where: {
            id,
          },
        }
      );
      console.log(work.dataValues);
      res.status(200).json(work);
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

server.post("/work/bulkcreate", async (req, res) => {
  const { name, description, id } = req.body;

  const [work, created] = await Workshop.findOrCreate({
    where: { id },
    defaults: {
      name,
      description,
    },
  });
  // [{work},{boolean}]
  console.log("work", work);
  console.log("created", created); // cuando lo crea es true
  if (created) {
    res.status(200).json({ message: "tu work fue creado", work });
  } else {
    res.status(200).json({ message: "este work ya existe", work });
  }
});

server.get("/work/all", async (req, res) => {
  const { str } = req.body;
  // [{name,description},{name,description},{name,description}]
  const works = await Workshop.findAll();

  // const works = await Workshop.findAll({
  //   where: {
  //     name: {
  //       [Op.like]: "%" + str + "%",
  //     },
  //   },
  // });

  console.log(works.dataValues);
  res.status(200).json(works);
});

server.post("/discipline/bulk", async (req, res) => {
  const { disciplines } = req.body;
  // [{name,description},{name,description},{name,description}]
  const dis = await Discipline.bulkCreate(disciplines);
  console.log(dis.dataValues);
  res.status(200).json(dis);
});

server.get("/discipline/findone", async (req, res) => {
  const { name } = req.body;
  const dis = await Discipline.findOne({
    where: {
      name,
    },
  });
  console.log(dis.dataValues);
  res.status(200).json(dis);
});

module.exports = server;

/* index.js
const app = require("./app.js")
app.listen(2000,()=>{
    console.log("port....")
})
*/

/*
LAS RELACIONES

*** CREAR CREAR CREAR ***
const { User, Discipline, Workshop } = sequelize.models
// 1:1                  SET
Discipline.hasOne(Workshop); // FK Workshop      work.setDiscipline(idDis)  
Workshop.belongsTo(Discipline);

// 1:N                 SET
Workshop.hasMany(User); // FK  User      user.setWorkshop(idWork)
User.belongsTo(Workshop);

// N:N                ADD
User.belongsToMany(Discipline, { through: 'UserDiscipline' }); // se crea la tabla intermedia UserDiscipline
Discipline.belongsToMany(User, { through: 'UserDiscipline' });

user.addDiscipline(idDis)                     discipline.addUser(idUser)
user.addDisciplines([varios idsDis])          discipline.addUsers([varios idsUsers])

*** TRAER TRAER TRAER ***  INCLUDE
JOIN -> include
*/
