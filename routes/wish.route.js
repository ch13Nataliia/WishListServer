const express = require('express');
const Wish = require('../models/wish.modul.js');

const router = express.Router();

const { getWishes, createWish } = require('../controllers/wish.controller.js');

router.get('/', getWishes);
router.post('/', createWish);

module.exports = router;
