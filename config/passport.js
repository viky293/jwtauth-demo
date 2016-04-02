var JwtStrategy =  require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/userModel.js');
var secret = require('../config/main.js').secret;

module.exports = function(passport){
  var opts={};
  opts.jwtFromRequest = ExtractJwt.fromHeader('token');
  opts.secretOrKey = secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) { console.log(jwt_payload.sub);
      User.findOne({_id: jwt_payload._doc._id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
              // or you could create a new account
          }
      });
  }));
};
