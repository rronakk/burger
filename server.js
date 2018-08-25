var express = require("express");
var body = require("body-parser")

var PORT = process.env.PORT || 8080;

var app = express();

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });