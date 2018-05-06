const express =  require('express');
const app = express();
const users = require('./routes/users');
const pages = require('./routes/pages');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');
const logger = require('./log/logger');
const session = require('express-session');
const cookeParser =  require('cookie-parser');
const jwt = require('jsonwebtoken');

app.use(cookeParser());
app.use(session({
    name:'CRUD_session',
    secret: 'secret cat',
    resave: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: false, 
        secure: false,
        maxAge: 1000000000,
    } 
  }));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static('./views/public'));
app.use('/', pages);
app.use('/users', users);

app.get('/settoken', function(req, res){
    var token = jwt.sign({ token: 'new' }, 'sekret');
    res.json({
        jwt : token
    });
});

app.get('/testjwt', function(req, res){
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Im5ldyIsImlhdCI6MTUyNTYwOTYzNn0.lQQPHnouUbXz_S1nxawtcWHiVPlXn8H1erjxw3QJaUw';
    jwt.verify(token, 'sekret', function(err, decoded) {
        res.json({
            decoded : decoded,
            error : err
        });

    });
});

app.get('*', function(req, res){
    res.render('page404', {layout: false, title: 'cabinet'});
});

app.use(function onerror(err, req, res, next) {
    if (err.status > 0) {
        let message = err.message || HttpError.STATUS_CODES[status] || "http Error";
        res.json({
            error : message
        });
    } else {
        console.log('SYSTEM ERROR');
        console.log(err);
        res.sendStatus(err.status);
        res.end('HTTP ERROR');
    }
});

app.listen(3000);