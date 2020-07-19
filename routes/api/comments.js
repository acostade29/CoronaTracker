const router = require('express').Router();
const commentsCtrl = require('../../controllers/api/comments');

router.use(require('../../config/auth'));
router.get('/', commentsCtrl.index);
router.post('/', commentsCtrl.create);
router.put('/:idx', commentsCtrl.update);
router.delete('/:idx', commentsCtrl.delete);

/*---------- Protected Routes ----------*/

module.exports = router;