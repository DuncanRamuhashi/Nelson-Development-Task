const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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

  // Convert to char array, sort, and return
  const sortedArray = data.split('').sort();
  return res.json({ word: sortedArray });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
module.exports = app; 
