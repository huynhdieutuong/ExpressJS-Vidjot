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

module.exports.postRegister = (req, res) => {
  
}