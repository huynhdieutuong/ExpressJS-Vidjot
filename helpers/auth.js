module.exports.requireAuth = (req, res, next) => {
  if(!req.isAuthenticated()) {
    req.flash('error_msg', 'Not Authorized');
    return res.redirect('/users/login');
  }

  next();
}

module.exports.loggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    req.flash('success_msg', 'You Are Logged in');
    return res.redirect('/ideas');
  }

  next();
}