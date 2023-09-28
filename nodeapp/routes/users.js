const express = require("express");
const router = express.Router();
const db = require("../database");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/form", function (req, res, next) {
  res.render("index");
});

router.post("/create", function (req, res, next) {
  const userDetails = req.body;
  console.log(userDetails);
  const sql = "INSERT INTO employee SET ?";

  db.query(sql, userDetails, function (err, data) {
    if (err) throw err;
    console.log("User data is inserted successfully");
    res.redirect("/users/form");
  });
});

module.exports = router;
