var express = require('express');
var router = express.Router();
var models = require('../models');
const recipesController = require('../controllers').recipe;

var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage }).single('photo');


router.post('/', function (req, res, next) {
     var path = '';


     upload(req, res, function (err) {
       console.log('>>>>>> BODY >>>>>>>>>>', req.body);
    console.log('>>>>>> FILE >>>>>>>>>>', req.file);
    console.log('>>>>>> MODELS >>>>>>>>>>', models.recipe);

        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }
       // No error occured.
        path = req.file.path;
        recipesController.create;

        return res.send(req.file.filename);
  });

});






module.exports = router;

