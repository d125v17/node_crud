const express =  require('express');
const app = express();
const users = require('./routes/users');
const pages = require('./routes/pages');
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({extname: '.handlebars'}));
app.set('view engine', 'handlebars');
app.use(express.static('./views/public'));


app.use('/', pages);
app.use('/users', users);

app.listen(3000);