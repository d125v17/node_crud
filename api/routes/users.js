const express = require('express');
const router = express.Router();
const User = require('../models/user');
const multipart = require('connect-multiparty');
const multiMiddle = multipart();
const HttpError = require('http-errors');
const auth = require('../secure/authCheck');
const logger = require('../log/logger');

router.get('/', function(req, res) {
  res.send('users home page');
});

router.get('/login', function(req, res) {
    res.json({
        message : 'login'
    })
});

router.post('/register', multiMiddle, async function(req, res, next) {
    if (!req.body.name) return next(HttpError(403, 'name required'));
    if (!req.body.email) return next(HttpError(403, 'email required'));
    if (!req.body.password) return next(HttpError(403, 'password required'));
    
    let oldUser = await User.findOne({ where: {'email' : req.body.email}});
    if (oldUser) return next(HttpError(403, 'user already exist'));

    let user = new User();
    user.name =  req.body.name;
    user.email =  req.body.email;
    user.password =  req.body.password;
    user.save();
    res.json({
        message : 'new user register'
    });
});

router.post('/login', multiMiddle, async function(req, res, next) {
    if (!req.body.email) return next(HttpError(403, 'email required'));
    if (!req.body.password) return next(HttpError(403, 'password required'));

    let user = await User.findOne({ where:{'email' : req.body.email, 'password' : req.body.password}});
    if (!user) return next(HttpError(403, 'wrong e-mail / password'));
    
    req.session.user = user.id;
    await req.session.save();
    res.json({
        message : 'successful login'
    });
});

router.post('/logout', multiMiddle, auth, async function(req, res, next) {
    await req.session.destroy();
    res.json({
        message : 'successful logout'
    });
});

module.exports = router;