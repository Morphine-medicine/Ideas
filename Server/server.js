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
app.use("/ideas", api);
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

const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost ${port}`));

app.get("/", (req, res) => {
  res.redirect("/ideas");
});
