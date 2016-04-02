var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
/* GET users listing. */
router.get('/all', function(req, res, next) {
  userController.showAll(req,res);
});
/* Post users to create new. */
router.post('/', function(req, res, next) {
  userController.create(req,res);
});

module.exports = router;
