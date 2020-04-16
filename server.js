var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var handlebars = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: "chit chat", resave: true, saveUninitialized: true }));


app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});


