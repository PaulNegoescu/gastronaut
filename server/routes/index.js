var express = require('express');
var router = express.Router();

const recipesController = require('../controllers').recipe;

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}));

module.exports = router;
