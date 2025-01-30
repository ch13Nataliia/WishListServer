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

// find wish by ID

const findSingleWish = async (req, res) => {
  try {
    const id = req.params.id;
    const wish = await Wish.findById(id);
    res.status(200).json(wish);
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

// update wish
const updateWish = async (req, res) => {
  try {
    const  id  = req.params.id;
    const wish = await Wish.findByIdAndUpdate(id, req.body);
    
    if (!wish) {
      return res.status(404).json({ message: 'Wish was NOT FOUND' });
    }
    const updatedWish = await Wish.findById(id);
    res.status(200).json(updatedWish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getWishes,
  createWish,
  findSingleWish,
  updateWish,
};
