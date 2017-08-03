const express = require('express');
let router = express.Router();
const models = require('../models');
const crypto = require('crypto');
const fs = require('fs');
const recipesController = require('../controllers').recipe;
const multer = require('multer');
const path = require('path');

const DIR = './server/uploads/';

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(8, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + path.extname(file.originalname));
    });
  }
});

let upload = multer({ storage: storage }).fields([
  { name: 'cover', maxCount: 1 },
  { name: 'gallery', maxCount: 8 }
]);

router.get('/', function (req, res) {
  res.end('file catcher example');
});

router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }
    return res.send(req.file);
  });
});

module.exports = router;
