const express = require('express');
const router = express.Router();
const { Comment, Photo, User } = require('../models');

/* ==== PHOTO ROUTES ==== */
//== Show Photo Index == //
router.get('/', function (req, res) {
    
    Photo.find({}, (error, photos) => {
        if (error) return console.log(error);
        const context = {
            photos,
        }

        res.render('photos/index', context);
    });
});

// == Add == //
router.get('/add', function (req, res) {
    res.render('photos/add');
});

/* Create */
router.post('/', (req, res) => {
    console.log('req.body', req.body);
    Photo.create( req.body, (error, newPhoto) => {
        if (error) return console.log(error);

        console.log(newPhoto);

        return res.redirect('/photos');
    });
});

// == Show Solo Photo == //
router.get('/:photoId', async function (req, res) {
    try {
        const foundPhoto = await Photo.findById(req.params.photoId)
            console.log(`foundPhoto is: ${foundPhoto._id}`);
            
            const foundComments = await Comment.findOne({ photoId: foundPhoto._id });
                console.log(foundComments)
                const context = {
                    photo: foundPhoto,
                    comments: foundComments,
                };
                console.log(context)

                return res.render('photos/show_photo', context)
    }
    catch(err) {
        console.log(err);
        res.send(err);
    }
});

// == Edit == //
router.get('/:photoId/edit', (req,res) => {
    Photo.findById(req.params.photoId, (error, foundPhoto) => {
        if (error) return console.log(error);

        return res.render('photos/edit.ejs', { photo: foundPhoto });
    });
});

/* Update */
router.put('/:photoId', (req, res) => {
    Photo.findByIdAndUpdate(
        req.params.photoId,
        {
            $set: req.body
        },
        {
            new: true
        },
        (error, updatedPhoto) => {
            if (error) return console.log(error);

            return res.redirect(`/photos/${updatedPhoto.id}`);
        }
    );
});

/* Delete (Verb) */
router.delete('/:photoId', (req, res) => {
    Photo.findByIdAndDelete( req.params.photoId, (error, deletedPhoto) => {
        if (error) return console.log(error);
    
        console.log(deletedPhoto);
        return res.redirect('/photos');
    });
});

module.exports = router;