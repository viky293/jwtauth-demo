var user = require('../models/userModel.js');
module.exports = {
  create:function(req,res){
    var newUser=new user(
      {
        email:req.body.email,
        name:req.body.name,
        password:req.body.password
      }
    );
    newUser.save(function(err,user){
      if(err){
        res.json(500,{
          message:"Something went wrong!!",
          error:err
        });
      }
      else{
        res.json({
          message:"New user created.",
          _id:user._id
        });
      }
    });
  },
  showAll:function(req,res){
    user.find(function(err,users){
      res.json(users);
    });
  }
};
