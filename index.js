
const express = require("express");  //allows you to import the Express framework into your Node.js application, 
const dotenv = require("dotenv");   // allows you to load environment variables from a .env file into your Node.js application, enabling you to manage configuration settings such as API keys or database credentials securely


const signup = require("./API/login/route"); //  allows you to import the routing functionality defined in the specified file (route.js in the login directory within the API directory) into your Node.js application. This enables you to organize your code into modular components and define routes for handling requests related to user signup.
const bodyParser = require("body-parser"); // allows you to parse incoming request bodies in your Node.js application. This is essential for handling POST requests and extracting data from the request body, such as form data or JSON payloads. The body-parser middleware simplifies this process by providing methods to parse different types of request bodies into a usable format, making it easier to access and process the data in your application.

const cors = require("cors"); //allows you to enable Cross-Origin Resource Sharing (CORS) in your Node.js application. CORS is a security feature implemented by web browsers to restrict cross-origin HTTP requests initiated from scripts running in the browser. By requiring the cors middleware, you can configure your server to allow or restrict access to resources from different origins, which is particularly useful when building APIs that need to be accessed by clients from different domains.
const app = express(); //initializes an instance of the Express framework, allowing you to create a web server and define routes, middleware, and other functionalities for your Node.js application. This line sets up the foundation for building your application using the features provided by Express.
/* Load env */

app.use(express.static('dist'))
dotenv.config({ path: "./.env" }); //  loads environment variables from a .env file located in the root directory of your project. This line is typically used at the entry point of your application to ensure that environment variables defined in the .env file are available throughout your application. It enables you to manage configuration settings, such as API keys or database credentials, in a separate file, keeping sensitive information out of your codebase.
app.use(bodyParser.json()); // This line tells your Express application to use a middleware called body-parser to understand JSON data sent in HTTP requests. It helps your server to read and process JSON data that clients send when making requests to your server.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));  // This line configures your Express application to parse incoming URL-encoded data with extended options and sets a limit of 50 megabytes for the incoming data size.

/*What is Sequelize in node JS?
  Sequelize is a Node. js-based Object Relational Mapper that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more. An Object Relational Mapper performs functions like handling database records by representing the data as objects.
 */
//Database Connection for  sequelize model
const dbSeq = require("./config/db");   // This line imports a database configuration module named dbSeq from a file located at ./config/db.js into your Node.js application. It allows you to establish a connection to your database using Sequelize, a popular ORM (Object-Relational Mapping) library for Node.js.

// This code tries to authenticate your database connection using the dbSeq configuration. If the authentication is successful, it prints "Database connected..." to the console. If there's an error during authentication, it catches the error and prints it to the console. Essentially, it checks if your application can connect to the database, and if it can't, it logs the error.
dbSeq
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

  debugger
// routing all URL


app.use("/signup", signup);  // This line tells your Express application to use the signup routing module for any requests that match the /signup endpoint. In other words, whenever a client makes a request to the /signup endpoint, the routes defined in the signup module will be used to handle that request.

const port = process.env.PORT || 8081; // This line sets the port number for your server to listen on. It checks if there's a port number specified in the environment variables (process.env.PORT). If there is, it uses that port number. If not, it defaults to port 8081.

// created app.listen by using port
  
// This code synchronizes your Sequelize models with the database. Once the synchronization is successful, it starts the Express server to listen for incoming requests on the specified port. If there's an error during synchronization, it catches the error and logs it to the console.
dbSeq
  .sync()   //  .sync()=> Synchronizing the models with the database involves Sequelize creating or updating the corresponding tables in the database to match the definitions in your code. If a table doesn't exist, Sequelize will create it. If a table already exists but its structure doesn't match the model definition, Sequelize will update it accordingly.
            // In summary, synchronization ensures that your database schema matches the structure defined in your Sequelize models, keeping them in sync with each other.
  .then(() => {
    app.listen(port, console.log(`Server started on port ${port}`));
  })
  .catch((err) => console.log("Error: " + err));

module.exports = app;