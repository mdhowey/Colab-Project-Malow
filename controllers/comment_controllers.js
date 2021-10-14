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

/* Comment */
router.get('/:photoId', (req, res) => {
    Photo.findById(req.params.photoId, (error, foundPhoto) => {
        if (error) return console.log(error);

        return res.render('comments/add', { photo: foundPhoto });
    });
});

/* Post Comment */
router.post('/:photoId', (req, res) => {
    // console.log('req.body', req.body);
    const comment = {
        ...req.body,
        username: req.session.currentUser.username,
    }

    Comment.create(comment, (error, newComment) => {
        if (error) return console.log(error);

        console.log(newComment);

        Comment.find({ photo: req.params.photoId }, (error, foundPhoto) => {
            if (error) return console.log(error);
            
            const context = {
                photo: foundPhoto,
                comments: comment,
            };

            return res.render('comments/show.ejs', { comments: comment })
        });
    });
});

/* Delete Comment */
router.delete('/:commentId', (req, res) => {
    Comment.findByIdAndDelete( req.params.commentId, (error, deletedComment) => {
        if (error) return console.log(error);
    
        console.log(deletedComment);
        return res.redirect('/comments');
    });
});

module.exports = router;