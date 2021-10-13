require('../config/db.connection');

module.exports = {
    auth: require('./auth_controllers'),
    Comment: require('./Comment'),
    Photo: require('./Photo'),
    User: require('./User'),
};