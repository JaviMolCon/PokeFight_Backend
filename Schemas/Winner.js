const mongoose = require("mongoose");

const WinnerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  last_name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  wins: {
    type: Number,
  },
  loses: {
    type: Number,
  },
  points: {
    type: Number,
  },
});

module.exports = mongoose.model("Winner", WinnerSchema);
