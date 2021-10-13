const express = require('express');
const router = express.Router();
const { Photo, User, Comment } = require('../models');

Comment.deleteMany({}, function (error, deletedComments) {
    if (error) {
        return console.log(error);
    }
    Comment.insertMany(
        [
            {
                userId: '6165daefd9a3f375c7ba8e25',
                photoId: '6166496fc6cd57a2ae91fea8',
                comment: 'test comment for the above photo 1; userId: 6165daefd9a3f375c7ba8e25; photoId: 6166496fc6cd57a2ae91fea8',
            },
            {
                userId: '6165daefd9a3f375c7ba8e25',
                photoId: '6166496fc6cd57a2ae91feab',
                comment: 'test comment for the above photo 2; userId: 6165daefd9a3f375c7ba8e25, photoId: 6166496fc6cd57a2ae91feab',
            },
            {
                userId: '6165daefd9a3f375c7ba8e25',
                photoId: '6166496fc6cd57a2ae91fea8',
                comment: 'test comment for the above photo 3; userId: 6165daefd9a3f375c7ba8e25, photoId: 6166496fc6cd57a2ae91fea8',
            },
            {
                userId: '6165daefd9a3f375c7ba8e25',
                photoId: '6166496fc6cd57a2ae91fead',
                comment: 'test comment for the above photo 4; userId: 6165daefd9a3f375c7ba8e25, photoId: 6166496fc6cd57a2ae91fead',
            },
            {
                userId: '6165d13dd8c52d1da3bdeeb4',
                photoId: '6166496fc6cd57a2ae91fea8',
                comment: 'test comment for the above photo 5; userId: 6165d13dd8c52d1da3bdeeb4, photoId: 6166496fc6cd57a2ae91fea8',
            },
            {
                userId: '6165cf34f79912fce8ed9808',
                photoId: '61664da28459053de49de546',
                comment: 'test comment for the above photo 6; userId: 6165cf34f79912fce8ed9808, photoId: 61664da28459053de49de546',
            },
        ],
    ),
    function (error, createdComments) {
        if (error) {
            return console.log(error);
        }
        console.log('// ==== Seeded Comments ==== //');
        console.log(createdComments);
    };
});

module.exports = router;