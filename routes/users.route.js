const express = require('express');
const passport = require('passport');
const router = express.Router();

const controllers = require('../controllers/users.controller');
const validates = require('../validates/users.validate');
const { loggedIn } = require('../helpers/auth');

router.get('/login', loggedIn, controllers.login);
router.post('/login', loggedIn, passport.authenticate('local', {
  failureRedirect: '/users/login',
  successRedirect: '/ideas',
  failureFlash: true
}));

router.get('/logout', controllers.logout);

router.get('/register', controllers.register);
router.post('/register', validates.postRegister, controllers.postRegister);

module.exports = router;