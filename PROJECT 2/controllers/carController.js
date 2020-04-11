var express = require("express");
var router = express.Router();
var car = require("../models/car.js");
const bcrypt = require('bcrypt')
//users array will be database instead
const users = [] ;
router.get('/users', (req, res) => {
  res.json(users)
})

router.post('/users', (req, res) => {
  try{
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    console.log(salt)
    console.log(hashedPass)
    
    const user = {name: req.body.name, password: req.body.password }
    users.push(user)
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
})










// router.get("/", function(req, res) {
//   car.all(function(data) {
//     var hbsObject = {
//       car: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/cars", function(req, res) {
//   car.create(req.body, (result)=> {
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cars/:id", (req, res) => {
//   var condition = `id = ${req.params.id}`;

//   console.log("condition", condition);

//   car.update(userInput, condition, function(result) {
//     if (result.changedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cars/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   car.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;
