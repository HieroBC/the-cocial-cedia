var app = require('../my_express');

app.get('/home', (req, res) => {
    res.render('home.ejs');
});