const express = require('express');
const {signup} = require('../Controllers/Signupcontroller');
const router = express.Router();

router.post('/signupcon',signup);

module.exports = router;

