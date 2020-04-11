var orm = require("../config/orm.js");

var car = {
  all: function(cb) {
    orm.selectAll("cars", cb);
  },
  create: function(userInput, cb) {
    orm.insertOne("cars", userInput, cb);
  },
  update: function(userInput, condition, cb) {
    orm.updateOne("cars", userInput, condition, cb);
  },
  delete: function(condition, cb) {
    orm.delete("cars", condition, cb);
  }
};


module.exports = car;
