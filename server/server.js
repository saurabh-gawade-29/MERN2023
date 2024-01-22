//! Imports
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const baserouter = require("./router/base-router");
const connectToDB = require("./utils/db");

//! Static PORT
const PORT = 5000;

//! Middleware --- For Exchange Data in JSON - always before routes
app.use(express.json());

//* Home
//TODO app.get(path, callback): This method is used to define a route for handling HTTP GET requests.
/*
 * app.get
 * app.post
 * app.put
 * app.patch
 * app.delete etc...
 */
//! Old Style
// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to MERN2023");
// });

//! New : There is some error in below line - solution: Create another router 
// router.route("/").get((req, res) => res.status(200).send("Welcome to MERN2023"));

//* All Routes come from router folder

/*
* What is use: app.use([path], (req, res, next) =>{}
The use method is used to mount middleware functions at a specified path. 
Middleware functions are functions that have access to the request object (req), 
the response object (res), and the next middleware function in the application’s request-response cycle.
They can modify the request and response objects, terminate the request-response cycle, or call the next middleware function in the stack.
*/

app.use("/", baserouter);
app.use("/api/auth", router);

/*
 * Listen
 This method is used to start the Express application 
 listening for incoming requests on a specified port and optional hostname. 
*/
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
});
