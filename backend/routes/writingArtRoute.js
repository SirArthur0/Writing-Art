const express = require('express');

const writingArtController = require('../controllers/writingArtController');

const router = express.Router();

router.get('/all', writingArtController.getAllWritingArt);

module.exports = router;