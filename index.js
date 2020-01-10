const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  res.send("Welcome to main route!");
});

app.get("/about", (req, res, next) => {
  res.send("This is the about route!");
});

app.listen(port, () => console.log(`App listening on port: ${port}`));
