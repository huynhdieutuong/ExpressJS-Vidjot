const User = require('../models/User.model');

module.exports.postRegister = async (req, res, next) => {
  const { name, email, password, password2 } = req.body;

  const user = await User.findOne({email});

  let errors = [];
  if(user) {
    errors.push('Email already in use');
  }
  if (password.length < 4) {
    errors.push('Password must be at least 4 characters');
  } else if (password !== password2) {
    errors.push('Confirm password does not match');
  }

  if(errors.length) {
    return res.render('users/register', {
      title: 'Register',
      errors,
      values: req.body
    });
  }

  next();
}