var express = require("express");
var bodyParser = require("body-parser")

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static("public"));

var routes = require("./controllers/burgers_controller");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });