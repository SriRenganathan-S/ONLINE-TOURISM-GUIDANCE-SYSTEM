const express = require('express');
const reviewcon = require('../Controllers/reviewcontroller');
const router = express.Router();

router.get('/all-reviews',reviewcon.getreview);
router.post('/post',reviewcon.postreview);

module.exports = router;

