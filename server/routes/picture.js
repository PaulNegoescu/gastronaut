let express = require('express');
let router = express.Router();
let models = require('../models');
let picturesController = require('../controllers/').picture;

router.options('/', picturesController.options);

router.get('/:pictureId', picturesController.list);

router.get('/:pictureId/1', picturesController.getCover);

// add
router.post('/', picturesController.create);

module.exports = router;

