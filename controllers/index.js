require('../config/db.connection');

module.exports = {
    auth: require('./auth_controllers'),
    comment: require('./comment_controllers'),
    photo: require('./photo_controllers'),
    user: require('./user_controllers'),
};