const Pokemon = require("../Schemas/Pokemon");
const mongoose = require("mongoose");

const getAllPokemons = async (req, res) => {
  try {
    const pokemon = await Pokemon.find({});
    if (!pokemon.lenght) {
      return res.status(200).json({ message: "no pokemon in the DB" });
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);

    if (pokemon) {
      return res.status(200).json(pokemon);
    }
    res.status(404).json({ message: "i did not find that pokemon" });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllPokemons,
  getOnePokemon,
};
