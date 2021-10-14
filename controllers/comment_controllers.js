const express = require('express');
const router = express.Router();
const { Photo, User, Comment } = require('../models');

/* Index Route */
router.get('/', function (req, res) {
    
    Comment.find({}, (error, comments) => {
        if (error) return console.log(error);
        const context = {
            comments,
        }

        res.render('comments/index', context);
    });
});

// /* Comment */
// router.get('/:photoId/comment', (req, res) => {
//     Photo.findById(req.params.photoId, (error, foundPhoto) => {
//         if (error) return console.log(error);

//         return res.render('photos/comment.ejs', { photo: foundPhoto });
//     });
// });

// /* Post Comment */
// router.post('/:photoId', (req, res) => {
//     console.log('req.body', req.body);
//     Comment.create( req.body, (error, newComment) => {
//         if (error) return console.log(error);

//         console.log(newComment);

//         return res.redirect('/photos/show_photo');
//     });
// });

module.exports = router;