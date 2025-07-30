const express = require('express');
const router = express.Router();
const { addComment, getComments } = require('../controllers/commentController');
const auth = require('../middleware/auth');

router.post('/', auth, addComment);
router.get('/:blogId', getComments);

module.exports = router;
