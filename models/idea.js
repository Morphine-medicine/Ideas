const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
  idea: String,
  auth: String,
  smthElse: String
});

const Idea = mongoose.model("Idea", IdeaSchema);

module.exports = Idea;
