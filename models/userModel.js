var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      lowercase:true,
      unique:true,
      required:true
    },
    password:{
      type:String,
      required:true
    }
});
userSchema.pre('save',function(next){
  this.password=bcrypt.hashSync(this.password);
  next();
});

userSchema.methods.checkPassword=function(passwd){
  return bcrypt.compareSync(passwd,this.password);
};
module.exports = mongoose.model('user',userSchema);
