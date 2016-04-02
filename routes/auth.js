var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');
/* Post users to create new. */
router.post('/', function(req, res, next) {
  authController.login(req,res);
});

module.exports = router;
