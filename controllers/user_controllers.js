const express = require('express');
const router = express.Router();
const { Photo, User } = require('../models');

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
        Photo.find({ userId: req.params.userId}, (error, allPhotos) => {
            if (error) return console.log(error);
            console.log(allPhotos);
            const context = {
                user: foundUser,
                photos: allPhotos,
            };
            
            return res.render('../views/users/show.ejs', context)
        });
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

// == Delete Route (View)== //
router.get('/:userId/delete', (req,res) => {
    User.findById(req.params.userId, (error, foundUser) => {
        if (error) return console.log(error);

        return res.render('users/delete', { user: foundUser });
    });
});
/* Delete (Verb) */
router.delete('/:userId', (req, res) => {
    User.findByIdAndDelete( req.params.userId, (error, deletedUser) => {
        if (error) return console.log(error);
    
        console.log(deletedUser);
        return res.redirect('/');
    });
});

module.exports = router;