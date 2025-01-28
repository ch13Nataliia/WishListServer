const express = require('express');
const Wish = require('./models/wish.modul.js');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3333;

const Wishes = [];

// find all wishes
app.get('/api/v1/wishes', (req, res) => {
  try {
    const wishes = Wishes.find({});
    res.status(200).json(wishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// created wish
app.post('/api/v1/wishes', (req, res) => {
  Wishes.create(req.body);
  res.sendStatus(201);
});

// mongoose connection
mongoose
  .connect(
    'mongodb+srv://adminWishes:vjXxBdWDos2txPOH@wishes.0s1xd.mongodb.net/Wish-List?retryWrites=true&w=majority&appName=wishes',
  )
  .then(() => {
    console.log('Connected to database!');
    app.listen(PORT, (req, res) => {
      console.log(`Server listening http://localhost: ${PORT}`);
    });
  })
  .catch(() => {
    console.log('Connection is failed');
  });
