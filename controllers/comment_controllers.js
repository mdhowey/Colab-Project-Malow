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
                username: 'test1',
                photoId: '616755bbb0b5b1fd15d539d3',
                comment: 'test comment for the above photo 1',
            },
            {
                username: 'test2',
                photoId: '616755bbb0b5b1fd15d539d3',
                comment: 'test comment for the above photo 1',
            },
            {
                username: 'test2',
                photoId: '616831a628fc1e42198c36f3',
                comment: 'test comment for the above photo 0',
            },
        ],
    ),
    function (error, createdComments) {
        if (error) {
            return console.log(error);
        }
        console.log(createdComments);
    };
});

module.exports = router;