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
    res.send('Login succesful');
});

app.post('/createaccount', (req, res) => {
    // fetch database
    // if new info
        // create user in database
        // redirect to home
    res.send('Created account!');
});