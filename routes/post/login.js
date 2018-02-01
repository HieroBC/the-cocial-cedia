var app = require('../my_express');

app.post('/login', (req, res) => {
    // fetch database
    // redirect to /home
    res.send('Login Succesful: ' + req.body.email + ' ' + req.body.password);
});