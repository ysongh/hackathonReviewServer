const express = require("express");

const postController = require("../controllers/post");

const router = express.Router();

router.post('/:hackathonId/post', postController.addPost);

module.exports = router; 