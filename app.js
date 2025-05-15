const express = require('express');
const app = express();
const port = 3000;

app.get('/sweet', (req, res) => {
  res.send('Minu lemmik maiustus on šokolaad');
});

app.listen(port, () => {
  console.log(`Rakendus töötab pordil ${port}`);
});
