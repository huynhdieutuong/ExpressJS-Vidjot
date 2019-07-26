const express = require('express');
const router = express.Router();

const controllers = require('../controllers/ideas.controller');
const validates = require('../validates/ideas.validate');

router.get('/', controllers.index);

router.get('/add', controllers.add);
router.post('/add', validates.postAdd, controllers.postAdd);

module.exports = router;