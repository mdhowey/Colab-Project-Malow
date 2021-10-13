const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    img: {
        type: String,
        require: [true, 'Image is required, duh.'],
    },
    description: {
        type: String,
        max: 500,
        default: '(No description provided)',
    },
    tagline: {
        type: String, 
        max: 25,
        default: 'No tagline provided.',
    },
    like: {
        type: Number,
        default: 0,
    },
    location: {
        type: String,
        default: 'Stretch Feature',
    },
}, { timestamps: true }
);

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;