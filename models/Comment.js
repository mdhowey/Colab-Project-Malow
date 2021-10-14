const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        ref: 'User',
    },
    photoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Photo',
    },
    comment: {
        type: String, 
        required: [true, 'We need a comment to make a comment...'],
    },
}, { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;