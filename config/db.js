
const mysql = require("mysql");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  let message = !err ? "connected" : "connection failed";
 
});

// adding some code for sequelize
const dbforSequlize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
module.exports = dbforSequlize , connection;