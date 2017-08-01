var express = require('express');
var router = express.Router();



const recipesController = require('../controllers').recipe;

// router.get('/', function(req, res, next) {
//   res.send('respond resource');
// });

// module.exports = router;


router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}));

 //router.post('/api/recipes', recipesController.create);


// module.exports = (router) => {
//   router.get('/', (req, res) => res.status(200).send({
//     message: 'Welcome to the Todos API!',
//   }));
//   router.post('/', recipesController.create);
// };

//our file upload function.
// router.post('/', function (req, res, next) {
//      var path = '';
//      upload(req, res, function (err) {
//         if (err) {
//           // An error occurred when uploading
//           console.log(err);
//           return res.status(422).send("an Error occured")
//         }
//        // No error occured.
//         path = req.file.path;
//         return res.send("Upload Completed for "+path);
//   });
// })

module.exports = router;
