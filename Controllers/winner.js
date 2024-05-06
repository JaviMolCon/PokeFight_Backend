const Winner = require("../Schemas/Winner");

const getAllWinners = async (req, res) => {
  try {
    const winner = await Winner.find();
    if (!winner.length) {
      return res.status(200).json({ message: "No winners in the DB" });
    }
    res.status(200).json(winner);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOneWinner = async (req, res) => {
  try {
    const { id } = req.params;
    const winner = await Winner.findOne(id);
    if (winner) {
      return res.status(200).json(winner);
    }
    res.status(404).json({ message: "I did not find that winner" });
  } catch (error) {
    res.status(500).json(error);
  }
};
const createWinner = async (req, res) => {
  try {
    const { first_name, last_name, wins, loses, points } = req.body;
    const winner = await Winner.create({
      first_name,
      last_name,
      wins,
      loses,
      points,
    });
    res.status(201).json(winner);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllWinners,
  getOneWinner,
  createWinner,
};
