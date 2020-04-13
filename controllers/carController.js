var express = require("express");
var router = express.Router();
var car = require("../models/car.js");

router.get("/", function(req, res) {
  car.all(function(data) {
    var hbsObject = {
      car: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cars", function(req, res) {
  car.create(req.body, (result)=> {
    res.json({ id: result.insertId });
  });
});

router.put("/api/cars/:id", (req, res) => {
  var condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  car.update(userInput, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cars/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  car.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
