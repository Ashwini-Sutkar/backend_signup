const Sequelize = require("sequelize");
const db = require("../../config/db");

const login = db.define("login", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = login;
