const mongoose = require('mongoose');

const WishSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter your wish'],
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

const Wish = mongoose.model('Wish', WishSchema);
module.exports = Wish;
