var app = require('../my_express');

app.get('/options', (req, res) => {
    res.send('<h1>Options Page</h1>');
});