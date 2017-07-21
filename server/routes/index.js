var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET receipes. */
router.get('/receipes', function(req, res, next) {
  res.render('receipes', { title: 'Express' });
});

module.exports = router;
