const express = require("express");

const { getAllPokemons, getOnePokemon } = require("../Controllers/pokemon");

const api = express.Router();

// api.route("pokemon").get(getAllPokemons);
// api.route("/pokemon/:id").get(getOnePokemon);

api.get("/pokemon", (req, res) => {
  getAllPokemons(req, res);
});

module.exports = api;
