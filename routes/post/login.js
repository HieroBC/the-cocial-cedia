var app = require('../my_express');
var User = require('../../models/user')

app.post('/login', (req, res) => {
    // fetch database
    User.findOne({ auth: { email: req.body.email } })
    .then((foundUser) => {
        if(foundUser === null){
            // user not registered!
            console.log('User not registered!');
            res.redirect('/index');
        } else {
            // ok, logging in
            res.redirect('/home');
        }
    }).catch((e) => console.log('error! ' + e));
    //res.send('Login Succesful: ' + req.body.email + ' ' + req.body.password);
});