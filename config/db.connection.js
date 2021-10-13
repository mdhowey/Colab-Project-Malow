const mongoose = require('mongoose');

const connectionStr = 'mongodb://localhost:27017/pikchu'

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected successfully!`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Oh no! MongoDB had an issue connecting...`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`MongoDB has been disconnected.`);
});