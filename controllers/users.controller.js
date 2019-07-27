const bcrypt = require('bcryptjs');

const User = require('../models/User.model');

module.exports.login = (req, res) => {
  res.render('users/login', {
    title: 'Login'
  });
}

module.exports.postLogin = (req, res) => {

}

module.exports.register = (req, res) => {
  res.render('users/register', {
    title: 'Register'
  });
}

module.exports.postRegister = async (req, res) => {
  const { name, email, password } = req.body;
  
  const hashPassword = await bcrypt.hash(password, 10);
  await User.create({
    name,
    email,
    password: hashPassword
  });

  req.flash('success_msg', 'Register Success');
  res.redirect('/users/login');
}