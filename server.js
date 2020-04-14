var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var handlebars = require("express-handlebars");
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: "chit chat", resave: true, saveUninitialized: true }));
var exphbs = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/apiRoutes");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
