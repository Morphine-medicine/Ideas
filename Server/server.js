const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const idea = require("../models/idea");

const api = require("./routes/api");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

function find(collec, query, callback) {
  mongoose.connection.db.collection(collec, function(err, collection) {
    collection.find(query).toArray(callback);
  });
}

app.use("/api", api);

mongoose
  .connect("mongodb://127.0.0.1/ideas")
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error(`Couldn't connect to MongoDB ${error}`));

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
let ideas;
idea.find((err, ideass) => {
  ideas = ideass;
  console.log(ideass);
});

//app.use(express.static(path.join(__dirname, "../dist/english-flashcards")));

app.get("/", (req, res) => {
  res.send(ideas);
});
const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost ${port}`));
