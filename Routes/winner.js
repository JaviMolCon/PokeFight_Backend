const express = require("express");

const {
  getAllWinners,
  getOneWinner,
  createWinner,
} = require("../Controllers/winner");

const api = express.Router();

api.route("/winners").get(getAllWinners).post(createWinner);
api.route("/winner/:id").get(getOneWinner);

module.exports = api;
