const express = require("express");

const postController = require("../controllers/post");

const router = express.Router();

router.get('/:hackathonId/post', postController.getAllPost);

router.post('/:hackathonId/post', postController.addPost);

router.post('/:hackathonId/post/postId/likes', postController.likePost);

module.exports = router; 