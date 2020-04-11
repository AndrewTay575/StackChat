// Need to npm for this packages
const passport = require ("passport");
const LocalStrategy = require ("passport-local").Strategy;

const db = require("../models")


passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function(email, password, done){
        db.user.findone({
            where: {
                email: email
            }

        }).then(function(dbUser){
            if(!dbUser){
                return done(null, false,{
                    message: "Incorrect Email."
                });
            }

            else if (!dbUser.vaildPassword(password)){
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, dbUser);
        });
    }
));


passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  
  
  module.exports = passport;
  
