var user = require('../models/userModel.js');
var secret = require('../config/main.js').secret;
var jsonwebtoken = require('jsonwebtoken');

module.exports = {
  login:function(req,res){
    user.findOne({
      email:req.body.email,
    },function(err,user){
      if(err)
      {
        res.status(500).json({
          message:'Something went wrong, could not find user',
          error: err
        });

      }
      else{
        // res.status(200).json(user);
        var pwdCheck=user.checkPassword(req.body.password);
        if(pwdCheck){
          var token =  jsonwebtoken.sign(user.toJSON(),secret,{expiresIn:10000});
          res.status(200).json({'token':token});
        }
        else{
          res.status(401).json({success:false});
        }
      }
    });
  },
};
