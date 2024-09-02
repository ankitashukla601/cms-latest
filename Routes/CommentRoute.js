// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const { createComment, getComments } = require('../Controller/CommentCont');

// Route to create a new comment
router.post('/submit/comments', createComment);

// Route to get all comments
router.get('/get/comments', getComments);

module.exports = router;
