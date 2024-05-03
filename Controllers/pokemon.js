const Pokemon = require("../Schemas/Pokemon");

const getAllPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    if (!pokemon.length) {
      return res.status(200).json({ message: "No pokemon in the DB" });
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findOne({ id: parseInt(id, 10) });
    if (pokemon) {
      return res.status(200).json(pokemon);
    }
    res.status(404).json({ message: "I did not find that pokemon" });
  } catch (error) {
    res.status(500).json(error);
  }
};
const createPokemon = async (req, res) => {
  try {
    const { id, name, type, base, image_url } = req.body;
    const pokemon = await Pokemon.create({ id, name, type, base, image_url });
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllPokemon,
  getOnePokemon,
  createPokemon,
};
