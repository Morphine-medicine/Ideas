const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const idea = require("../../models/idea");
const db = "mongodb://127.0.0.1:27017/ideas";
const example = new idea({ auth: "Toxa", idea: "buy some beer" });

mongoose.connect(db, err => {
  if (err) {
    console.log("Connection error" + err);
  }
});

router.get("/ideas", function(req, res) {
  idea.find({}).then(function(ideas) {
    res.send(ideas);
  });
});

module.exports = router;
