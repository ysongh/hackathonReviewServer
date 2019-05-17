const express = require("express");

const postController = require("../controllers/post");

const router = express.Router();

router.get('/:hackathonId/post', postController.getAllPost);

router.post('/:hackathonId/post', postController.addPost);

module.exports = router; 