const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/news', (req, res) => {
  res.send('News');
});

app.listen(3000);
