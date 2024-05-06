const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("colors");
const app = express();
const connectDB = require("./dbinit");
const pokemon = require("./Routes/pokemon");
const winner = require("./Routes/winner");

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use("/api", pokemon);
app.use("/api", winner);
console.log(winner);

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`.rainbow);
});
