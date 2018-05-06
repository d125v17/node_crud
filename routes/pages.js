const express = require('express');
const router = express.Router();
const logger = require('../log/logger');

router.get('/', function(req, res) {
    logger.error('pages ERROR');
    res.render('index', {layout: 'main', title: 'start page'});
});

router.get('/login', function(req, res) {
    res.render('login', {layout: 'main', title: 'log in'});
});

router.get('/register', function(req, res) {
    res.render('register', {layout: 'main', title: 'registration'});
});

module.exports = router;