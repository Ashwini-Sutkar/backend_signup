const express = require("express");
const dotenv = require("dotenv");

const signup = require("./API/login/route");
const bodyParser = require("body-parser");


const cors = require("cors");
const app = express();
/* Load env */
dotenv.config({ path: "./.env" });
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// //Database Connection for  sequelize model

const dbSeq = require("./config/db");
dbSeq
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
// routing all URL


app.use("/signup", signup);



const port = process.env.PORT || 8081;
// created app.listen by using port

dbSeq
  .sync()
  .then(() => {
    app.listen(port, console.log(`Server started on port ${port}`));
  })
  .catch((err) => console.log("Error: " + err));

module.exports = app;