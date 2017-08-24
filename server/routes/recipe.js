var express = require('express');
var router = express.Router();
var models = require('../models');
const recipesController = require('../controllers').recipe;

// list
router.get('/', recipesController.list);

router.get('/:recipeId', recipesController.listDetails);

router.options('/', recipesController.options);

// add
router.post('/', recipesController.create);

// update TO DO
router.post('/:recipeId', recipesController.update
// function(req, res){
//   models.recipe.create({
//     id: req.params.recipeId,
//     title: req.body.title,
//     description: req.body.description,
//     cooking_time: req.body.cooking_time,
//     cover_image: req.body.cover_image
//   }).then(function() {
//     res.redirect('/');
//   });
// }

);

router.delete('/:recipeId', recipesController.delete);

module.exports = router;
