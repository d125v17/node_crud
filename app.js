const express =  require('express');
const app = express();
const users = require('./routes/users');
const pages = require('./routes/pages');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

app.use(bodyParser.urlencoded({ extended: false }));
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static('./views/public'));
app.use('/', pages);
app.use('/users', users);

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