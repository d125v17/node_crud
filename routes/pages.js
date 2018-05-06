const express = require('express');
const router = express.Router();
const logger = require('../log/logger');
const auth = require('../secure/authCheck');

router.get('/empty', function(req, res) {
    res.render('page404', {layout: 'main', title: 'cabinet', auth: req.session.user ? req.session.user : false});
});

router.get('/', function(req, res) {
    res.render('index', {layout: 'main', title: 'start page', auth: req.session.user ? req.session.user : false});
});

router.get('/login', function(req, res) {
    res.render('login', {layout: 'main', title: 'log in', auth: req.session.user ? req.session.user : false});
});

router.get('/register', function(req, res) {
    res.render('register', {layout: 'main', title: 'registration', auth: req.session.user ? req.session.user : false});
});

router.get('/cabinet', auth, function(req, res) {
    res.render('cabinet', {layout: 'main', title: 'cabinet', auth: req.session.user ? req.session.user : false});
});



module.exports = router;