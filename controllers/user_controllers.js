const express = require('express');
const router = express.Router();
const User = require('../models/User')

/* ==== USER ROUTES ==== */

// == Index == //
router.get('/', function (req, res) {
    res.render('users/index');
});

// == Add == //
router.get('/add', function (req, res) {
    res.render('users/add');
});

// == Show == //
router.get('/show', (req,res) => {
    res.render('users/show');
});

// == Edit == //
router.get('/edit', (req,res) => {
    res.render('users/edit');
});

// == Delete == //
router.get('/delete', (req,res) => {
    res.render('users/delete');
});

module.exports = router;