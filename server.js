const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("colors");
const app = express();
const connect = require("./dbinit");
const pokemon = require("./Routes/pokemon");

connect();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use("/api", pokemon);

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`.rainbow);
});
