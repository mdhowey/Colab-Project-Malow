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
        default: 'https://i.pinimg.com/originals/5f/a8/ef/5fa8ef8001f91d2c4d9f9b68b87dcf0d.jpg',
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