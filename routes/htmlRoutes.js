const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

    app.get("/home", function (req, res) {
        if (req.user) {
            res.direct("/")
        }
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    app.get("/login", function (req, res) {
        if (req.user) {
            res.redirect("/interface");
        }

        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/register", function (req, res) {
        if (req.user) {
            res.direct("/register");
        }
        res.sendFile(path.join(__dirname, "../public/register.html"));
    });

    app.get("/interface", function (req, res) {
        if (req.user) {
            res.direct("/intrface");
        }
        res.sendFile(path.join(__dirname, "../public/interface.html"));
    });



    app.get("/interface", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });




};