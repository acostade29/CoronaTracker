const router = require('express').Router();
const commentsCtrl = require('../controllers/comments');

router.use(require('../config/auth'));
router.get('/', commentsCtrl.index);
router.post('/', commentsCtrl.create);
router.delete('/:idx', commentsCtrl.delete);

/*---------- Protected Routes ----------*/

module.exports = router;