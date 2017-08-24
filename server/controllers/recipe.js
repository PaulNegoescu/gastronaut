const fs = require('fs');
const Recipe = require('../models').recipe;
const Picture = require('../models').picture;
const DIR = './server/uploads/';

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
    return Recipe.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function(recipes) {
      res.json(recipes);
    });
  },

  listDetails(req, res) {
    let receipeId = req.params.recipeId;
    return Recipe.findAll({
      where: {
        id: receipeId
      }
    }).then(function(recipes) {
      res.json(recipes);
    });
  },

  update(req, res) {
    console.log('Update ME');
  },

  delete(req, res) {
    let receipeId = req.params.recipeId;
    Picture.findAll({
      where: {
        recipe_id: receipeId
      }
    }).then((pictures) => {
      for (let value of pictures) {
        fs.unlink( DIR + value.dataValues.path, (err) => {
          if (err) throw err;
          console.log('successfully deleted '+DIR+value.dataValues.path);
        });
      }
      Picture.destroy({
        where: {
          recipe_id: receipeId
        }
      }).then((resp) => {
        res.status(201);
        Recipe.destroy({
          where: {
            id:  receipeId
          }
        })
        .then((resp) => {
          res.status(201);
          return res.json(resp);
        })
        .catch((error) => {
          console.log(error);
          res.status(400).send(error);
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
    });
  }
};
