var app = require('../my_express');
var User = require('../../models/user');

app.post('/createaccount', (req, res) => {
    User.findOne({email: req.body.email})
    .then((foundUser) => {

        if(!foundUser){
            if(req.body.password === req.body.password_repeat){
                User.create({
                    user_name: req.body.user_name,
                    email: req.body.email,
                    password: req.body.password,
                    gender: req.body.gender
                }).then(() => {
                    res.redirect('/home');
                })
            }
           
        } else {
            // tell user that is already registered
        }
    })
    
        
        // redirect to home
    res.send('Created account!'
    + ' USER: ' + req.body.user_name 
    + ' E-MAIL: ' + req.body.email
    + ' PASSWORD ' + req.body.password
    + ' GENDER: ' + req.body.gender
    + ' ' + (req.body.password === req.body.password_repeat ? 'passwords match' : 'passwords does not match')
    );
});