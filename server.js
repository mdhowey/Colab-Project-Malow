const express = require('express');

const PORT = 4000;
const user = require('./controllers/user_controllers');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false}));

app.use('/users', user);

app.use((req, res, next) => {
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleTimeString()}`);
    next();
});

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/*', (req, res) => {
    res.send('<h1> 404 </h1>');
});


app.listen(PORT, (req, res) => {
    console.log(`You are currently partying on port: ${PORT}`);
});