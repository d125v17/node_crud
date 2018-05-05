const express = require('express');
const router = express.Router();
const User = require('../models/user');
var multipart = require('connect-multiparty');
var multiMiddle = multipart();

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

router.post('/register', multiMiddle, function(req, res) {
    console.log('body=', req.body);
    let name = req.body.name;
    res.json({
        message : 'register',
        name : name
    })
});

module.exports = router;