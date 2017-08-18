let express = require('express');
let router = express.Router();
let models = require('../models');
let picturesController = require('../controllers/').picture;

// list
// router.get('/', (req, res) => res.status(200).send({
//   message: 'Pictures',
// }));



// router.get('/:pictureId', function(req, res, next) {
//   console.log('RES >> ',models.picture);
//   models.picture.findAll().then(function(pics) {
//     //res.json(recipes);
//     console.log(res.json(pics));
//   });
//   return models;
// });

router.options('/', picturesController.options);

router.get('/:pictureId', picturesController.list);
router.get('/:pictureId/1', picturesController.getCover);

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

