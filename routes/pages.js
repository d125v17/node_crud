const express = require('express');
const router = express.Router();

const hbs  = require('handlebars');
hbs.registerPartial('menu', '<nav>menu</nav>');

router.get('/', function(req, res) {
    //res.render('index', {layout: 'main'}, {title : "start page"});
    res.render('index', {layout: 'main', title: 'start page'});
});

module.exports = router;