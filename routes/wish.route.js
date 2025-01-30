const express = require('express');
const Wish = require('../models/wish.modul.js');

const router = express.Router();

const {
  getWishes,
  createWish,
  findSingleWish,
  updateWish,
} = require('../controllers/wish.controller.js');

router.get('/', getWishes);
router.get('/:id', findSingleWish);
router.post('/', createWish);
router.put('/:id', updateWish);

module.exports = router;
