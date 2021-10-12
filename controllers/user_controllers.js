const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* ==== USER ROUTES ==== */

// == Index == //
router.get('/', function (req, res) {
    
    User.find({}, (error, users) => {
        if (error) return console.log(error);

        const context = {
            users,
        }

        res.render('users/index', context);
    });
});

// == Add == //
router.get('/add', function (req, res) {
    res.render('users/add');
});

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    User.create( req.body, (error, newUser) => {
        if (error) return console.log(error);

        console.log(newUser);

        return res.redirect('/users');
    });
});

// == Show == //
router.get('/:id', (req, res, next) => {
    User.findById(req.params.id, (error, foundUser) => {
        if(error) {
            console.log(error);
            req.error = error;
            return next();
        }
        const context = {
            user: foundUser,
        }
        // Photo.find({ user: req.params.id}, (error, allImages) => {
        //     const context = {
        //         user: foundUser,
        //         images: allImages,
        //     };
        
            return res.render('../views/users/show.ejs', context)
        // });
    });
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