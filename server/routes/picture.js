let express = require('express');
let router = express.Router();
let models = require('../models');
let picturesController = require('../controllers/').picture;

// list
router.get('/', (req, res) => res.status(200).send({
  message: 'Pictures',
}));



// router.get('/:pictureId', function(req, res, next) {
//   models.recipe.findAll().then(function(recipes) {
//     res.json(recipes);
//   });
//   return models;
// });

router.options('/', picturesController.options);

// add
router.post('/', picturesController.create);

// update
//router.post('/:recipeId', recipesController.update
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

//);

//router.delete('/:recipeId', recipesController.delete);





module.exports = router;

