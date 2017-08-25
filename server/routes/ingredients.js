let express = require('express');
let router = express.Router();
let models = require('../models');
let ingredientsController = require('../controllers/').ingredients;

router.options('/', ingredientsController.options);

router.get('/', ingredientsController.list);
router.get('/check', ingredientsController.check);

// router.get('/:pictureId/1', picturesController.getCover);

// add
router.post('/', ingredientsController.create);

module.exports = router;

