const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 12,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 100,
    },
    password: {
        type: String, 
        required: true,
        min: 8,
    },
    firstname: {
        type: String, 
        required: true,
    },
    lastname: {
        type: String, 
        required: true,
    },
    profileImg: {
        type: String,
        default: '', // set avatar
    },
    hometown: {
        type: String, 
    },
    currentCity: {
        type: String, 
    },
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);
module.exports = User;