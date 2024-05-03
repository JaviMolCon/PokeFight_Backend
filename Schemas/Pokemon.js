const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  name: {
    type: {
      english: { type: mongoose.Schema.Types.String, required: true },
      japanese: { type: mongoose.Schema.Types.String, required: true },
      chinese: { type: mongoose.Schema.Types.String, required: true },
      french: { type: mongoose.Schema.Types.String, required: true },
    },
  },
  type: [
    {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  ],
  base: {
    HP: { type: mongoose.Schema.Types.Number, required: true },
    Attack: { type: mongoose.Schema.Types.Number, required: true },
    Defense: { type: mongoose.Schema.Types.Number, required: true },
    "Sp. Attack": { type: mongoose.Schema.Types.Number, required: true },
    "Sp. Defense": { type: mongoose.Schema.Types.Number, required: true },
    Speed: { type: mongoose.Schema.Types.Number, required: true },
  },
  image_url: {
    type: mongoose.Schema.Types.String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL for an image.`,
    },
  },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
