require('../config/db.connection');

module.exports = {
    comment: require('./comment_controllers'),
    photo: require('./photo_controllers'),
    user: require('./user_controllers'),
    auth: require('./auth_controllers'),
};