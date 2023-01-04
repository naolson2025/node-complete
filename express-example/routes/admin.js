const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // we cannot import an html file directly
  // so we need to use path.join to get the correct path
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;