const Idea = require("../../models/idea");

exports.idea_create = function(req, res) {
  let idea = new Idea({
    auth: req.body.auth,
    idea: req.body.idea,
    smthElse: req.body.smthElse
  });
  idea.save(err => {
    if (err) return console.log(err);
    res.send(`Created,id=${idea.id}`);
  });
};
exports.idea_details = function(req, res) {
  Idea.findById(req.params.id, (err, idea) => {
    if (err) return console.log(err);
    res.send(idea);
  });
};
exports.idea_update = function(req, res) {
  Idea.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (err) return console.log(err);
    res.send("Idea updated");
  });
};
exports.idea_delete = function(req, res) {
  Idea.findByIdAndDelete(req.params.id, err => {
    if (err) return console.log(err);
    res.send("Idea deleted");
  });
};
exports.idea_view_all = function(req, res) {
  Idea.find((err, ideas) => {
    res.send(ideas);
  });
};
