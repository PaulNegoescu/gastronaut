var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  models.user.findAll().then(function(users) {
    res.json(users);
  });
  return models;
});

module.exports = router;

