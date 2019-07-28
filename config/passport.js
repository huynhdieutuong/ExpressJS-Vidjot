const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/User.model');

passport.use(new LocalStrategy({usernameField: 'email'},
  async (email, password, done) => {
    // Match user
    const user = await User.findOne({email});
    if(!user) {
      return done(null, false, 'User Not Found');
    }

    // Match password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return done(null, false, 'Password Incorrect');
    }

    return done(null, user);
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  })
});