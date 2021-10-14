require('../config/db.connection');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/pikchu" );

module.exports = {
    Comment: require('./Comment'),
    Photo: require('./Photo'),
    User: require('./User'),
};