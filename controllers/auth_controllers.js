const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../models');

// ==== AUTH ROUTES ==== //
// == Create --> Get Route for Auth == //
router.get('/register', function (req, res) {
    return res.render('auth/register');
});

// == Register Post Route == //
router.post('/register', async function (req, res) {
    try {
        // check to see if the user exists in the db
        const foundUser = await User.exists({ email: req.body.email });
        // if user === true --> redirect to login page
        if (foundUser) {
            return res.redirect('/login');
        }
        // if user doesn't exist, create user and redirect to login

        // salt will create a complicated hash code
        const salt = await bcrypt.genSalt(12);
        // hash converts password into something more secure
        // test1234 => "$2a$10$5vR9VhGpkARz6EFPdkuNQ.aZNRGUgSCNSKEb9Xp1IKzrfxYETlkB2"
        const hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;

        // create a new User object in db
        const newUser = await User.create(req.body);

        return res.redirect('/login');
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
});

// == Login Route == //
router.get("/login", function (req, res) {
    res.render("auth/login");
});


module.exports = router;