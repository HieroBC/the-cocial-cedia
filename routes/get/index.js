var app = require('../my_express');

app.get('/index', (req, res) => {
    res.render('index.ejs');
});

app.get('/', (req, res) => {
    res.redirect('/index');
});

// TODO move code below to POST folder
app.post('/login', (req, res) => {
    // fetch database
    // redirect to /home
    res.send('Login Succesful: ' + req.body.email + ' ' + req.body.password);
});

app.post('/createaccount', (req, res) => {
    // fetch database
    // if new info
        // create user in database
        // redirect to home
    res.send('Created account!'
    + ' USER: ' + req.body.user_name 
    + ' E-MAIL: ' + req.body.email
    + ' PASSWORD ' + req.body.password
    + ' GENDER: ' + req.body.gender
    + ' ' + (req.body.password === req.body.password_repeat ? 'passwords match' : 'passwords does not match')
);
});