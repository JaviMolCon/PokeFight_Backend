const express = require("express");
const cors = require(cors);
require("colors");
const app = express();
const connect = require("./dbinit");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`.rainbow);
});
