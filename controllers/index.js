require('../config/db.connection');

module.exports = {
    photo: require('./photo_controllers'),
    user: require('./user_controllers'),
};