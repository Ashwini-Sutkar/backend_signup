const Sequelize = require("sequelize"); //This line imports the Sequelize library, which is used for interacting with SQL databases, into the current script or module.
const db = require("../../config/db");


const login = db.define("login", {
  id: { //  auto-incrementing integer that serves as the primary key.
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  name: { //  string field representing the user's name. It cannot be null.
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: { //  string field representing the user's email address. It cannot be null, must be unique, and must be in a valid email format.
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  password: {  // string field representing the user's password. It cannot be null.
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = login;
// The model is then exported, making it available for use elsewhere in the application. This allows you to perform CRUD (Create, Read, Update, Delete) operations on the "login" table using Sequelize methods.
