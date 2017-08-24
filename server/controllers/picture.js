const Picture = require('../models').picture;

module.exports = {
  create(req, res) {
    console.log('req.body: ', req.body);
    return Picture.create({
        recipe_id: req.body.recipe_id,
        is_cover: req.body.is_cover,
        path: req.body.path
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

  getCover(req, res) {
    return Picture.findAll({
      where: {
        'recipe_id': req.params.pictureId,
        'is_cover': 1
      }
    }).then((picture) => {
        res.status(201);
        res.json(picture);
    }).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
  },

  list(req, res) {
    return Picture.findAll({
      where: {
        'recipe_id': req.params.pictureId,
        'is_cover': 0
      }
    }).then((picture) => {
        res.status(201);
        res.json(picture);
    }).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
  },
  update(req, res) {
    console.log('DELETE ME');
  },
  delete(req, res) {
    console.log('DELETE ME');
  }
};


