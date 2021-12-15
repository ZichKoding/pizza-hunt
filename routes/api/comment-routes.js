const router = require('express').Router();
const { 
    addComment, 
    removeComment, 
    addReply, 
    removeReply 
} = require('../../controllers/comment-controller');

// Set up POST at /api/comments/:pizzaId
router.route('/:pizzaId').post(addComment);

// Set up DELETE at /api/comments/:pizzaId/:commentId
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;