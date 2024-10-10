const express = require('express');
const contactuscon = require('../Controllers/Contactuscontroller');
const router = express.Router();

router.post('/post',contactuscon.postFeedback);

module.exports = router;

