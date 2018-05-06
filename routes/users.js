const express = require('express');
const router = express.Router();
const User = require('../models/user');
const multipart = require('connect-multiparty');
const multiMiddle = multipart();
const HttpError = require('http-errors');

router.get('/', function(req, res) {
  res.send('users home page');
});

router.get('/db', async function(req,res) {

    let users = await User.findAll();
    users.forEach(function(user){
        console.log(user.first_name);
        if (user.last_name == "Diam") {
            user.last_name = "Diamandi";
            user.save();
        }
    });
    res.end('end get');
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
    
    let oldUser = await User.find({'email' : req.body.email});
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

module.exports = router;