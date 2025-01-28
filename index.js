const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3333;

const wishes = [{ title: 'Go to Japan' }];

app.get('/api/v1/wishes', (req, res) => {
  res.status(200).json(wishes);
});

app.post('/api/v1/wishes', (req, res) => {
  wishes.push(req.body);
  res.sendStatus(201);
});
app.listen(PORT, (req, res) => {
  console.log(`Server listening http://localhost: ${PORT}`);
});
