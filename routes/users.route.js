const express = require('express');
const router = express.Router();

const controllers = require('../controllers/users.controller');

router.get('/login', controllers.login);
router.post('/login', controllers.postLogin);

router.get('/register', controllers.register);
router.post('/register', controllers.postRegister);

module.exports = router;