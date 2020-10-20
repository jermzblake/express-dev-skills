var express = require('express');
const { route } = require('.');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);
router.get('/new', skillsCtrl.new)
router.get('/:id/edit', skillsCtrl.edit);
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);

module.exports = router;