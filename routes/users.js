const express = require('express');
const router = express.Router();
const User = require('../models/user');

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

module.exports = router;