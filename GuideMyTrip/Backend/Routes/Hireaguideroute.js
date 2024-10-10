const express = require('express');
const hireaguidecon = require('../Controllers/Hireaguidecontroller');
const router = express.Router();

router.post('/post',hireaguidecon.postrequest);

module.exports = router;

