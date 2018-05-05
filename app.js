const express =  require('express');
const app = express();
const users = require('./routes/users');
const pages = require('./routes/pages');
const exphbs  = require('express-handlebars');

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static('./views/public'));
app.use('/', pages);
app.use('/users', users);

app.listen(3000);