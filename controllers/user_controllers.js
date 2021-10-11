const express = require('express');
const router = express.Router();
const User = require('../models/User')

/* ==== USER ROUTES ==== */

// == Index == //
router.get('/', function (req, res) {
    res.render('users/index');
});

module.exports = router;