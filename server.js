// Pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Configure the Express application
var app = express();
var PORT = 3100;
//var PORT = process.env.PORT;  //this for the heruko

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, "./app/public")));

// Add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log("app is listening on PORT: " + PORT);
});