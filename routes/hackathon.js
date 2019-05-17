const express = require("express");

const hackathonController = require("../controllers/hackathon");

const router = express.Router();

router.get('/', hackathonController.findAllHackathon);

router.post('/', hackathonController.addHackathon);

module.exports = router; 