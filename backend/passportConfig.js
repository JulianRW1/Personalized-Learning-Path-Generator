// backend/passportConfig.js

const LocalStrategy = require('passport-local').Strategy;
const User = require('./model/User');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      User.findOne({ username })
        .then(user => {
          if (!user) return done(null, false, { message: 'No user found' });

          user.comparePassword(password)
            .then(isMatch => {
              if (!isMatch) return done(null, false, { message: 'Invalid password' });
              return done(null, user);
            });
        })
        .catch(err => done(err));
    })
  );
};