const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  throw new Error("Something went wrong!");
  res.send("Welcome to main route!");
});

app.get("/about", (req, res, next) => {
  res.send("This is the about route!");
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });

app.listen(port, () => console.log(`App listening on port: ${port}`));
