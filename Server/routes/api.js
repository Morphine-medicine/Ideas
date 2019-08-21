const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const idea = require("../../models/idea");
const db = "mongodb://127.0.0.1:27017/ideas";

const idea_controller = require("../controllers/idea.controller");
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

router.post("/create", idea_controller.idea_create);
router.put("/:id/update", idea_controller.idea_update);
router.delete("/:id/delete", idea_controller.idea_delete);
router.get("/", idea_controller.idea_view_all);
router.get("/:id", idea_controller.idea_details);
module.exports = router;
