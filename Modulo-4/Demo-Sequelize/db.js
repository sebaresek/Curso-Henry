// CONFIG del ORM -> SEQUELIZE

const { Sequelize, DataTypes } = require("sequelize");
const users = require('./models/User')
const DB_USER = "postgres";
const PORT = "localhost:5432";
const PASSWORD = "1234";

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${PASSWORD}@${PORT}/clubsocial`,
  { logging: false }
);

// Users Disciplines Workshops
// PENDIENTE -> como se modularizan los models
// const Users = sequelize.define("NameModel", {atributs}, timestamps)

users(sequelize)

// const Users = sequelize.define(
//   "User",
//   {
//     // Objeto -> Model -> Tabla
//     name: {
//       type: DataTypes.STRING,
//     //   validate: {
//     //     allowNull: false, // debe llegar la data de este campo
//     //   },
//     },
//     email: {
//       type: DataTypes.STRING,
//     //   validate: {
//     //     isEmail: true, // REGEX -> expresion regular  | Validate
//     //   },
//     },
//   },
// //   {
// //     timestamps: true,
// //     createdAt: false,
// //     updatedAt: "hola"
// //   }
// );

const Disciplines = sequelize.define(
    "Discipline",
    {
      // Objeto -> Model -> Tabla
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
  );

  const Workshops = sequelize.define(
    "Workshop",
    {
      // Objeto -> Model -> Tabla
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
  );

// sequelize.models.User.create({name,email})
// Extraemos los models para crear nuestras relaciones
const { User, Discipline, Workshop } = sequelize.models
// 1:1
Discipline.hasOne(Workshop); // FK Workshop    
Workshop.belongsTo(Discipline);

// 1:N
Workshop.hasMany(User); // FK  User      const user = User.create()   user.setWorkshop(idWork)  setWorkshop
User.belongsTo(Workshop);

// N:N
User.belongsToMany(Discipline, { through: 'UserDiscipline' }); // se crea la tabla intermedia UserDiscipline
Discipline.belongsToMany(User, { through: 'UserDiscipline' }); // setUser addUsers([]) setDiscipline(id)


// MIXINS -> SON los métodos que crea SEQUELIZE por medio de las RELACIONES que nosotros indicamos
// ESTOS métodos nos sirven para crear datos con sus relaciones (si las tiene) correspondiente

module.exports = {
  ...sequelize.models, // { User Discipline Workshops }
  db: sequelize,
};

/*
sequelize {
    config: `postgres://${DB_USER}:${PASSWORD}@${PORT}/clubsocial`
    define: f()
    models: {
        User: {
            name:
            email:
            create: f()
            finOne: f()
            finAll: f()
            update: f()
            ...
        },
        Discipline: {

        },
        Workshop: {

        }
    }
    sync: f()
}
*/
