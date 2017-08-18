const Recipe = require('../models').recipe;

module.exports = {
  create(req, res) {
    return Recipe.create({
        title: req.body.title,
        description: req.body.description,
        cooking_time: req.body.cookingTime
      })
      .then((recipe) => {
        res.status(201);
        res.json(recipe);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },
  options(req, res) {
    res.send();
  },
  list(req, res) {
    console.log('List Of recipes');
  },
  update(req, res) {
    console.log('DELETE ME');
  },
  delete(req, res) { /// TO DO
    console.log('DELETE ME', req.params.recipeId);
    // return Recipe.destroy({
    //     id:  req.params.recipeId
    //   })
    //   .then((recipe) => {
    //     res.status(201);
    //     res.json(recipe);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     res.status(400).send(error);
    //   });
  }
};
