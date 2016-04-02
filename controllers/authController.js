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
        res.json(500,{
          message:'Something went wrong, could not find user',
          error: err
        });

      }
      else{
        // res.json(user);
        var pwdCheck=user.checkPassword(req.body.password);
        if(pwdCheck){
          var token =  jsonwebtoken.sign(user,secret,{expiresIn:10000});
          res.json({'token':token});
        }
        else{
          res.json({success:false});
        }
      }
    });
  },
};
