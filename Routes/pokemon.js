const express = require("express");

const {
  getAllPokemon,
  getOnePokemon,
  createPokemon,
} = require("../Controllers/pokemon");

const api = express.Router();

api.route("/pokemon").get(getAllPokemon).post(createPokemon);
api.route("/pokemon/:id").get(getOnePokemon);

module.exports = api;
