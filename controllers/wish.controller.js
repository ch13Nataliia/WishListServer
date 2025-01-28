const Wish = require('../models/wish.modul');

// find all wishes

const getWishes = async (req, res) => {
  try {
    const wishes = await Wish.find({});
    res.status(200).json(wishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// created wish

const createWish = async (req, res) => {
  try {
    const wish = await Wish.create(req.body);
    res.status(200).json(wish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getWishes,
  createWish,
};
