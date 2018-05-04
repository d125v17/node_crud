const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {layout: 'main', title: 'start page'});
});

router.get('/login', function(req, res) {
    res.render('login', {layout: 'main', title: 'log in'});
});

router.get('/register', function(req, res) {
    res.render('register', {layout: 'main', title: 'registration'});
});

module.exports = router;