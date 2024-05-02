const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  name: {
    english: { type: String },
    japanese: { type: String },
    chinese: { type: String },
  },
  type: {
    type: Array,
  },
  base: {
    HP: {
      type: Number,
    },
    Attack: {
      type: Number,
    },
    Defense: {
      type: Number,
    },
    Speed: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("POKEMON", PokemonSchema);
