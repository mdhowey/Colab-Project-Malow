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
router.get('/:userId', (req, res, next) => {
    User.findById(req.params.userId, (error, foundUser) => {
        if(error) {
            console.log(error);
            req.error = error;
            return next();
        }
        const context = {
            user: foundUser,
        }
        // Photo.find({ user: req.params.userId}, (error, allImages) => {
        //     const context = {
        //         user: foundUser,
        //         images: allImages,
        //     };
        
            return res.render('../views/users/show.ejs', context)
        // });
    });
});

// == Edit == //
router.get('/:userId/edit', (req,res) => {
    User.findById(req.params.userId, (error, foundUser) => {
        if (error) return console.log(error);

        return res.render('users/edit.ejs', { user: foundUser });
    });
});

/* Update */
router.put('/:userId', (req, res) => {
    User.findByIdAndUpdate(
        req.params.userId,
        {
            $set: req.body
        },
        {
            new: true
        },
        (error, updatedUser) => {
            if (error) return console.log(error);

            return res.redirect(`/users/${updatedUser.id}`);
        }
    );
});

// == Delete == //
router.get('/delete', (req,res) => {
    res.render('users/delete');
});

module.exports = router;