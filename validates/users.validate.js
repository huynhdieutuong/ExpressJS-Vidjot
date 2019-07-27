module.exports.postRegister = (req, res, next) => {
  const { name, email, password, password2 } = req.body;

  let errors = [];
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