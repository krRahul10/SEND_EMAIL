const express = require("express");

const app = express();

const port = 8006;

app.get("/", (req, res) => {
  res.status(404).send("server start");
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
