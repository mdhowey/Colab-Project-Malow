require('../config/db.connection');

module.exports = {
    Comment: require('./Comment'),
    Photo: require('./Photo'),
    User: require('./User'),
};