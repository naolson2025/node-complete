const path = require('path');
const express = require('express');
// made our own path utility to make the code cleaner
const rootDir = require('../util/path');
const router = express.Router();

router.get('/', (req, res, next) => {
  // we cannot import an html file directly
  // so we need to use path.join to get the correct path
  // when sending files
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;