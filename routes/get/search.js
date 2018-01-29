const app = require('../my_express');

app.get('/search', (req, res) => {
    res.send('This is the search page. What are you searching for?');
});