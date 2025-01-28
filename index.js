const express = require('express');
const mongoose = require('mongoose');
const Wish = require('./models/wish.modul.js');
const wishRoute = require('./routes/wish.route.js');
const app = express();

const PORT = 3333;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api/wishes', wishRoute);

app.get('/', (req, res) => {
  res.send('Hello TWO from node API updated');
});

// mongoose connection
mongoose
  .connect(
    'mongodb+srv://tcirulnatalya:FCfzSoEKCAJsWjkq@cluster0.qx2ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
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
