require('dotenv').config(); 

const express = require('express');
const app = express();


app.use(express.json());
app.use(require('cors')());

// Welcome endpoint
app.get('/', (req, res) => {
  res.json('Welcome to my Api');
});

// POST endpoint
app.post('/sort-string', (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input. Expected a string in "data".' });
  }

  const sortedArray = data.split('').sort();
  return res.json({ word: sortedArray });
});

module.exports = app;

