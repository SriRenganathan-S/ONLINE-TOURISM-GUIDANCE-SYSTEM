const express = require('express');
const logincon = require('../Controllers/Logincontroller');
const router = express.Router();

router.post('/logincon',logincon.login);

module.exports = router;

