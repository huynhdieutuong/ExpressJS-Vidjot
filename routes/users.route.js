const express = require('express');
const router = express.Router();

const controllers = require('../controllers/users.controller');
const validates = require('../validates/users.validate');

router.get('/login', controllers.login);
router.post('/login', controllers.postLogin);

router.get('/register', controllers.register);
router.post('/register', validates.postRegister, controllers.postRegister);

module.exports = router;