const Ingredients = require('../models').ingredients;

module.exports = {
  create(req, res) {
    console.log('req.body: ', req.body);
    return Ingredients.create({
        name: req.body.ingredient
      })
      .then((picture) => {
        res.status(201);
        res.json(picture);
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
    return Ingredients.findAll({
      // where: {
      //   'recipe_id': req.params.pictureId,
      //   'is_cover': 0
      // }
    }).then((ingredients) => {
        res.status(201);
        res.json(ingredients);
    }).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
  },
  check(req, res) {
    return Ingredients.findAll({
      where: req.query
    }).then((ingredients) => {
        res.status(201);
        res.json(ingredients);
    }).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
  }

};


