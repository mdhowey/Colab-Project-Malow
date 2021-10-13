const express = require('express');
const router = express.Router();
const { Photo, User } = require('../models');

// Photo.deleteMany({}, function (error, deletedPhotos) {
//     if (error) {
//         return console.log(error);
//     }
//     Photo.insertMany(
//         [
//             {
//                 userId: '6165daefd9a3f375c7ba8e25',
//                 img: 'https://media.istockphoto.com/photos/okay-picture-id174349058',
//                 description: 'test description 1',
//                 tagline: 'test tagline 1',
//             },
//             {
//                 userId: '6165daefd9a3f375c7ba8e25',
//                 img: 'https://media.istockphoto.com/photos/okay-picture-id174349058',
//                 description: 'test description 1',
//                 tagline: 'test tagline 1',
//             },
//             {
//                 userId: '6165daefd9a3f375c7ba8e25',
//                 img: 'https://media.istockphoto.com/photos/okay-picture-id174349058',
//                 description: 'test description 1',
//                 tagline: 'test tagline 1',
//             },
//             {
//                 userId: '6165daefd9a3f375c7ba8e25',
//                 img: 'https://media.istockphoto.com/photos/okay-picture-id174349058',
//                 description: 'test description 1',
//                 tagline: 'test tagline 1',
//             },
//             {
//                 userId: '6165d13dd8c52d1da3bdeeb4',
//                 img: 'https://c8.alamy.com/compes/crj923/servicio-al-cliente-joven-hombre-con-corse-haciendo-firmar-el-o-k-crj923.jpg',
//                 description: 'test description 2',
//                 tagline: 'test tagline 2',
//             },
//             {
//                 userId: '6165cf34f79912fce8ed9808',
//                 img: 'https://previews.123rf.com/images/luismolinero/luismolinero1606/luismolinero160603079/58674992-black-man-making-ok-sign.jpg',
//                 description: 'test description 3',
//                 tagline: 'test tagline 3',
//             },
//         ],
//     ),
//     function (error, createdPhotos) {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('// ==== Seeded Photos ==== //');
//         console.log(createdPhotos);
//     };
// });

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
router.get('/:photoId', (req, res, next) => {
    Photo.findById(req.params.photoId, (error, photo) => {
        console.log(photo)
        if (error) return console.log(error);
        const context = {
            photo,
        }
    
        return res.render('photos/show_photo', context)
    });
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
        return res.redirect('/users');
    });
});

module.exports = router;