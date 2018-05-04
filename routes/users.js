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

router.post('/register', function(req, res) {
    // let name = req.body.name;
    console.log('body=', req.query);
    let name = req.body.name;
    //
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            console.log('OTHER WAY', body);
        });
    //
    res.json({
        message : 'register',
        name : name
    })
});

module.exports = router;