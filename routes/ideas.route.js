const express = require('express');
const router = express.Router();

const controllers = require('../controllers/ideas.controller');
const validates = require('../validates/ideas.validate');

router.get('/', controllers.index);

router.get('/add', controllers.add);
router.post('/add', validates.postAdd, controllers.postAdd);

router.get('/edit/:id', controllers.edit);
router.put('/edit/:id', validates.putEdit, controllers.putEdit);

router.delete('/delete/:id', controllers.delete);

module.exports = router;