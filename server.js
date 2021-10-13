// ==== External Dependencies ==== //
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const PORT = 4000;

// ==== Internal Dependencies ==== //
const controllers = require('./controllers');

// == Invoke express == //
const app = express();

// ==== Middleware ==== //
require("./config/db.connection");

app.set('view engine', 'ejs');

app.use(
    session({
        store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/pikchu' }),
        secret: 'super secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, 
        }
    })
)

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false}));

app.use(methodOverride('_method'));

// ==== Logger ==== //
app.use((req, res, next) => {
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleTimeString()}`);
    console.log(req.session);
    next();
});

app.use('/users', controllers.user);
app.use('/photos', controllers.photo);

// == Home Page == //
app.get('/', function (req, res) {
    res.render('home');
});

// == 404 == //
app.get('/*', (req, res) => {
    res.send('<h1> 404 </h1>');
});

// ==== Listening on PORT ==== //
app.listen(PORT, (req, res) => {
    console.log(`You are currently partying on port: ${PORT}`);
});