const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('world');
});

app.use('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('v.1.0.0');
});
app.listen(process.env.PORT || 3000);