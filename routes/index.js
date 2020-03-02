var express = require('express');
var router = express.Router();

// Render Home Page
router.get('/', (req, res, next) => {
  res.render('main/home');
});

module.exports = router;
