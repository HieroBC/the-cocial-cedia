var app = require('../my_express');
var User = require('../../models/user');

app.post('/createaccount', (req, res) => {
    User.findOne({auth: { email: req.body.email } })
    .then((foundUser) => {

        if(!foundUser){
            if(req.body.password === req.body.password_repeat){
                User.create({
                    name: req.body.user_name,
                    auth: {
                        email: req.body.email,
                        password: req.body.password
                    },
                    gender: req.body.gender
                }).then(() => {
                    // successfully created!
                    res.redirect('/home');
                })
            } else {
                // password mismatch
                console.log('Passwords dont match');
                res.redirect('/index');
            }
           
        } else {
            // user already registered
            console.log('User already exists');
            res.redirect('/index');
        }
    })
    
        
    // redirect to home
    // res.send('Created account!'
    // + ' USER: ' + req.body.user_name 
    // + ' E-MAIL: ' + req.body.email
    // + ' PASSWORD ' + req.body.password
    // + ' GENDER: ' + req.body.gender
    // + ' ' + (req.body.password === req.body.password_repeat ? 'passwords match' : 'passwords does not match')
    // );
});