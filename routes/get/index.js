const app = require('../my_express');

app.get('/', (req, res) => {
    res.send('This is the index page.');
});